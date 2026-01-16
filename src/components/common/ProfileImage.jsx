import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({ src, alt = 'Dr. Kylene Halliday' }) => {
  return (
    <div className="profile-image-container">
      {src ? (
        <img src={src} alt={alt} className="profile-photo" />
      ) : (
        <div className="profile-image-placeholder">📸</div>
      )}
    </div>
  );
};

export default ProfileImage;

