import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Minimalist Matte Case - Pure White",
        price: 25.00,
        originalPrice: 35.00,
        description: "Ultra-slim, soft-touch matte finish case for iPhone. Fingerprint resistant and drop protection tested.",
        images: [
            "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop"
        ],
        category: "iPhone Cases",
        tags: ["Best Seller", "Minimalist", "Matte"],
        rating: 4.8,
        reviewCount: 342
    },
    {
        id: "2",
        name: "Pastel Silica Gel Case - Blush Pink",
        price: 22.00,
        originalPrice: 28.00,
        description: "Soft liquid silicone case with microfiber lining. Available in stunning pastel colors to match your style.",
        images: [
            "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541876356-d71e21b068a8?q=80&w=800&auto=format&fit=crop"
        ],
        category: "iPhone Cases",
        tags: ["Pastel", "Soft Touch", "Silicone"],
        rating: 4.9,
        reviewCount: 156
    },
    {
        id: "3",
        name: "Clear Impact Shield",
        price: 28.00,
        originalPrice: 40.00,
        description: "Crystal clear case with reinforced corners for maximum shock absorption. Show off your phone's design.",
        images: [
            "https://images.unsplash.com/photo-1592896594247-f5dc937ae034?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544211075-847e1329cbfd?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Protection",
        tags: ["Heavy Duty", "Clear", "Shockproof"],
        rating: 4.7,
        reviewCount: 89
    },
    {
        id: "4",
        name: "Led Ring Light Phone Holder",
        price: 18.00,
        originalPrice: 25.00,
        description: "Clip-on LED ring light for perfect selfies and video calls. 3 brightness levels.",
        images: [
            "https://images.unsplash.com/photo-1622623343468-f9b375b4f620?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1535790855325-181513fe746a?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["Selfie", "Lighting", "Creator"],
        rating: 4.5,
        reviewCount: 210
    },
    {
        id: "5",
        name: "Leather Wallet MagSafe Case",
        price: 45.00,
        originalPrice: 60.00,
        description: "Premium vegan leather case with built-in MagSafe magnets and card slot.",
        images: [
            "https://images.unsplash.com/photo-1616423668832-5a41e9747958?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1623946051759-45585b750172?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Leather",
        tags: ["MagSafe", "Wallet", "Premium"],
        rating: 4.6,
        reviewCount: 78
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Alice W.",
        rating: 5,
        comment: "Love the matte finish! Feels so smooth.",
        date: "2024-03-10"
    },
    {
        id: "r2",
        productId: "4",
        userName: "Jessica L.",
        rating: 4,
        comment: "Great light for TikToks.",
        date: "2024-02-15"
    }
];
