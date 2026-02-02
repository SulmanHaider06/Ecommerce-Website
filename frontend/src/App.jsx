import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/" element={<Layout><ProductList /></Layout>} />
                        <Route path="/products" element={<Navigate to="/" replace />} />
                        <Route path="/products/:id" element={<Layout><ProductDetail /></Layout>} />
                        <Route path="/cart" element={<Layout><Cart /></Layout>} />

                        <Route path="/checkout" element={
                            <PrivateRoute>
                                <Layout><Checkout /></Layout>
                            </PrivateRoute>
                        } />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
