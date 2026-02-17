import { siteConfig } from "@/lib/site-config";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <h1 className="text-3xl font-light mb-8">プライバシーポリシー</h1>

                <div className="space-y-6 text-white/70 leading-relaxed text-sm">
                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">個人情報の取り扱いについて</h2>
                        <p>{siteConfig.name}（以下「当店」）は、お客様の個人情報を適切に管理し、保護することを重要な責務と考えております。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">収集する情報</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>氏名、住所、電話番号、メールアドレス</li>
                            <li>注文履歴、お支払い情報</li>
                            <li>お問い合わせ内容</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">利用目的</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>商品の発送、お問い合わせへの対応</li>
                            <li>サービス向上のための分析</li>
                            <li>新商品やキャンペーン情報のお知らせ（同意いただいた場合のみ）</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">第三者への提供</h2>
                        <p>当店は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-medium text-white mb-3">お問い合わせ</h2>
                        <p>個人情報に関するお問い合わせは、info@yoruheya.jp までご連絡ください。</p>
                    </section>

                    <p className="pt-8 text-white/40">最終更新日：2026年2月11日</p>
                </div>
            </div>
        </main>
    );
}
