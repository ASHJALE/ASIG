import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description.slice(0, 100)}...</p>
      <Rating rating={product.rating} />
      <p><strong>Price:</strong> ${product.price}</p>
      <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
    </div>
  );
};

export default Card;
