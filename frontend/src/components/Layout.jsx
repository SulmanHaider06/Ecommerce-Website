import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Layout = ({ children }) => {
    const { user, logout } = useAuth();
    const { cart } = useCart();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 shadow-2xl`}
            >
                <div className="h-20 flex items-center justify-center border-b border-gray-700">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                        Sulman-Shop
                    </h1>
                </div>

                <nav className="mt-8 px-4 space-y-2">
                    <Link
                        to="/"
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        to="/products"
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/products') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        <span>Products</span>
                    </Link>
                    <Link
                        to="/cart"
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/cart') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="flex-1">Cart</span>
                        {cart.length > 0 && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cart.length}</span>}
                    </Link>
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
                    {user ? (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                    {(user.name || 'U').charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{user.name || 'User'}</p>
                                    <button onClick={logout} className="text-xs text-gray-400 hover:text-red-400 transition-colors">Sign out</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                            <span>Sign In</span>
                        </Link>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300`}>
                {/* Header */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 sticky top-0 z-40">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>

                    <div className="flex items-center space-x-4 ml-auto">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </span>
                            <input
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring-1 focus:ring-blue-300 sm:text-sm transition duration-150 ease-in-out"
                                placeholder="Search products..."
                                type="search"
                            />
                        </div>
                        <button className="text-gray-400 hover:text-gray-500 transition-colors">
                            <span className="sr-only">Notifications</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </button>
                    </div>
                </header>

                {/* Content Body */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Sulman-Ecommerce. All rights reserved. Designed for Excellence.
                </footer>
            </div>
        </div>
    );
};

export default Layout;
