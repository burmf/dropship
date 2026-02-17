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
        <Link href={`/products/${product.id}`} className="block group">
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#151515] mb-4">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Quick Add Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                        }}
                    >
                        <Plus className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Info - Minimal */}
                <div className="space-y-1">
                    <h3 className="text-sm text-white/80 font-light tracking-wide group-hover:text-white transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-white/50">
                        {formatPrice(product.price)}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
}
