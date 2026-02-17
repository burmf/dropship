"use client";

import { useCart } from "@/store/useCart";
import { useSettings } from "@/store/useSettings"; // Added
import { formatPrice } from "@/lib/currency"; // Added
import { useCheckout } from "@/hooks/useCheckout"; // Added
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, Loader2, CheckCircle2 } from "lucide-react"; // Added icons
import { ScrollArea } from "@/components/ui/scroll-area"; // Need to add ScrollArea
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

function CheckoutButton({ onClose }: { onClose: () => void }) {
    const { processCheckout, isProcessing, error } = useCheckout();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCheckout = async () => {
        const result = await processCheckout();
        if (result.success) {
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2000);
        }
    };

    return (
        <div>
            <Button
                onClick={handleCheckout}
                disabled={isProcessing || isSuccess}
                className={`w-full text-lg h-12 rounded-full font-bold shadow-lg shadow-primary/20 transition-all ${isSuccess ? "bg-green-600 hover:bg-green-700" : ""
                    }`}
            >
                {isProcessing ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        決済ページへ移動中...
                    </>
                ) : isSuccess ? (
                    <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        移動しています...
                    </>
                ) : (
                    "購入手続きへ進む"
                )}
            </Button>
            {error && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-500 text-xs text-center">{error}</p>
                </div>
            )}
        </div>
    );
}

export default function CartSheet() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, total } = useCart();
    const { currency } = useSettings(); // Added

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-[#050505] text-white border-white/10">
                <SheetHeader className="px-6 py-4 border-b border-white/10">
                    <SheetTitle className="flex items-center gap-2 text-white">
                        <ShoppingBag className="w-5 h-5" />
                        ショッピングカート ({items.length})
                    </SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                            <ShoppingBag className="w-10 h-10 text-gray-400" />
                        </div>
                        <p className="text-gray-400">カートに商品が入っていません</p>
                        <Button variant="outline" onClick={closeCart}>
                            買い物を続ける
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative w-20 h-24 bg-white/5 rounded-md overflow-hidden flex-shrink-0 border border-white/5">
                                        <Image
                                            src={item.images[0]}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium line-clamp-2 text-white">{item.name}</h3>
                                            <p className="text-sm text-gray-400 mt-1">
                                                {formatPrice(item.price, currency)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border border-white/10 rounded-md h-8">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-2 hover:bg-white/5 h-full transition-colors text-white"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center text-white">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 hover:bg-white/5 h-full transition-colors text-white"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 p-6 bg-white/5 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">小計</span>
                                    <span className="text-white">{formatPrice(total(), currency)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">送料</span>
                                    <span className="text-white">注文時に計算</span>
                                </div>
                                <Separator className="my-2 bg-white/10" />
                                <div className="flex justify-between font-bold text-lg text-white">
                                    <span>合計額</span>
                                    <span>{formatPrice(total(), currency)}</span>
                                </div>
                            </div>
                            <CheckoutButton onClose={closeCart} />
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet >
    );
}
