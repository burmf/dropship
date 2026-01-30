"use client";

import { use } from "react";
import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import { useReviews } from "@/hooks/useReviews";
import ProductDetail from "@/components/shop/ProductDetail";
import ReviewList from "@/components/shop/ReviewList";
import ReviewForm from "@/components/shop/ReviewForm";
import { Separator } from "@/components/ui/separator";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrapping params properly in Next.js 15+ (if applicable) or handling async params
    // Based on user provided package.json next version is 16.1.6

    // In Next.js 15+, params is a promise. However, standard client components often use use() hook to unwrap it.
    // Let's use `use(params)` pattern which is standard for async params in Client Components in newer Next.js.
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    const { product, loading: productLoading, error: productError } = useProduct(id);
    const { reviews, loading: reviewsLoading, addReview } = useReviews(id);

    if (productLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    <p className="text-muted-foreground animate-pulse">Loading product details...</p>
                </div>
            </div>
        );
    }

    if (productError || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">Product Not Found</h1>
                    <p className="text-muted-foreground">The product you are looking for does not exist.</p>
                    <a href="/" className="text-primary hover:underline">Return to Home</a>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background pb-20">
            <div className="container mx-auto px-6 py-12 lg:py-16">

                {/* Product Detail Section */}
                <ProductDetail product={product} />

                <div className="my-16">
                    <Separator />
                </div>

                {/* Reviews Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold">{product.rating || 0}</span>
                                <span className="text-muted-foreground">out of 5</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Based on {reviews.length} reviews
                            </p>
                        </div>

                        <ReviewForm onSubmit={async (data) => {
                            await addReview({ ...data, productId: id });
                        }} />
                    </div>

                    <div className="lg:col-span-8">
                        <h3 className="text-lg font-semibold mb-6">Recent Reviews</h3>
                        <ReviewList reviews={reviews} isLoading={reviewsLoading} />
                    </div>
                </div>
            </div>
        </main>
    );
}
