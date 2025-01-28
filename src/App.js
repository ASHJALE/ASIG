import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ratings from './components/Ratings';
import ProductScreen from './components/ProductScreen';
import UserScreen from './components/UserScreen';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Ratings />} />
                <Route path="/product" element={<ProductScreen />} />
                <Route path="/user" element={<UserScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
