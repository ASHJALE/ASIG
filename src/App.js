import React from 'react';
import './App.css';
import Card from './components/Card';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
import ProductScreen from './components/ProductScreen';
import UserScreen from './components/UserScreen';
import Table from './components/Table';



function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <Dashboard />
      <Card />
      <ProductScreen />
      <UserScreen />
      <Table />
      <Ratings />
    </div>
  );
}

export default App;
