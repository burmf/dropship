export interface Review {
    id: string;
    productId: string;
    userName: string;
    avatarUrl?: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    tags?: string[];
    originalPrice?: number; // Added for discount display
    rating?: number; // Calculated average rating
    reviewCount?: number;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
}
