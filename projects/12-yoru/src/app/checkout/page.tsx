"use client";

import { Suspense, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
    const searchParams = useSearchParams();
    const clientSecret = searchParams.get("client_secret");

    if (!clientSecret) {
        return (
            <div className="text-center space-y-4 p-12 bg-white/5 rounded-2xl border border-white/10">
                <h1 className="text-2xl font-bold text-red-500">Error</h1>
                <p className="text-gray-400">決済情報の取得に失敗しました。カートから再度やり直してください。</p>
                <a href="/" className="inline-block mt-4 text-amber-500 hover:underline">
                    トップページへ戻る
                </a>
            </div>
        );
    }

    return (
        <div id="checkout" className="bg-white rounded-2xl overflow-hidden shadow-2xl min-h-[600px]">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ clientSecret }}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-[#050505] py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center mb-10">
                <h1 className="text-3xl font-light text-white mb-2">Checkout</h1>
                <p className="text-gray-400">安全な通信で決済を完了します</p>
            </div>
            <div className="container mx-auto max-w-4xl">
                <Suspense fallback={
                    <div className="min-h-[600px] flex items-center justify-center bg-white/5 rounded-2xl border border-white/10">
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
                            <p className="text-gray-400 animate-pulse">決済フォームを準備中...</p>
                        </div>
                    </div>
                }>
                    <CheckoutForm />
                </Suspense>
            </div>
        </main>
    );
}
