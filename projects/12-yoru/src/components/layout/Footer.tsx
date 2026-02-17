import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
            <div className="container px-6 py-12 md:py-16 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">{siteConfig.name}</h3>
                        <p className="text-sm text-white/50">{siteConfig.description}</p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4 text-white/80">ショップ</h4>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="/#products" className="hover:text-white transition-colors">商品一覧</Link></li>
                            <li><Link href="/#products" className="hover:text-white transition-colors">人気商品</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4 text-white/80">会社情報</h4>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="/legal" className="hover:text-white transition-colors">特商法表記</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">よくある質問</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4 text-white/80">ご利用案内</h4>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">配送・返品について</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
