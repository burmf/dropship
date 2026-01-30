import { useState } from "react";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { Loader2 } from "lucide-react";

interface ReviewFormProps {
    onSubmit: (data: { userName: string; rating: number; comment: string }) => Promise<void>;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
    const [rating, setRating] = useState(5);
    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName.trim() || !comment.trim()) return;

        setIsSubmitting(true);
        try {
            await onSubmit({ userName, rating, comment });
            // Reset form
            setUserName("");
            setComment("");
            setRating(5);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg">Write a Review</h3>

            <div className="space-y-2">
                <label className="text-sm font-medium">Rating</label>
                <div className="flex items-center">
                    <StarRating
                        rating={rating}
                        interactive={true}
                        onRatingChange={setRating}
                        size={24}
                    />
                    <span className="ml-2 text-sm text-muted-foreground font-medium">{rating} / 5</span>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                    id="name"
                    required
                    maxLength={50}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="comment" className="text-sm font-medium">Review</label>
                <textarea
                    id="comment"
                    required
                    rows={4}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="Share your experience..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <div className="pt-2">
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Submit Review"
                    )}
                </Button>
            </div>
        </form>
    );
}
