import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Photochromic Aviators - Gold Frame",
        price: 35.00,
        originalPrice: 55.00,
        description: "Classic aviator style with lenses that adapt to sunlight. Clear indoors, dark outdoors. UV400 protection.",
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281e960?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Classic",
        tags: ["Photochromic", "UV Protection", "Unisex"],
        rating: 4.7,
        reviewCount: 140
    },
    {
        id: "2",
        name: "Retro Wayfarers - Tortoise Shell",
        price: 28.00,
        originalPrice: 40.00,
        description: "Timeless retro design with a modern twist. Lightweight acetate frame and polarized lenses.",
        images: [
            "https://images.unsplash.com/photo-1534950337836-9a2df3723329?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Retro",
        tags: ["Vintage", "Polarized", "Style"],
        rating: 4.8,
        reviewCount: 210
    },
    {
        id: "3",
        name: "Sport Wrap Sunglasses",
        price: 40.00,
        originalPrice: 60.00,
        description: "Aerodynamic design for runners and cyclists. Non-slip nose pads and impact resistant lenses.",
        images: [
            "https://images.unsplash.com/photo-1589366533038-0c36b37d404d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Sport",
        tags: ["Running", "Cycling", "Active"],
        rating: 4.6,
        reviewCount: 95
    },
    {
        id: "4",
        name: "Oversized Cat Eye Sunglasses",
        price: 32.00,
        originalPrice: 45.00,
        description: "Bold and chic. Oversized cat eye frames for a statement look. Gradient lenses.",
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508296695146-25d6b472e399?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Fashion",
        tags: ["Statement", "Chic", "Women"],
        rating: 4.9,
        reviewCount: 180
    },
    {
        id: "5",
        name: "Bamboo Wood Sunglasses",
        price: 45.00,
        originalPrice: 65.00,
        description: "Eco-friendly distinctive bamboo wood arms. Polarized lenses and flex hinges for comfort.",
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Eco",
        tags: ["Sustainable", "Natural", "Polarized"],
        rating: 4.7,
        reviewCount: 110
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "James T.",
        rating: 5,
        comment: "The transition lenses work great. No more switching glasses.",
        date: "2024-03-15"
    },
    {
        id: "r2",
        productId: "2",
        userName: "Sara L.",
        rating: 5,
        comment: "Love the vintage vibe.",
        date: "2024-02-22"
    }
];
