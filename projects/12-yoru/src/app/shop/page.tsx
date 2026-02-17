import InteractiveProductCard from "@/components/shop/InteractiveProductCard";
import { products } from "@/lib/data";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 text-amber-500 text-sm font-bold tracking-widest uppercase mb-4">
            <ShoppingBag size={18} />
            <span>Premium Selection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6">All Collection</h1>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0 text-lg">
            夜の時間を豊かにする、厳選されたインテリア・照明アイテム。
            あなたの感性に響く一品をお探しください。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
          {products.map((product) => (
            <InteractiveProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <Link href="/" className="text-gray-500 hover:text-white transition-colors">
            &larr; ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
