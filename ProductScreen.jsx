import React from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = ({ products }) => {
    const { id } = useParams(); // Get the product ID from the URL
    const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

    if (!product) {
        return <h2>Product not found</h2>; // Handle case where product is not found
    }

    return (
        <div className="product-screen">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more details as needed */}
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductScreen;