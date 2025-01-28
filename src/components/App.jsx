import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './screens/Dashboard';
import ProductScreen from './screens/ProductScreen';
import UserScreen from './screens/UserScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard products={productsData} users={usersData} />} />
        <Route path="/product/:id" element={<ProductScreen product={productData} />} />
        <Route path="/user/:id" element={<UserScreen user={userData} />} />
      </Routes>
    </Router>
  );
};

export default App;
