import Link from "next/link";
import Logo from "../ui/Logo";

// This is the footer component for the application.
const Footer = () => {
    return (
        <footer className="bg-forest-950 text-white py-10">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <Logo />
                    <p className="text-white/50 mt-2 text-sm">By Paridhi Bakshi</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Link href="#" className="text-white/70 hover:text-white transition">Instagram</Link>
                    <Link href="#" className="text-white/70 hover:text-white transition">Contact</Link>
                    <Link href="#" className="text-white/70 hover:text-white transition">About</Link>
                </div>
                <div className="text-white/40 text-xs mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} hues. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
