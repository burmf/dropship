import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Sunset Projection Lamp",
        price: 24.00,
        originalPrice: 35.00,
        description: "Transform your room with the golden hour glow. Perfect for photos and relaxation. USB powered.",
        images: [
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Lighting",
        tags: ["Aesthetic", "Viral", "Decor"],
        rating: 4.8,
        reviewCount: 520
    },
    {
        id: "2",
        name: "Adjustable Shelf Organizer",
        price: 35.00,
        originalPrice: 50.00,
        description: "Maximize your space with this expandable shelf organizer for kitchen or closet. Sturdy metal construction.",
        images: [
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Organization",
        tags: ["Home", "Storage", "Practical"],
        rating: 4.5,
        reviewCount: 150
    },
    {
        id: "3",
        name: "Minimalist Essential Oil Diffuser",
        price: 40.00,
        originalPrice: 60.00,
        description: "Ceramic ultrasonic diffuser with ambient light. Quiet operation for a peaceful home environment.",
        images: [
            "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Wellness",
        tags: ["Aromatherapy", "Relax", "Home Spa"],
        rating: 4.7,
        reviewCount: 220
    },
    {
        id: "4",
        name: "Geometric Wall Planters (Set of 3)",
        price: 30.00,
        originalPrice: 45.00,
        description: "Modern geometric wall vases for succulents or air plants. Adds a touch of green to any wall.",
        images: [
            "https://images.unsplash.com/photo-1509456592530-5d38e33f35d4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1481391319762-47d9306f963b?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Decor",
        tags: ["Plants", "Modern", "Wall Decor"],
        rating: 4.9,
        reviewCount: 85
    },
    {
        id: "5",
        name: "Smart LED Light Strip (5m)",
        price: 25.00,
        originalPrice: 40.00,
        description: "App-controlled RGB LED strip lights. Sync with music or set schedules. Compatible with Alexa/Google.",
        images: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Lighting",
        tags: ["Smart Home", "RGB", "Gaming"],
        rating: 4.6,
        reviewCount: 650
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Lily J.",
        rating: 5,
        comment: "Makes my room look amazing in the evening.",
        date: "2024-02-28"
    },
    {
        id: "r2",
        productId: "3",
        userName: "Ethan B.",
        rating: 5,
        comment: "Very quiet and looks elegant.",
        date: "2024-03-10"
    }
];
