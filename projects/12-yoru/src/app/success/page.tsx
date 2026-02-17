import Link from "next/link";
import { CheckCircle2, ShoppingBag } from "lucide-react";

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-light tracking-tight">
                        Thank you for your order.
                    </h1>
                    <p className="text-gray-400 leading-relaxed">
                        ご注文ありがとうございます。決済が正常に完了いたしました。<br />
                        発送の準備が整い次第、追跡番号をメールにてお知らせいたします。
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        <ShoppingBag size={18} />
                        トップページに戻る
                    </Link>
                </div>

                <p className="text-xs text-white/30 pt-12">
                    ご不明な点がございましたら、info@yoruheya.jp までお問い合わせください。
                </p>
            </div>
        </main>
    );
}
