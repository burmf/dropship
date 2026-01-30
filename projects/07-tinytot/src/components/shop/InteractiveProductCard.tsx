"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/store/useCart";
import { useSettings } from "@/store/useSettings";
import { formatPrice } from "@/lib/currency";
import StarRating from "./StarRating";

interface ProductCardProps {
    product: Product;
}

export default function InteractiveProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { addItem } = useCart();
    const { currency } = useSettings();

    return (
        <Link href={`/products/${product.id}`} className="block h-full">
            <motion.div
                className="group relative flex flex-col gap-3 h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
                    {/* Main Image */}
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Second Image (Reveal on Hover) */}
                    {product.images[1] && (
                        <motion.div
                            className="absolute inset-0 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={product.images[1]}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </motion.div>
                    )}

                    {/* Add to Cart Button (Slide Up) */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute bottom-4 left-4 right-4 z-20"
                            >
                                <Button
                                    className="w-full rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm hover:bg-white"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        addItem(product);
                                    }}
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Add to Cart
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Badges / Tags */}
                    {product.tags && product.tags.length > 0 && (
                        <div className="absolute top-3 left-3 flex flex-col gap-1 z-20">
                            {product.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-md rounded-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="space-y-2 mt-2">
                    <h3 className="font-medium leading-snug text-base text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    {product.rating && (
                        <div className="flex items-center gap-1.5">
                            <StarRating rating={product.rating} size={14} className="gap-0.5" />
                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                {product.reviewCount}
                            </span>
                        </div>
                    )}

                    {/* Price Section */}
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                            <span className="font-bold text-lg text-green-600 dark:text-green-500">
                                {formatPrice(product.price, currency)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/60">
                                    {formatPrice(product.originalPrice, currency)}
                                </span>
                            )}
                        </div>

                        {product.originalPrice && (
                            <p className="text-sm font-medium text-green-600 dark:text-green-500">
                                You save {formatPrice(product.originalPrice - product.price, currency)}
                            </p>
                        )}

                        {/* Mock Seller Name matching reference */}
                        <p className="text-xs text-muted-foreground pt-1">
                            Premium Dropship Store
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
