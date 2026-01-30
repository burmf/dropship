import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "SoundSphere Pro ANC",
        price: 120.00,
        originalPrice: 180.00,
        description: "Active Noise Cancelling over-ear headphones with 30-hour battery life and deep bass.",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Headphones",
        tags: ["ANC", "Wireless", "Over-Ear"],
        rating: 4.9,
        reviewCount: 520
    },
    {
        id: "2",
        name: "True Wireless Earbuds - Midnight Black",
        price: 45.00,
        originalPrice: 70.00,
        description: "Compact, waterproof true wireless earbuds with touch controls and charging case.",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Earbuds",
        tags: ["Waterproof", "Bluetooth 5.0", "Compact"],
        rating: 4.7,
        reviewCount: 310
    },
    {
        id: "3",
        name: "Sport Loop Earphones",
        price: 35.00,
        originalPrice: 50.00,
        description: "Secure fit earphones designed for running and workouts. Sweat-resistant.",
        images: [
            "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612444530582-fc661f24d38d?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Sport",
        tags: ["Running", "Sweatproof", "Secure Fit"],
        rating: 4.6,
        reviewCount: 180
    },
    {
        id: "4",
        name: "Hi-Res Audio Studio Monitor",
        price: 150.00,
        originalPrice: 220.00,
        description: "Professional grade wired headphones for audiophiles and mixing.",
        images: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Professional",
        tags: ["Hi-Res", "Wired", "Studio"],
        rating: 5.0,
        reviewCount: 45
    },
    {
        id: "5",
        name: "Gaming Headset with Mic",
        price: 65.00,
        originalPrice: 90.00,
        description: "Immersive surround sound gaming headset with detachable microphone and RGB lighting.",
        images: [
            "https://images.unsplash.com/photo-1616400619736-21b9247c4e5e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596708722420-b4d6bb0e08c8?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Gaming",
        tags: ["Gaming", "RGB", "Surround Sound"],
        rating: 4.5,
        reviewCount: 220
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "David K.",
        rating: 5,
        comment: "The noise cancellation is insane. Can't hear my commute at all.",
        date: "2024-01-20"
    },
    {
        id: "r2",
        productId: "2",
        userName: "Sarah M.",
        rating: 4,
        comment: "Good battery life, fits well.",
        date: "2024-02-05"
    }
];
