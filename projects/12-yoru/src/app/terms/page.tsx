import { siteConfig } from "@/lib/site-config";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <h1 className="text-3xl font-light mb-8">利用規約</h1>

                <div className="space-y-6 text-white/70 leading-relaxed text-sm">
                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第1条（適用）</h2>
                        <p>本規約は、{siteConfig.name}（以下「当店」）が提供するサービスの利用条件を定めるものです。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第2条（商品の購入）</h2>
                        <p>お客様は当店所定の方法により商品を購入できます。購入契約は、当店が注文を承諾した時点で成立します。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第3条（支払い）</h2>
                        <p>商品代金の支払いは、クレジットカードにて行うものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第4条（配送）</h2>
                        <p>商品の配送は日本国内に限ります。配送日数は通常7〜14営業日となります。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第5条（返品・交換）</h2>
                        <p>商品到着後7日以内であれば、未使用品に限り返品・交換を承ります。お客様都合による返品の場合、送料はお客様負担となります。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第6条（免責事項）</h2>
                        <p>当店は、お客様に生じた損害について、当店に故意または重大な過失がある場合を除き、一切の責任を負いません。</p>
                    </section>

                    <p className="pt-8 text-white/40">最終更新日：2026年2月11日</p>
                </div>
            </div>
        </main>
    );
}
