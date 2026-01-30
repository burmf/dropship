import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Ring Light with Tripod Stand",
        price: 45.00,
        originalPrice: 70.00,
        description: "10-inch LED ring light with adjustable tripod and phone holder. 3 color modes and 10 brightness levels.",
        images: [
            "https://images.unsplash.com/photo-1622623343468-f9b375b4f620?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542621323-be46654e7d38?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Lighting",
        tags: ["Best Seller", "TikTok", "YouTube"],
        rating: 4.8,
        reviewCount: 410
    },
    {
        id: "2",
        name: "Flexible Phone Tripod",
        price: 20.00,
        originalPrice: 30.00,
        description: "Octopus style flexible tripod legs grip almost anything. Bluetooth remote shutter included.",
        images: [
            "https://images.unsplash.com/photo-1520551061805-728b7fee723d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534069818844-31d77d70c9eb?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Tripods",
        tags: ["Flexible", "Vlogging", "Portable"],
        rating: 4.7,
        reviewCount: 220
    },
    {
        id: "3",
        name: "Lavalier Microphone (Clip-on)",
        price: 25.00,
        originalPrice: 35.00,
        description: "Professional omnidirectional condenser mic. Clear sound recording for interviews and vlogs.",
        images: [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Audio",
        tags: ["Crisp Sound", "Interview", "Plug & Play"],
        rating: 4.6,
        reviewCount: 150
    },
    {
        id: "4",
        name: "RGB Portable Video Light",
        price: 55.00,
        originalPrice: 80.00,
        description: "Pocket-sized RGB LED panel. Full color spectrum control for creative lighting effects.",
        images: [
            "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626244438340-975005ad7622?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Lighting",
        tags: ["Cinematic", "RGB", "Portable"],
        rating: 4.9,
        reviewCount: 90
    },
    {
        id: "5",
        name: "Green Screen Background (Collapsible)",
        price: 40.00,
        originalPrice: 60.00,
        description: "Pop-up green screen backdrop for streaming and video calls. Folds down into a carrying bag.",
        images: [
            "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Studio",
        tags: ["Streaming", "Chroma Key", "Background"],
        rating: 4.5,
        reviewCount: 75
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Jenny K.",
        rating: 5,
        comment: "Lighting is perfect for my makeup tutorials.",
        date: "2024-03-01"
    },
    {
        id: "r2",
        productId: "2",
        userName: "Alex B.",
        rating: 5,
        comment: "Holds my phone securely anywhere.",
        date: "2024-02-15"
    }
];
