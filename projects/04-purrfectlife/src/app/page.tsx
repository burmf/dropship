import Hero from "@/components/layout/Hero";
import InteractiveProductCard from "@/components/shop/InteractiveProductCard";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />

      {/* Scroll Verification Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">Trending Matching Sets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <InteractiveProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
