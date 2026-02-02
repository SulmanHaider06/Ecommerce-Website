import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart, cartTotal } = useCart();

    if (cart.length === 0) return (
        <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-md p-8 text-center">
            <svg className="w-24 h-24 text-gray-200 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Start Shopping</Link>
        </div>
    );

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <ul className="divide-y divide-gray-100">
                            {cart.map(item => (
                                <li key={item.id} className="p-6 flex items-center hover:bg-gray-50 transition">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-xl font-bold text-gray-400">
                                        {(item.name || 'P').charAt(0)}
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <div className="flex justify-between">
                                            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                            <p className="text-lg font-bold text-gray-900">${Number(item.price).toFixed(2)}</p>
                                        </div>
                                        <p className="text-gray-500 text-sm mt-1">Quantity: {item.quantity}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-6 text-red-500 hover:text-red-700 transition"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                        <div className="flex justify-between mb-4 text-gray-600">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-gray-600">
                            <span>Tax (Estimate)</span>
                            <span>$0.00</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-8">
                            <span className="text-2xl font-bold text-gray-900">Total</span>
                            <span className="text-2xl font-bold text-blue-600">${cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="space-y-4">
                            <Link to="/checkout" className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform">
                                Proceed to Checkout
                            </Link>
                            <button onClick={clearCart} className="block w-full text-center text-gray-500 hover:text-gray-700 font-medium py-2">
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
