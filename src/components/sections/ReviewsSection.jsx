import React, { useState, useEffect } from 'react';
import { reviews } from '../../constants/reviews';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalReviews]);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % totalReviews;
      visible.push({
        ...reviews[index],
        position: i // 0 = top (faded), 1 = middle (full), 2 = bottom (faded)
      });
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Clients Say</h2>
      <div className="reviews-container">
        <div className="reviews-scroll">
          {visibleReviews.map((review, idx) => (
            <div
              key={review.id}
              className={`review-card review-position-${review.position}`}
            >
              <div className="review-rating">
                {'★'.repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

