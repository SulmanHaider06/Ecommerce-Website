import React, { useState } from 'react';
import api from '../api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    // Autofill mostly handled by user context, but order still requires customer_name/email for the backend
    // Or we could rely on the backend to pick it up from the Auth token if we modified the controller,
    // but the current controller expects 'customer_name' and 'customer_email' in the request body.
    const [formData, setFormData] = useState({
        customer_name: user ? user.name : '',
        customer_email: user ? user.email : ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const orderData = {
            ...formData,
            products: cart.map(item => ({ id: item.id, quantity: item.quantity }))
        };

        try {
            await api.post('/orders', orderData);
            clearCart();
            // Could redirect to a success page
            alert('Order placed successfully!');
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) return <div className="p-4">Your cart is empty.</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Secure Checkout</h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side: Order Summary */}
                <div className="md:w-1/2 bg-gray-50 p-8 border-r border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Order Details</h3>
                    <div className="space-y-4 pr-4 custom-scrollbar max-h-96 overflow-y-auto">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center font-bold text-gray-300">
                                    {item.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-gray-700">{item.name}</h4>
                                    <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                                </div>
                                <span className="font-bold text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-gray-800">Total to Pay</span>
                            <span className="text-2xl font-bold text-blue-600">${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Shipping Information</h3>
                    {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm font-medium">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                value={formData.customer_name}
                                onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                value={formData.customer_email}
                                onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform focus:outline-none focus:ring-2 focus:ring-green-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Processing Order...' : `Pay $${cartTotal.toFixed(2)}`}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
