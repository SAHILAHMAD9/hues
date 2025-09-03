'use client';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/app/components/ui/Logo';

// Renders the login form and handles user login.
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            router.push('/'); // Redirect to home page on successful login
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen hero-bg flex items-center justify-center px-6 py-20">
            <div className="w-full max-w-md animate-fade-in-up">
                <div className="text-center mb-8">
                    <div className="mb-6">
                        <Logo />
                    </div>
                    <h1 className="font-playfair text-4xl font-light text-white mb-2">Welcome Back</h1>
                    <p className="text-white/60">Sign in to your account to continue</p>
                </div>
                
                <div className="product-card rounded-2xl p-8 hover-lift">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300"
                                required
                            />
                        </div>
                        
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                                <p className="text-red-400 text-sm">{error}</p>
                            </div>
                        )}
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full btn-primary px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>
                
                <div className="text-center mt-8">
                    <p className="text-white/60">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-white hover:text-white/80 transition-colors duration-300 underline">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}