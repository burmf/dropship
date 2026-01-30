import { useState, useEffect } from 'react';
import { Product } from '@/types';
import { products } from '@/lib/data';

/**
 * Hook to fetch product details.
 * Currently simulates an API call with local mock data.
 * 
 * @param id Product ID to fetch
 * @returns Product data, loading state, and error
 */
export const useProduct = (id: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 500));

                const found = products.find(p => p.id === id);
                if (found) {
                    setProduct(found);
                    setError(null);
                } else {
                    setError('Product not found');
                    setProduct(null);
                }
            } catch (err) {
                setError('Failed to fetch product');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    return { product, loading, error };
};
