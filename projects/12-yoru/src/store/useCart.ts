import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types';

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product, options?: { size?: string; color?: string; price?: number }) => void;
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

            addItem: (product: Product, options?: { size?: string; color?: string; price?: number }) => {
                set((state) => {
                    const size = options?.size;
                    const color = options?.color;
                    const price = options?.price ?? product.price;

                    const existingItem = state.items.find(
                        (item) =>
                            item.id === product.id &&
                            item.selectedSize === size &&
                            item.selectedColor === color
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id &&
                                    item.selectedSize === size &&
                                    item.selectedColor === color
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                            isOpen: true,
                        };
                    }
                    return {
                        items: [
                            ...state.items,
                            {
                                ...product,
                                price, // Use variant price
                                quantity: 1,
                                selectedSize: size,
                                selectedColor: color
                            }
                        ],
                        isOpen: true
                    };
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
