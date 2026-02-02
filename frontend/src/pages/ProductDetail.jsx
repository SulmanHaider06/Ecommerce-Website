import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => {
                setProduct(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );

    if (!product) return <div>Product not found.</div>;

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="md:flex">
                <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center relative">
                    <Link to="/" className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        <span>Back</span>
                    </Link>
                    {/* Placeholder for Product Image */}
                    <div className="w-full aspect-square bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-inner">
                        <span className="text-9xl font-bold text-white opacity-50">{(product.name || 'P').charAt(0)}</span>
                    </div>
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-blue-600 font-bold mb-2">Sulman-Ecommerce Exclusive</div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex items-end space-x-4 mb-8">
                        <span className="text-5xl font-bold text-gray-900">${Number(product.price).toFixed(2)}</span>
                        <span className="text-lg text-green-500 font-semibold mb-2">In Stock ({product.stock})</span>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100 flex space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-sm">Secure Payment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm">Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
