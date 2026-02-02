import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
                {/* Placeholder for image - using distinct gradients for now if no image url is present*/}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="z-10 text-4xl font-bold text-gray-300 select-none">
                    {(product.name || 'P').charAt(0)}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="mb-2">
                    <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-md">
                        New Arrival
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xl font-extrabold text-gray-900">
                        ${Number(product.price).toFixed(2)}
                    </span>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-gray-900 text-white p-3 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
