"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/store/useCart";

interface ProductCardProps {
    product: Product;
}

function formatPrice(price: number): string {
    return `¥${price.toLocaleString()}`;
}

export default function InteractiveProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { addItem } = useCart();

    return (
        <Link href={`/products/${product.id}`} className="block group relative">
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-[#101010] rounded-xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-colors duration-300"
            >
                {/* Image Area */}
                <div className="relative aspect-square overflow-hidden bg-[#151515]">
                    {product.badge && (
                        <div className="absolute top-3 left-3 z-20 bg-amber-500/90 text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider backdrop-blur-sm">
                            {product.badge}
                        </div>
                    )}
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Quick Add Button - Always visible on mobile, hover on desktop */}
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button
                            className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                addItem(product);
                            }}
                            title="カートに追加"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                    <div>
                        <h3 className="text-base text-white font-medium group-hover:text-amber-400 transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-1 mt-1">
                                <div className="flex text-amber-400 text-[10px]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i < Math.floor(product.rating!) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i < Math.floor(product.rating!) ? "fill-amber-400 border-none" : "text-gray-600"}>
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500">({product.reviewCount})</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-baseline justify-between">
                        <p className="text-lg font-bold text-amber-50 text-shadow-sm">
                            {formatPrice(product.sizes ? product.sizes[0].price : product.price)}
                            {product.sizes && <span className="text-xs font-normal text-gray-500 ml-1">~</span>}
                        </p>
                        <span className="text-xs text-amber-500/80 font-medium group-hover:underline">
                            詳細を見る
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
