"use client";

import { use } from "react";
import { useProduct } from "@/hooks/useProduct";
import ProductDetail from "@/components/shop/ProductDetail";
import { Separator } from "@/components/ui/separator";

import ProductFeatures from "@/components/shop/ProductFeatures";
import { motion } from "framer-motion";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    const { product, loading: productLoading, error: productError } = useProduct(id);

    if (productLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    <p className="text-muted-foreground animate-pulse">商品詳細を読み込み中...</p>
                </div>
            </div>
        );
    }

    if (productError || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">商品が見つかりません</h1>
                    <p className="text-muted-foreground">ご指定の商品は存在しないか、一時的に取り扱いを停止しています。</p>
                    <a href="/" className="text-primary hover:underline">トップページに戻る</a>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white pb-20 overflow-x-hidden">
            <div className="container mx-auto px-6 py-12 lg:py-20">
                {/* Product Detail Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ProductDetail product={product} />
                </motion.div>

                <div className="my-24">
                    <Separator className="bg-white/5" />
                </div>

                {/* Features Section */}
                <ProductFeatures productId={product.id} />
            </div>
        </main>
    );
}
