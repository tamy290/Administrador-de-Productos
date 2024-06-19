import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/productos" element={<ProductForm />} />
                    <Route path="/api/productos" element={<ProductList />} />
                    <Route path="/productos/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
};


export default App;


