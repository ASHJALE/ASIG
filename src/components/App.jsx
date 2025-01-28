import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './screens/Dashboard';
import ProductScreen from './screens/ProductScreen';

const App = () => {
    const products = [
        { id: 1, name: 'Product 1', image: 'image1.jpg', description: 'This is product 1', rating: 4, price: 29.99 },
        { id: 2, name: 'Product 2', image: 'image2.jpg', description: 'This is product 2', rating: 5, price: 39.99 },
        // Add more products as needed
    ];

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Dashboard products={products} />
                    </Route>
                    <Route path="/product/:id">
                        <ProductScreen products={products} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;