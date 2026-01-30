"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/useCart";
import { SettingsSwitcher } from "./SettingsSwitcher";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const { toggleCart, items } = useCart();

    // Header height animation
    const height = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);
    // Background opacity animation
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
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
            style={{ height, backgroundColor, backdropFilter: backdropBlur }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center border-b border-transparent transition-colors duration-300"
        >
            <div className="container mx-auto px-6 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="relative z-10">
                    <motion.h1
                        className="text-2xl font-bold tracking-tighter"
                        animate={{ scale: isScrolled ? 0.9 : 1 }}
                    >
                        PREMIUM<span className="text-primary">.</span>
                    </motion.h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Shop", "Collections", "About", "Journal"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <div className="hidden md:block">
                        <SettingsSwitcher />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Search className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full relative" onClick={toggleCart}>
                        <ShoppingBag className="w-5 h-5" />
                        {items.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
