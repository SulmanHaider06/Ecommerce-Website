import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await login(formData.email, formData.password);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-900">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
                <h2 className="text-3xl font-extrabold text-center text-white mb-6">Welcome Back</h2>
                {error && <div className="bg-red-500/80 text-white p-3 rounded mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
