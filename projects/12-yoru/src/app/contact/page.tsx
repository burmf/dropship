export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-light">Contact.</h1>
                        <p className="text-white/50 leading-relaxed">
                            製品に関するご質問、配送状況の確認など、<br />
                            下記メールアドレスまでお気軽にお問い合わせください。
                        </p>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <span className="text-amber-500">M</span>
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                                <p className="text-xl text-white font-medium">info@yoruheya.jp</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-sm text-white/30 leading-relaxed">
                                ※ 通常2〜3営業日以内にご返信いたします。<br />
                                ※ ドメイン指定受信を設定されている場合は「yoruheya.jp」からのメールを受信できるよう設定をお願いいたします。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
