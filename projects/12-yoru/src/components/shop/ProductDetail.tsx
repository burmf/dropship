"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import { Minus, Plus, ShoppingCart, Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const { addItem } = useCart();
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);
    const [selectedSize, setSelectedSize] = useState<{ name: string; price: number } | undefined>(product.sizes?.[0]);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(product.colors?.[0]);
    const [quantity, setQuantity] = useState(1);

    const price = selectedSize ? selectedSize.price : product.price;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product, {
                size: selectedSize?.name,
                color: selectedColor || selectedVariant?.name,
                price: selectedSize?.price
            });
        }
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleVariantSelect = (variant: any) => {
        setSelectedVariant(variant);
        setSelectedImage(variant.imageUrl);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Image Gallery */}
            <div className="space-y-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-muted/20 shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={selectedImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                {product.images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === img
                                    ? "border-amber-500 shadow-lg shadow-amber-500/20 scale-105"
                                    : "border-white/5 opacity-50 hover:opacity-100"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name} ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center space-y-8 text-white">
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <Badge variant="secondary" className="mb-3">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tight">
                                {product.name}
                                {selectedVariant && <span className="text-lg font-light ml-4 opacity-70">/ {selectedVariant.name}</span>}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold">
                            ¥{price.toLocaleString()}
                        </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Variations Selection */}
                    <div className="space-y-6 pt-4">
                        {/* Variants (e.g. Crystal Ball Designs) */}
                        {product.variants && product.variants.length > 0 && (
                            <div className="space-y-3">
                                <span className="text-sm font-medium">デザインを選択</span>
                                <div className="grid grid-cols-5 gap-3">
                                    {product.variants.map((v) => (
                                        <button
                                            key={v.name}
                                            onClick={() => handleVariantSelect(v)}
                                            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedVariant?.name === v.name
                                                ? "border-amber-500 ring-2 ring-amber-500/20"
                                                : "border-gray-200 hover:border-gray-400"
                                                }`}
                                            title={v.name}
                                        >
                                            <Image
                                                src={v.imageUrl}
                                                alt={v.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                                {selectedVariant && (
                                    <p className="text-xs text-amber-400 font-medium">選択中: {selectedVariant.name}</p>
                                )}
                            </div>
                        )}

                        {/* Sizes */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="space-y-3">
                                <span className="text-sm font-medium">サイズを選択</span>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size.name}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-md border text-sm transition-all ${selectedSize?.name === size.name
                                                ? "bg-white text-black border-white"
                                                : "bg-white/5 text-white border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            {size.name} (+¥{(size.price - product.price).toLocaleString()})
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Colors */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="space-y-3">
                                <span className="text-sm font-medium">カラーを選択</span>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-6 py-2 rounded-md border text-sm transition-all ${selectedColor === color
                                                ? "bg-white text-black border-white"
                                                : "bg-white/5 text-white border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-px bg-border/50" />

                <div className="space-y-6">
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-medium min-w-[60px]">数量</span>
                        <div className="flex items-center border border-white/10 rounded-md">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="p-2 hover:bg-white/5 text-gray-400 disabled:opacity-30"
                                disabled={quantity <= 1}
                            >
                                <Minus size={16} />
                            </button>
                            <span className="w-12 text-center font-medium text-white">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="p-2 hover:bg-white/5 text-white"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    <Button size="lg" className="w-full text-base py-7 bg-amber-500 hover:bg-amber-600 text-black font-bold shadow-lg shadow-amber-500/20" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        カートに入れる
                    </Button>

                    {/* Trust Signals & Payment Badges */}
                    <div className="pt-8 border-t border-white/5 space-y-6">
                        <div className="grid grid-cols-1">
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 shadow-inner">
                                <Truck className="h-6 w-6 text-amber-400" />
                                <div className="space-y-0.5">
                                    <p className="font-bold text-sm">全国送料無料</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Secure Payment</p>
                            <div className="flex gap-2 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
                                <div className="px-2 py-1 bg-white rounded text-[10px] text-black font-black italic">VISA</div>
                                <div className="px-2 py-1 bg-white rounded text-[10px] text-black font-black italic">Mastercard</div>
                                <div className="px-2 py-1 bg-white rounded text-[10px] text-black font-black italic">JCB</div>
                                <div className="px-2 py-1 bg-white rounded text-[10px] text-black font-black italic">AMEX</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
