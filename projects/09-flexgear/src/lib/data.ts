import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Resistance Bands Set (5 Levels)",
        price: 25.00,
        originalPrice: 40.00,
        description: "Complete set of 5 resistance bands ranging from extra light to extra heavy. Great for home workouts and PT.",
        images: [
            "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Strength",
        tags: ["Home Gym", "Portable", "Full Body"],
        rating: 4.8,
        reviewCount: 320
    },
    {
        id: "2",
        name: "Premium Yoga Strap",
        price: 15.00,
        originalPrice: 22.00,
        description: "Durable cotton yoga strap with D-ring buckle. Helps with stretching and flexibility poses.",
        images: [
            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Yoga",
        tags: ["Flexibility", "Cotton", "Yoga"],
        rating: 4.7,
        reviewCount: 150
    },
    {
        id: "3",
        name: "Ab Roller Wheel",
        price: 30.00,
        originalPrice: 45.00,
        description: "Wide ab wheel for core strength training. Comes with a knee pad for comfort.",
        images: [
            "https://images.unsplash.com/photo-1541600370638-3825c4ef68aa?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Core",
        tags: ["Core", "Strength", "Abs"],
        rating: 4.6,
        reviewCount: 180
    },
    {
        id: "4",
        name: "Adjustable Skipping Rope",
        price: 18.00,
        originalPrice: 25.00,
        description: "High-speed jump rope with ball bearings. Tangle-free and adjustable length. Perfect for cardio.",
        images: [
            "https://images.unsplash.com/photo-1574606990715-c266858a2d1d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620189507187-10fd2846de65?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Cardio",
        tags: ["Speed", "Cardio", "Fat Burn"],
        rating: 4.9,
        reviewCount: 240
    },
    {
        id: "5",
        name: "Non-Slip Yoga Mat",
        price: 45.00,
        originalPrice: 70.00,
        description: "Eco-friendly TPE yoga mat with alignment lines. 6mm thickness for joint protection.",
        images: [
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593164842264-85460441a6be?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Yoga",
        tags: ["Eco-Friendly", "Non-Slip", "Comfort"],
        rating: 4.8,
        reviewCount: 190
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Chris R.",
        rating: 5,
        comment: "Great quality bands, haven't snapped yet.",
        date: "2024-03-05"
    },
    {
        id: "r2",
        productId: "4",
        userName: "Lisa M.",
        rating: 5,
        comment: "Fast and smooth rotation. Love it.",
        date: "2024-02-18"
    }
];
