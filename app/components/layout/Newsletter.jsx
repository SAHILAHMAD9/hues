export const Newsletter = () => {
    return (
        <section className="py-32 bg-forest-950/80">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <h2 className="font-playfair text-5xl lg:text-6xl font-light mb-8 text-gradient">
                        Stay Connected
                    </h2>
                    <p className="text-xl text-white/60 mb-12 leading-relaxed">
                        Be the first to discover new collections, artisan stories, and exclusive offers crafted just for you.
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex rounded-full overflow-hidden bg-white/5 p-2 glass-effect border border-white/10">
                            <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-6 py-3 text-white placeholder-white/40 focus:outline-none"/>
                            <button className="bg-white  text-forest-900 px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}