import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className="card">
            <h3>Product Name</h3>
            <FontAwesomeIcon icon={faStar} />
            <Link to="/product">View Product</Link>
        </div>
    );
};

export default Card;
