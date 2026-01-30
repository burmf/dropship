import { useState } from 'react';
import { useCart } from '@/store/useCart';

export const useCheckout = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { clearCart } = useCart();

    const processCheckout = async () => {
        setIsProcessing(true);
        setError(null);

        try {
            // Simulate payment processing delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Success flow
            clearCart();
            return { success: true };
        } catch (err) {
            setError('Payment processing failed. Please try again.');
            return { success: false };
        } finally {
            setIsProcessing(false);
        }
    };

    return { processCheckout, isProcessing, error };
};
