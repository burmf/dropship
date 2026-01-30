import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types';

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    clearCart: () => void;
    total: () => number;
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product) => {
                set((state) => {
                    const existingItem = state.items.find((item) => item.id === product.id);
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                            isOpen: true, // Auto open cart on add
                        };
                    }
                    return { items: [...state.items, { ...product, quantity: 1 }], isOpen: true };
                });
            },

            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId),
                }));
            },

            updateQuantity: (productId, quantity) => {
                set((state) => {
                    if (quantity < 1) {
                        return { items: state.items.filter((item) => item.id !== productId) };
                    }
                    return {
                        items: state.items.map((item) =>
                            item.id === productId ? { ...item, quantity } : item
                        ),
                    };
                });
            },

            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            clearCart: () => set({ items: [] }),

            total: () => {
                return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
