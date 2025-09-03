'use client';
import Link from 'next/link';
// import useCart from '@/hooks/useCart';
import useAuth from '@/hooks/useAuth';
import Logo from '../ui/Logo';

// This is the main navigation bar for the application.
const Navbar = () => {
    // const { cartItems } = useCart();
    const { user, loading, logout } = useAuth();
    // const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="animate-slide-in-left">
                        <Logo />
                    </div>
                    <div className="hidden md:flex items-center space-x-12">
                        <Link href="/public" className="text-sm font-medium hover:text-white/70 transition-all duration-300">Home</Link>
                        <Link href="/products" className="text-sm font-medium hover:text-white/70 transition-all duration-300">Collection</Link>
                    </div>
                    <div className="flex items-center space-x-6 animate-slide-in-right">
                        {!loading && user ? (
                            <button onClick={logout} className="hover:text-white/70 transition-all duration-300" title="Logout">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
                                </svg>
                            </button>
                        ) : (
                            <Link href="/login" className="hover:text-white/70 transition-all duration-300" title="Login">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>
                        )}
                        <Link href="/cart" className="relative hover:text-white/70 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4-2L3 3m4 10v6a1 1 0 001 1h8a1 1 0 001-1v-6m-1 4a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                            {/*{itemCount > 0 && <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-forest-900 rounded-full text-xs flex items-center justify-center font-medium">{itemCount}</span>}*/}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
