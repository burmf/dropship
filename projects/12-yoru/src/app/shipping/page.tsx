export default function ShippingPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <h1 className="text-3xl font-light mb-8">配送・返品について</h1>

                <div className="space-y-8 text-white/70 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">配送について</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-3">
                            <div className="flex justify-between">
                                <span className="text-white/50">送料</span>
                                <span className="text-white">全国一律 無料</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/50">お届け日数</span>
                                <span className="text-white">7〜14営業日</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/50">配送方法</span>
                                <span className="text-white">提携国際運送便</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">返品・交換について</h2>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="text-amber-500">✓</span>
                                <span>商品到着後7日以内であれば返品可能</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-amber-500">✓</span>
                                <span>未使用・未開封の商品に限ります</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-amber-500">✓</span>
                                <span>不良品の場合は送料当店負担</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-white/40">×</span>
                                <span className="text-white/50">お客様都合の場合は送料お客様負担</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-white mb-4">返品の手順</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>まずはメール（info@yoruheya.jp）でご連絡ください</li>
                            <li>返品受付番号をお伝えします</li>
                            <li>商品を元の梱包材で発送してください</li>
                            <li>到着確認後、5営業日以内に返金処理いたします</li>
                        </ol>
                    </section>
                </div>
            </div>
        </main>
    );
}
