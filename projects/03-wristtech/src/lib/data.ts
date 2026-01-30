import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "WristTech Series 5 - Midnight",
        price: 45.00,
        originalPrice: 80.00,
        description: "Full touchscreen smartwatch with heart rate monitoring, step tracking, and sleep analysis.",
        images: [
            "https://images.unsplash.com/photo-1544117963-514a41fd7cc5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Smartwatches",
        tags: ["Fitness", "Heart Rate", "Touchscreen"],
        rating: 4.6,
        reviewCount: 410
    },
    {
        id: "2",
        name: "Fitness Tracker Band",
        price: 25.00,
        originalPrice: 40.00,
        description: "Slim fitness tracker for everyday use. Counts steps, calories, and distance.",
        images: [
            "https://images.unsplash.com/photo-1557935728-e6d1eaed5539?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576243345690-8e4b78e69eef?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Trackers",
        tags: ["Slim", "Step Counter", "Water Resistant"],
        rating: 4.4,
        reviewCount: 205
    },
    {
        id: "3",
        name: "Classic Hybrid Smartwatch",
        price: 60.00,
        originalPrice: 90.00,
        description: "Analog look with smart features. Notifications and activity tracking disguised as a classic watch.",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Hybrid",
        tags: ["Classic Style", "Leather Strap", "Notification"],
        rating: 4.8,
        reviewCount: 110
    },
    {
        id: "4",
        name: "Sport Silicon Strap Replacement",
        price: 10.00,
        originalPrice: 15.00,
        description: "Breathable silicone strap compatible with all WristTech models. Available in 5 colors.",
        images: [
            "https://images.unsplash.com/photo-1617300329618-2e06c115456f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596708722420-b4d6bb0e08c8?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["Strap", "Silicone", "Colorful"],
        rating: 4.5,
        reviewCount: 88
    },
    {
        id: "5",
        name: "Kids GPS Smartwatch",
        price: 55.00,
        originalPrice: 75.00,
        description: "Keep track of your little ones with GPS location and SOS calling features.",
        images: [
            "https://images.unsplash.com/photo-1551817958-c1e8d1979b00?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517056087546-2495d4817a26?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Kids",
        tags: ["GPS", "Safety", "Kids"],
        rating: 4.7,
        reviewCount: 320
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Tom H.",
        rating: 5,
        comment: "Best value smartwatch I've bought. Does everything I need.",
        date: "2024-03-01"
    },
    {
        id: "r2",
        productId: "5",
        userName: "Emily G.",
        rating: 5,
        comment: "Peace of mind for when my son is playing outside.",
        date: "2024-02-28"
    }
];
