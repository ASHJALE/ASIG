import React from 'react';
import Card from './Card';
import Table from './Table';


const Dashboard = ({ products, users }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <h2>Users</h2>
            <Table users={users} />
        </div>
    );
};

export default Dashboard;