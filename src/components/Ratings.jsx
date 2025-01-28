import React from 'react';

const Rating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={star ? "fa fa-star" : "fa fa-star-o"}></span>
      ))}
    </div>
  );
};

export default Rating;
