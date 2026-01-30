import Hero from "@/components/layout/Hero";
import InteractiveProductCard from "@/components/shop/InteractiveProductCard";
import { products } from "@/lib/data";

export default function HomeWithVariantB() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#2D2D2D]">
      <Hero />

      {/* Variant B: Warm & Classic Aesthetic */}
      <section className="container mx-auto px-6 py-24 bg-[#F5F5F0]">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-sm font-serif italic text-stone-500 mb-2">Handpicked for you</span>
          <h2 className="text-4xl font-serif text-stone-800">Curated Collection</h2>
          <div className="w-16 h-0.5 bg-stone-400 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <InteractiveProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
