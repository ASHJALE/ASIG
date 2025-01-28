import React from 'react';
import Card from './Card';
import Table from './Table';

const Dashboard = ({ products, users }) => {
  return (
    <div className="dashboard">
      <div className="product-list">
        <h2>Products</h2>
        <div className="card-container">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="user-list">
        <h2>Users</h2>
        <Table users={users} />
      </div>
    </div>
  );
};

export default Dashboard;
