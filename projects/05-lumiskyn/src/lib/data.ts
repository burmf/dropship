import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Rose Quartz Facial Roller",
        price: 24.00,
        originalPrice: 35.00,
        description: "Authentic rose quartz roller and gua sha set. Reduces puffiness and promotes blood circulation.",
        images: [
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Tools",
        tags: ["Natural", "Anti-Aging", "Relaxation"],
        rating: 4.7,
        reviewCount: 340
    },
    {
        id: "2",
        name: "Sonic Facial Cleansing Brush",
        price: 35.00,
        originalPrice: 50.00,
        description: "Waterproof electric silicone facial cleanser for deep cleaning and exfoliation.",
        images: [
            "https://images.unsplash.com/photo-1556228578-8d4e9d564024?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556228578-8120c1592659?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Cleansing",
        tags: ["Deep Clean", "Silicone", "Waterproof"],
        rating: 4.8,
        reviewCount: 215
    },
    {
        id: "3",
        name: "LED Light Therapy Mask",
        price: 75.00,
        originalPrice: 120.00,
        description: "At-home spa experience. 7-color LED mask for acne treatment, collagen boosting, and skin rejuvenation.",
        images: [
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1608248596669-f35d714b7195?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Therapy",
        tags: ["Trending", "Skincare", "Technology"],
        rating: 4.5,
        reviewCount: 120
    },
    {
        id: "4",
        name: "Nano Ionic Facial Steamer",
        price: 45.00,
        originalPrice: 65.00,
        description: "Opens pores and hydrates skin. Professional quality facial treatment at home.",
        images: [
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Hydration",
        tags: ["Spa", "Hydration", "Detox"],
        rating: 4.6,
        reviewCount: 95
    },
    {
        id: "5",
        name: "Electric Makeup Brush Cleaner",
        price: 20.00,
        originalPrice: 30.00,
        description: "Clean and dry your makeup brushes in seconds. Keep your skin healthy.",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["Hygiene", "Convenience", "Must-Have"],
        rating: 4.9,
        reviewCount: 180
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Sophia",
        rating: 5,
        comment: "My nightly ritual. So soothing.",
        date: "2024-02-14"
    },
    {
        id: "r2",
        productId: "3",
        userName: "Olivia",
        rating: 5,
        comment: "Saw this on TikTok, it actually works!",
        date: "2024-03-05"
    }
];
