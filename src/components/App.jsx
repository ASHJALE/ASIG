import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ratings from './components/Ratings';
import Dashboard from './components/Dashboard'; // Make sure this exists
import Navbar from './components/Navbar'; // If you have a Navbar

function App() {
    return (
        <Router>
            <Navbar />  {/* Make sure this is included */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ratings" element={<Ratings />} />
            </Routes>
        </Router>
    );
}

export default App;
