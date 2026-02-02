import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await register(formData.name, formData.email, formData.password, formData.password_confirmation);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
                <h2 className="text-3xl font-extrabold text-center text-white mb-6">Create Account</h2>
                {error && <div className="bg-red-500/80 text-white p-3 rounded mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                            placeholder="••••••••"
                            value={formData.password_confirmation}
                            onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
