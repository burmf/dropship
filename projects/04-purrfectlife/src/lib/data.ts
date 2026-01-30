import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Portable Travel Water Bottle",
        price: 18.00,
        originalPrice: 25.00,
        description: "Leak-proof portable water dispenser for dogs and cats. One-key lock water, easy to use.",
        images: [
            "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Travel",
        tags: ["Best Seller", "Portable", "Leak Proof"],
        rating: 4.8,
        reviewCount: 450
    },
    {
        id: "2",
        name: "Interactive Cat Laser Toy",
        price: 22.00,
        originalPrice: 30.00,
        description: "Automatic laser pointer toy to keep your cat entertained for hours. Adjustable speed.",
        images: [
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Toys",
        tags: ["Interactive", "Auto", "Fun"],
        rating: 4.6,
        reviewCount: 230
    },
    {
        id: "3",
        name: "Plush Calming Dog Bed",
        price: 45.00,
        originalPrice: 65.00,
        description: "Donut shaped fluffy bed designed to reduce anxiety and provide superior comfort.",
        images: [
            "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605367373977-84d2b279261c?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Bedding",
        tags: ["Comfort", "Anti-Anxiety", "Washable"],
        rating: 4.9,
        reviewCount: 890
    },
    {
        id: "4",
        name: "Automatic Pet Feeder",
        price: 75.00,
        originalPrice: 100.00,
        description: "Programmable smart feeder with voice recording. Ensure your pet is fed on time, every time.",
        images: [
            "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Feeding",
        tags: ["Smart Home", "Convenience", "Programmable"],
        rating: 4.7,
        reviewCount: 150
    },
    {
        id: "5",
        name: "LED Safety Collar",
        price: 15.00,
        originalPrice: 20.00,
        description: "Rechargeable LED dog collar for night safety. High visibility and adjustable size.",
        images: [
            "https://images.unsplash.com/photo-1601758124238-164923f03b22?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Safety",
        tags: ["Night Safety", "LED", "Rechargeable"],
        rating: 4.8,
        reviewCount: 210
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Chloe P.",
        rating: 5,
        comment: "So convenient for hikes!",
        date: "2024-03-12"
    },
    {
        id: "r2",
        productId: "3",
        userName: "Mark S.",
        rating: 5,
        comment: "My puppy slept instantly. Magic product.",
        date: "2024-02-20"
    }
];
