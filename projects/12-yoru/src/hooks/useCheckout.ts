import { useState } from "react";
import { useCart } from "@/store/useCart";
import { useRouter } from "next/navigation";

export function useCheckout() {
    const { items } = useCart();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const processCheckout = async () => {
        setIsProcessing(true);
        setError(null);

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items }),
            });

            const { url, error: apiError } = await response.json();

            if (apiError) {
                throw new Error(apiError);
            }

            if (url) {
                // Stripeの決済ページ（リダイレクト型）へ遷移
                window.location.href = url;
            } else {
                throw new Error("決済用URLの取得に失敗しました");
            }

            return { success: true };
        } catch (err: any) {
            console.error("Checkout error:", err);
            setError(err.message || "決済処理中にエラーが発生しました");
            return { success: false };
        } finally {
            setIsProcessing(false);
        }
    };

    return {
        processCheckout,
        isProcessing,
        error,
    };
}
