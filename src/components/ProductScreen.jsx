import React from 'react';

const ProductScreen = ({ product }) => {
  return (
    <div className="product-screen">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating} <span className="fa fa-star"></span></p>
    </div>
  );
};

export default ProductScreen;
