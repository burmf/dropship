import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Portable Folding Baby Bathtub",
        price: 45.00,
        originalPrice: 65.00,
        description: "Space-saving collapsible bathtub with temperature sensor plug. Ideal for small bathrooms and travel.",
        images: [
            "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Bath",
        tags: ["Space Saving", "Safety", "Travel"],
        rating: 4.8,
        reviewCount: 120
    },
    {
        id: "2",
        name: "Spill-Proof Snack Container",
        price: 15.00,
        originalPrice: 20.00,
        description: "Toddler-proof snack cup with soft silicone flaps. Easy access for small hands, no mess for parents.",
        images: [
            "https://images.unsplash.com/photo-1595188737882-fa96c731e089?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1627845348821-2e924aeb9cb3?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Feeding",
        tags: ["No Mess", "Toddler", "Portable"],
        rating: 4.9,
        reviewCount: 340
    },
    {
        id: "3",
        name: "Silicone Baby Bibs (Set of 2)",
        price: 22.00,
        originalPrice: 30.00,
        description: "Waterproof soft silicone bibs with food catcher pocket. Easy to clean and adjustable neck.",
        images: [
            "https://images.unsplash.com/photo-1601366533287-59ec9911e8c9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Feeding",
        tags: ["Easy Clean", "Waterproof", "Essentials"],
        rating: 4.7,
        reviewCount: 220
    },
    {
        id: "4",
        name: "Sensory Soft Building Blocks",
        price: 35.00,
        originalPrice: 50.00,
        description: "Safe, squeezable, and chewable blocks for early development. Textures and colors aid sensory learning.",
        images: [
            "https://images.unsplash.com/photo-1596464716127-f9a8759d4b53?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Toys",
        tags: ["Montessori", "Safe", "Education"],
        rating: 4.8,
        reviewCount: 150
    },
    {
        id: "5",
        name: "Ergonomic Baby Carrier",
        price: 60.00,
        originalPrice: 90.00,
        description: "Breathable mesh carrier with lumbar support. Multiple carrying positions for infant to toddler.",
        images: [
            "https://images.unsplash.com/photo-1533241517034-71a7ac336696?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Travel",
        tags: ["Comfort", "Hands Free", "Ergonomic"],
        rating: 4.6,
        reviewCount: 200
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Karen W.",
        rating: 5,
        comment: "Livesaver for our small apartment.",
        date: "2024-01-15"
    },
    {
        id: "r2",
        productId: "2",
        userName: "Mike D.",
        rating: 5,
        comment: "Finally no more cheerios all over the car.",
        date: "2024-02-10"
    }
];
