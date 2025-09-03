import Link from "next/link";

export const Hero = () => {
    return (
        <section id="home" className="relative h-screen hero-bg flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <div className="animate-fade-in-up">
                    <h1 className="font-playfair text-8xl lg:text-9xl font-light mb-6 text-gradient leading-none">
                        hues
                    </h1>
                    <p className="text-xl lg:text-2xl font-light mb-8 text-white/80" style={{ animationDelay: '0.2s' }}>
                        By Paridhi Bakshi
                    </p>
                    <p className="text-lg font-light mb-12 text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.4s' }}>
                        Discover our curated collection of artisanal treasures, where craftsmanship meets contemporary elegance in every carefully selected piece.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '0.6s' }}>
                        <Link href="/products" className="btn-primary px-12 py-4 rounded-full text-white font-medium">
                            Explore Collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}