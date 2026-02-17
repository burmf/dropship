export default function FAQPage() {
    const faqs = [
        {
            q: "送料はかかりますか？",
            a: "全国一律送料無料でお届けいたします。"
        },
        {
            q: "届くまでどのくらいかかりますか？",
            a: "ご注文から7〜14営業日以内にお届けいたします。"
        },
        {
            q: "返品・交換はできますか？",
            a: "商品到着後7日以内であれば、未使用品に限り返品・交換を承ります。"
        },
        {
            q: "支払い方法は何がありますか？",
            a: "クレジットカード（VISA、Mastercard、JCB、AMEX）がご利用いただけます。"
        },
        {
            q: "届いた商品が壊れていました。",
            a: "商品の初期不良については、無料で交換いたします。商品到着後7日以内にメールでご連絡ください。"
        }
    ];

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <h1 className="text-3xl font-light mb-8">よくある質問</h1>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10 pb-6">
                            <h3 className="text-white font-medium mb-2">Q. {faq.q}</h3>
                            <p className="text-white/60">A. {faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
