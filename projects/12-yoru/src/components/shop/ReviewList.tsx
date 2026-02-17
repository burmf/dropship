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
        return <div className="text-center py-8 text-gray-400">レビューを読み込み中...</div>;
    }

    if (reviews.length === 0) {
        return (
            <div className="text-center py-10 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400">まだレビューがありません。最初のレビューを投稿しませんか？</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {reviews.map((review) => (
                <Card key={review.id} className="border-none shadow-sm bg-white/5">
                    <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User size={16} className="text-primary" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm block text-white">{review.userName}</span>
                                    <span className="text-xs text-gray-400">{review.date}</span>
                                </div>
                            </div>
                            <StarRating rating={review.rating} size={14} />
                        </div>
                        <p className="text-sm text-white/80 mt-2 leading-relaxed">
                            {review.comment}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
