"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/useCart";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const { toggleCart, items } = useCart();

    // Background opacity animation - Dark theme
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]
    );
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            style={{ backgroundColor, backdropFilter: backdropBlur }}
            className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-colors duration-300"
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-full w-full">
                {/* Logo - Apple Style */}
                <Link href="/" className="relative z-10">
                    <span className="text-xl font-medium text-white tracking-tight">
                        {siteConfig.name}
                    </span>
                </Link>

                {/* Desktop Nav - Minimal */}
                <nav className="hidden md:flex items-center gap-8">
                    {["商品", "ブランド", "ガイド"].map((item) => (
                        <Link
                            key={item}
                            href="#products"
                            className="text-sm text-white/80 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-white hover:bg-white/10 relative"
                        onClick={toggleCart}
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f5a623] text-black text-xs rounded-full flex items-center justify-center font-medium">
                                {items.length}
                            </span>
                        )}
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
