import Hero from "@/components/layout/Hero";
import InteractiveProductCard from "@/components/shop/InteractiveProductCard";
import { products, reviews } from "@/lib/data"; // reviewsを追加
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, Package, Truck, ShieldCheck } from "lucide-react"; // アイコン追加

export default function Home() {
  // 単品商品をすべて表示
  const singleProducts = products;

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Hero />
      {/* --- Collection Section --- */}
      <section id="products" className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-2">
                Collection
              </h2>
              <p className="text-gray-400 text-sm">厳選されたプロダクトラインナップ</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
            {singleProducts.map((product) => (
              <InteractiveProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Showcase: Floating Moon Lamp --- */}
      <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full animate-pulse" />
                <Image
                  src="/products/moon/main.png"
                  alt="Rotating Moon Lamp Collection"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>
            <div className="flex-1 space-y-10">
              <div>
                <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-4 block">Technology & Design</span>
                <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
                  静寂に包まれた、<br />
                  <span className="font-serif italic italic text-amber-500/90">Eternal Rotation.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  最新の3Dプリント技術で月のクレーターまで精巧に再現。木製ベースの上で360度ゆっくりと回転する月。その神秘的な姿は、眺めているだけで日常のストレスを忘れさせてくれます。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <div className="w-8 h-[1px] bg-amber-500" /> 3 Gradual Colors
                  </div>
                  <p className="text-gray-500 text-sm">
                    温かみのあるイエロー、清潔感のあるホワイト、柔らかな電球色。3つのカラーを指先ひとつで切り替え可能。
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <div className="w-8 h-[1px] bg-amber-500" /> Step-less Dimming
                  </div>
                  <p className="text-gray-500 text-sm">
                    読書から就寝前の常夜灯まで。10段階以上の細かい明るさ調整が可能。
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <div className="w-8 h-[1px] bg-amber-500" /> Size Variations
                  </div>
                  <p className="text-gray-500 text-sm">
                    12cm, 15cm, 18cmの3つのサイズをご用意。お部屋の広さやインパクトに合わせてお選びいただけます。
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <div className="w-8 h-[1px] bg-amber-500" /> Remote & Touch Control
                  </div>
                  <p className="text-gray-500 text-sm">
                    専用リモコンと本体へのタッチで操作。離れた場所からの調光や、16色のカラーサイクルも自由自在。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
