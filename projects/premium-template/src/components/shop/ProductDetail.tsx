"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const { addItem } = useCart();
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // In a real app, we might pass quantity to addItem
        // Since the current store only adds 1, we call it multiple times or update the store
        // For MVP, simply adding 1 item 'quantity' times or modifying store is better.
        // Let's assume we modify addItem to accept quantity or loop.
        // Current store: addItem(product) adds 1.

        // Simple loop for MVP to respect local state quantity without refactoring store too much
        // Ideally, update useCart to accept quantity.
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted/20">
                    <Image
                        src={selectedImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {product.images.length > 1 && (
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === img ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
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
            <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <Badge variant="secondary" className="mb-3">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                                {product.name}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold">
                            ¥{product.price.toLocaleString()}
                        </span>
                        {product.rating && (
                            <div className="flex items-center gap-1 border-l pl-4">
                                <StarRating rating={Math.round(product.rating)} size={16} />
                                <span className="text-sm text-muted-foreground">
                                    ({product.reviewCount} reviews)
                                </span>
                            </div>
                        )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                    </p>

                    {product.tags && (
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="h-px bg-border/50" />

                <div className="space-y-6">
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-medium min-w-[60px]">Quantity</span>
                        <div className="flex items-center border rounded-md">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="p-2 hover:bg-muted/50 text-muted-foreground disabled:opacity-50"
                                disabled={quantity <= 1}
                            >
                                <Minus size={16} />
                            </button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="p-2 hover:bg-muted/50 text-foreground"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    <Button size="lg" className="w-full text-base py-6" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
