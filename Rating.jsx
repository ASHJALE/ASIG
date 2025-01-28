import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon 
                    key={index} 
                    icon={faStar} 
                    className={index < rating ? 'filled' : 'empty'} 
                />
            ))}
        </div>
    );
};

export default Rating;