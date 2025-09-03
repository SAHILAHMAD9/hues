'use client';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import Logo from '@/app/components/ui/Logo';

// Renders the signup form and handles new user registration.
export default function SignUpPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);
        try {
            await signUp(email, password, fullName);
            setMessage('Success! Please check your email to confirm your account.');
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
                    <h1 className="font-playfair text-4xl font-light text-white mb-2">Join hues</h1>
                    <p className="text-white/60">Create your account to get started</p>
                </div>
                
                {message ? (
                    <div className="product-card rounded-2xl p-8 hover-lift">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h2 className="font-playfair text-2xl font-light text-white mb-2">Account Created!</h2>
                            <p className="text-white/60">{message}</p>
                        </div>
                    </div>
                ) : (
                    <div className="product-card rounded-2xl p-8 hover-lift">
                        <form onSubmit={handleSignUp} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300"
                                    required
                                />
                            </div>
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
                                    placeholder="Password (min. 6 characters)"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300"
                                    required
                                    minLength={6}
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
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>
                    </div>
                )}
                
                <div className="text-center mt-8">
                    <p className="text-white/60">
                        Already have an account?{' '}
                        <Link href="/login" className="text-white hover:text-white/80 transition-colors duration-300 underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}