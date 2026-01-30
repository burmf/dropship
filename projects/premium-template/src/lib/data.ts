import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Cozy Bond - Signature Beige Hoodie (Owner)",
        price: 8500,
        originalPrice: 12000,
        description: "Experience the ultimate connection with our premium cotton blend hoodie. Designed for comfort, durability, and specifically treated to repel pet hair. Matches perfectly with our pet collection.",
        images: [
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Owner Wear",
        tags: ["Best Seller", "Anti-Static", "Cotton Blend"],
        rating: 4.8,
        reviewCount: 124
    },
    {
        id: "2",
        name: "Cozy Bond - Signature Beige Hoodie (Pet)",
        price: 4500,
        originalPrice: 5800,
        description: "Perfectly tailored for your furry friend. Features a harness hole and stretchable fabric for maximum freedom of movement. Matches our owner hoodie.",
        images: [
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Pet Wear",
        tags: ["Best Seller", "Comfort Fit", "Washable"],
        rating: 4.9,
        reviewCount: 89
    },
    {
        id: "3",
        name: "Sage Green Knit Family Set (3-Piece)",
        price: 15800,
        originalPrice: 19800,
        description: "The complete autumn/winter package for the whole family. Includes 2 Adult Knits and 1 Pet Knit in a beautiful Sage Green. Save 10% with this bundle.",
        images: [
            "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Bundles",
        tags: ["Value Set", "Gift Idea", "Winter Warmth"],
        rating: 5.0,
        reviewCount: 42
    },
    {
        id: "4",
        name: "Artisan Leather Walk Set - Cognac",
        price: 6800,
        originalPrice: 9800,
        description: "Style meets safety. Luxurious, handcrafted brown leather dog leash and collar set with gold hardware. Reinforced stitching for durability.",
        images: [
            "https://images.unsplash.com/photo-1520623250005-59b56f8f1721?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["Durability", "Luxury", "Handcrafted"],
        rating: 4.7,
        reviewCount: 56
    },
    {
        id: "5",
        name: "Cloud 9 Donut Calming Bed",
        price: 5500,
        originalPrice: 7000,
        description: "A super soft, plush, donut-shaped calming dog bed in a gentle light grey color. Designed to reduce anxiety and promote better sleep.",
        images: [
            "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599553738092-231a4cc6ecdf?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Home",
        tags: ["Anxiety Relief", "Washable", "Super Soft"],
        rating: 4.6,
        reviewCount: 215
    },
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Sarah M.",
        rating: 5,
        comment: "Absolutely love this hoodie! The material is so soft and it really doesn't attract dog hair like my other clothes. Highly recommend!",
        date: "2024-01-15"
    },
    {
        id: "r2",
        productId: "1",
        userName: "Kenji T.",
        rating: 4,
        comment: "Great fit and very comfortable. I wish it came in more colors though.",
        date: "2024-01-20"
    },
    {
        id: "r3",
        productId: "2",
        userName: "Emily R.",
        rating: 5,
        comment: "My golden retriever looks adorable in this! Fits perfectly.",
        date: "2024-02-01"
    },
    {
        id: "r4",
        productId: "5",
        userName: "Mike L.",
        rating: 5,
        comment: "My dog jumped in immediately and fell asleep. Best purchase ever.",
        date: "2023-12-10"
    }
];
