import React, { useState, useRef } from 'react';
import './AxesCross.css';

const SparkleShape = ({ x, y }) => {
  const boxSize = 25;
  const center = boxSize / 2;
  const halfLength = boxSize / 2;

  return (
    <svg 
      className="sparkle-shape"
      width={boxSize} 
      height={boxSize} 
      viewBox={`0 0 ${boxSize} ${boxSize}`}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {/* Smooth concave curves connecting all four points, creating a filled shape */}
      <path
        d={`M ${center} ${center - halfLength} 
            Q ${center + halfLength * 0.1} ${center - halfLength * 0.1} ${center + halfLength} ${center}
            Q ${center + halfLength * 0.1} ${center + halfLength * 0.1} ${center} ${center + halfLength}
            Q ${center - halfLength * 0.1} ${center + halfLength * 0.1} ${center - halfLength} ${center}
            Q ${center - halfLength * 0.1} ${center - halfLength * 0.1} ${center} ${center - halfLength}
            Z`}
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

const AxesCross = () => {
  const containerRef = useRef(null);
  const [boxPosition, setBoxPosition] = useState({ left: 37.5, top: 22.5 });
  const [boxSize, setBoxSize] = useState({ width: 25, height: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragHandle, setDragHandle] = useState(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, handle) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDragHandle(handle);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    if (!isDragging) return;

    const handleMouseMoveEvent = (e) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const deltaX = ((e.clientX - dragStart.x) / containerRect.width) * 100;
      const deltaY = ((e.clientY - dragStart.y) / containerRect.height) * 100;

      if (dragHandle === 'move') {
        setBoxPosition(prev => ({
          left: Math.max(0, Math.min(100 - boxSize.width, prev.left + deltaX)),
          top: Math.max(0, Math.min(100 - boxSize.height, prev.top + deltaY)),
        }));
        setDragStart({ x: e.clientX, y: e.clientY });
      } else if (dragHandle && dragHandle !== 'move') {
        // Resize from corners
        setBoxSize(prevSize => {
          const newWidth = Math.max(5, prevSize.width + (dragHandle.includes('right') ? deltaX : -deltaX));
          const newHeight = Math.max(5, prevSize.height + (dragHandle.includes('bottom') ? deltaY : -deltaY));
          const newSize = Math.min(newWidth, newHeight);
          
          // Adjust position if resizing from top or left
          if (dragHandle.includes('top')) {
            setBoxPosition(prevPos => ({ 
              ...prevPos, 
              top: Math.max(0, prevPos.top - (newSize - prevSize.height)) 
            }));
          }
          if (dragHandle.includes('left')) {
            setBoxPosition(prevPos => ({ 
              ...prevPos, 
              left: Math.max(0, prevPos.left - (newSize - prevSize.width)) 
            }));
          }
          
          return { width: newSize, height: newSize };
        });
        
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUpEvent = () => {
      setIsDragging(false);
      setDragHandle(null);
    };

    window.addEventListener('mousemove', handleMouseMoveEvent);
    window.addEventListener('mouseup', handleMouseUpEvent);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveEvent);
      window.removeEventListener('mouseup', handleMouseUpEvent);
    };
  }, [isDragging, dragHandle, dragStart, boxSize]);

  const generateSparkles = () => {
    const sparkles = [];
    const count = 15;
    
    for (let i = 0; i < count; i++) {
      sparkles.push({
        id: i,
        x: boxPosition.left + Math.random() * boxSize.width,
        y: boxPosition.top + Math.random() * boxSize.height,
      });
    }
    return sparkles;
  };

  const sparkles = generateSparkles();

  return (
    <div 
      ref={containerRef}
      className="sparkles-container"
    >
      {/* Resizable black box */}
      <div 
        className="sparkle-area-outline"
        style={{
          position: 'absolute',
          left: `${boxPosition.left}%`,
          top: `${boxPosition.top}%`,
          width: `${boxSize.width}%`,
          height: `${boxSize.height}%`,
          border: '2px solid black',
          cursor: isDragging ? 'grabbing' : 'grab',
          zIndex: 2,
        }}
        onMouseDown={(e) => handleMouseDown(e, 'move')}
      >
        {/* Corner handles */}
        <div className="resize-handle resize-handle-top-left" onMouseDown={(e) => handleMouseDown(e, 'top-left')} />
        <div className="resize-handle resize-handle-top-right" onMouseDown={(e) => handleMouseDown(e, 'top-right')} />
        <div className="resize-handle resize-handle-bottom-left" onMouseDown={(e) => handleMouseDown(e, 'bottom-left')} />
        <div className="resize-handle resize-handle-bottom-right" onMouseDown={(e) => handleMouseDown(e, 'bottom-right')} />
      </div>
      {sparkles.map((sparkle) => (
        <SparkleShape
          key={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
        />
      ))}
    </div>
  );
};

export default AxesCross;

