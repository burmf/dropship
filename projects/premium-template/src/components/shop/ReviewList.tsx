import { Review } from "@/types";
import StarRating from "./StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface ReviewListProps {
    reviews: Review[];
    isLoading?: boolean;
}

export default function ReviewList({ reviews, isLoading }: ReviewListProps) {
    if (isLoading) {
        return <div className="text-center py-8 text-muted-foreground">Loading reviews...</div>;
    }

    if (reviews.length === 0) {
        return (
            <div className="text-center py-10 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">No reviews yet. Be the first to share your thoughts!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {reviews.map((review) => (
                <Card key={review.id} className="border-none shadow-sm bg-muted/20">
                    <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User size={16} className="text-primary" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm block">{review.userName}</span>
                                    <span className="text-xs text-muted-foreground">{review.date}</span>
                                </div>
                            </div>
                            <StarRating rating={review.rating} size={14} />
                        </div>
                        <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                            {review.comment}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
