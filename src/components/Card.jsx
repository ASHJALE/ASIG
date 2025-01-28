import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description.length > 100 ? product.description.substring(0, 97) + '...' : product.description}</p>
            <div>
                <span>
                    {Array.from({ length: product.rating }, (_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} className="filled" />
                    ))}
                </span>
                <p>Price: ${product.price}</p>
            </div>
            <Link to={`/product/${product.id}`}>
                <button>View Product</button>
            </Link>
        </div>
    );
};

export default Card;


