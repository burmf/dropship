"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    src="/videos/hero-background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            {/* Centered Content - Luxury Style */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Logo/Brand */}
                    <p className="text-amber-50/80 text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-md">
                        YoruHeya
                    </p>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide leading-tight mb-8 drop-shadow-lg">
                        探していた、<br />
                        理想の夜がここに。
                    </h1>

                    {/* Subtle Tagline */}
                    <p className="text-white/80 text-sm md:text-base tracking-wide mb-10 font-light drop-shadow-md">
                        全品送料無料 ・ 追跡番号付き
                    </p>

                    {/* CTA - Minimal */}
                    <a
                        href="#products"
                        className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                    >
                        View Collection
                    </a>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-white/50 tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
