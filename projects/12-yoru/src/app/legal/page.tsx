import { siteConfig } from "@/lib/site-config";

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20 pb-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <h1 className="text-3xl font-light mb-8">特定商取引法に基づく表記</h1>

                <div className="space-y-8 text-white/70 leading-relaxed text-sm">
                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">販売業者</h2>
                        <p>{siteConfig.company.name}</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">所在地</h2>
                        <p>{siteConfig.company.address}</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">連絡先</h2>
                        <p>メールアドレス: {siteConfig.company.email}</p>
                        <p className="mt-2 text-xs text-white/40">※お問い合わせはメールにて承っております。電話番号については、お客様のお申し出により遅滞なくメールにて提供いたします。</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">販売価格</h2>
                        <p>各商品ページに表示された価格（消費税込）に基づきます。</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">商品代金以外の必要料金</h2>
                        <p>配送料：全国送料無料</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">お支払い方法</h2>
                        <p>クレジットカード決済（VISA, MasterCard, American Express, JCB）</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">代金の支払い時期</h2>
                        <p>商品注文確定時に課金されます。</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">商品の引渡時期</h2>
                        <p>ご注文確定後、通常3営業日以内に発送いたします。お届けまでは発送後7〜14営業日程度かかります。</p>
                    </section>

                    <section className="border-b border-white/5 pb-6">
                        <h2 className="text-lg font-medium text-white mb-4">返品・交換について</h2>
                        <p>商品到着後7日以内であれば、未使用品に限り返品・交換を承ります。詳細は「利用規約」をご確認ください。</p>
                    </section>

                    <p className="pt-4 text-white/40">最終更新日：2026年2月16日</p>
                </div>
            </div>
        </main>
    );
}
