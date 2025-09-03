import Link from "next/link";

export const Feature = () => {
    return (
        <section id="collection" className="py-32 bg-forest-950/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="font-playfair text-5xl lg:text-6xl font-light mb-6 text-gradient">
                        Featured Collection
                    </h2>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        Each piece in our collection is thoughtfully curated to bring artisanal beauty into your everyday life.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {/* You would map over your products here */}
                    <div className="product-card rounded-2xl p-8 hover-lift group animate-scale-in">
                        <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-6 flex items-center justify-center"></div>
                        <h3 className="font-playfair text-2xl font-medium mb-3 text-white">Artisan Journals</h3>
                        <p className="text-white/60 mb-6 leading-relaxed">Hand-bound journals with premium paper.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-medium text-white">₹2,499</span>
                            <button className="bg-white/10 hover:bg-white hover:text-forest-900 px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center animate-fade-in-up">
                    <Link href="/products" className="btn-primary px-12 py-4 rounded-full text-white font-medium">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    )
}
