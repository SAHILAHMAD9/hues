import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
// import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

// 1. Initialize fonts from Google and define the CSS variable names
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'hues — By Paridhi Bakshi',
    description: 'A modern e-commerce storefront for handcrafted goods.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        {/* 2. Apply the font variables to the entire app via the body tag */}
        <body className={`${playfair.variable} ${inter.variable} font-inter`}>
        <AuthProvider>
            {/*<CartProvider>*/}
                <Navbar />
                <main>{children}</main>
                <Footer />
            {/*</CartProvider>*/}
        </AuthProvider>
        </body>
        </html>
    );
}

