import Link from 'next/link';
import {Hero} from "@/app/components/layout/Hero";
import {Feature} from "@/app/components/layout/Feature";
import {Newsletter} from "@/app/components/layout/Newsletter";

// This is the main home page, replicating the beautiful UI from the static file.
export default function Home() {
    return (
        <>
            <Hero/>
            <Feature/>
            <Newsletter/>
        </>
    );
}
