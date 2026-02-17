import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <h1 className="text-3xl font-light mb-8">特定商取引法に基づく表記</h1>

                <div className="space-y-6 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">販売業者</span>
                        <span className="sm:col-span-2 text-white">関海斗</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">所在地</span>
                        <span className="sm:col-span-2 text-white">〒600-8846 京都府京都市下京区朱雀宝蔵町44番地 協栄ビル2階 京都朱雀スタジオAV-510</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">電話番号</span>
                        <span className="sm:col-span-2 text-white">請求があった場合に遅滞なく開示いたします</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">メールアドレス</span>
                        <span className="sm:col-span-2 text-white">info@yoruheya.jp（お問い合わせはフォームより承ります）</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">販売価格</span>
                        <span className="sm:col-span-2 text-white">各商品ページに記載（表示価格は消費税込み）</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">商品代金以外の必要料金</span>
                        <span className="sm:col-span-2 text-white">なし（全国一律送料無料）</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">支払い方法</span>
                        <span className="sm:col-span-2 text-white">クレジットカード決済（Stripe）</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">支払い時期</span>
                        <span className="sm:col-span-2 text-white">商品注文時にお支払いが確定します。</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">商品の引き渡し時期</span>
                        <span className="sm:col-span-2 text-white">
                            海外提携倉庫より直送のため、ご注文確定後、順次発送・お届けいたします。<br />
                            ※通常、発送からお届けまで1〜2週間程度お時間をいただいております。
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-white/10">
                        <span className="text-white/50">返品・交換・キャンセル</span>
                        <span className="sm:col-span-2 text-white">
                            【お客様都合による場合】<br />
                            ご注文確定後のキャンセル、返品、交換はお受けしておりません。<br /><br />
                            【商品不良・誤配送の場合】<br />
                            初期不良または配送中の破損に限り、商品到着後7日以内にご連絡いただければ送料当社負担にて交換対応をさせていただきます。
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
