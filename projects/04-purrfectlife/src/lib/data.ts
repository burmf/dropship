import { Product, Review } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Ultimate Bond Hoodie Set",
        price: 89.00,
        originalPrice: 125.00,
        description: "Crafted from premium heavy-weight fleece. A perfect match for you and your furry best friend. Designed for style, comfort, and unbreakable bonds.",
        images: [
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Matching Apparel",
        tags: ["Premium", "Viral", "Winter"],
        rating: 4.9,
        reviewCount: 320
    },
    {
        id: "2",
        name: "Midnight Dreams PJ Set",
        price: 110.00,
        originalPrice: 160.00,
        description: "Luxurious satin pajama set for the ultimate twinning experience. Silky smooth texture designed for peaceful nights together.",
        images: [
            "https://images.unsplash.com/photo-1591768793355-70ad043bc141?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Home Wear",
        tags: ["Luxury", "Sleep", "Cozy"],
        rating: 4.8,
        reviewCount: 150
    },
    {
        id: "3",
        name: "Heritage Plaid Duo",
        price: 75.00,
        originalPrice: 110.00,
        description: "Classic flannel shirts in timeless buffalo plaid. Perfect for outdoor adventures and iconic photo moments.",
        images: [
            "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Matching Apparel",
        tags: ["Classic", "Outdoor", "Photo Ready"],
        rating: 4.7,
        reviewCount: 210
    },
    {
        id: "4",
        name: "Infinite Link Bracelet & Collar",
        price: 59.00,
        originalPrice: 85.00,
        description: "A minimalist connection. Premium leather collar for your pet and a matching bracelet for you. A symbol of your eternal bond.",
        images: [
            "https://images.unsplash.com/photo-1582791694145-23460649f98a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1535615615570-3b839f4359be?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["Bond", "Gift", "Luxury"],
        rating: 5.0,
        reviewCount: 95
    },
    {
        id: "5",
        name: "Summer Breeze Hawaiian",
        price: 68.00,
        originalPrice: 95.00,
        description: "Vibrant botanical prints on breathable lightweight fabric. Make a splash at the beach or the cafe with this iconic duo set.",
        images: [
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508948956644-0017e845d7b7?q=80&w=800&auto=format&fit=crop"
        ],
        category: "Matching Apparel",
        tags: ["Summer", "Vacation", "Vibrant"],
        rating: 4.6,
        reviewCount: 180
    }
];

export const reviews: Review[] = [
    {
        id: "r1",
        productId: "1",
        userName: "Sarah J.",
        rating: 5,
        comment: "Absolutely in love! The quality of the hoodies is better than most high-street brands. My Golden looks so handsome.",
        date: "2024-03-25"
    },
    {
        id: "r2",
        productId: "4",
        userName: "Mark T.",
        rating: 5,
        comment: "Perfect anniversary gift. The minimalist design is exactly what I was looking for. Real leather feels amazing.",
        date: "2024-02-14"
    }
];
