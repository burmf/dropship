import { useState, useEffect } from 'react';
import { Review } from '@/types';
import { reviews as initialReviews } from '@/lib/data';

/**
 * Hook to manage product reviews.
 * Initializes with mock data and allows adding new reviews locally.
 * 
 * @param productId Product ID to fetch reviews for
 */
export const useReviews = (productId: string) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load initial reviews for the specific product
        // In a real app, this would be an API call
        const loadReviews = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 600)); // Simulate delay

            const productReviews = initialReviews.filter(r => r.productId === productId);
            setReviews(productReviews);
            setLoading(false);
        };

        if (productId) {
            loadReviews();
        }
    }, [productId]);

    const addReview = async (review: Omit<Review, 'id' | 'date'>) => {
        // Simulate API call to post review
        await new Promise(resolve => setTimeout(resolve, 800));

        const newReview: Review = {
            ...review,
            id: `new-${Date.now()}`,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        };

        setReviews(prev => [newReview, ...prev]);
        return newReview;
    };

    return { reviews, loading, addReview };
};
