"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/lib/site-config";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video/Image Parallax Wrapper */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Placeholder for video or high-quality image */}
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat scale-105"
                    style={{
                        backgroundImage: `url("${siteConfig.hero?.image || '/hero-bg.png'}")`,
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border border-white/30 rounded-full backdrop-blur-md bg-white/10">
                        {siteConfig.hero?.label || "Premium Collection"}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-tight">
                        {siteConfig.hero?.headline || siteConfig.name}
                    </h1>
                    <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
                        {siteConfig.hero?.subheadline || siteConfig.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-white text-black hover:bg-amber-50 group transition-all duration-300">
                            Shop Matching Sets
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                            Our Story
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
