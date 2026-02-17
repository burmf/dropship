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
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg border border-white/10 shadow-sm text-white">
            <h3 className="font-semibold text-lg">レビューを書く</h3>

            <div className="space-y-2">
                <label className="text-sm font-medium">評価</label>
                <div className="flex items-center">
                    <StarRating
                        rating={rating}
                        interactive={true}
                        onRatingChange={setRating}
                        size={24}
                    />
                    <span className="ml-2 text-sm text-gray-400 font-medium">{rating} / 5</span>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">お名前</label>
                <input
                    id="name"
                    required
                    maxLength={50}
                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="お名前を入力してください"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="comment" className="text-sm font-medium">レビュー内容</label>
                <textarea
                    id="comment"
                    required
                    rows={4}
                    className="flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="商品の感想を共有してください..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <div className="pt-2">
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            送信中...
                        </>
                    ) : (
                        "レビューを送信する"
                    )}
                </Button>
            </div>
        </form>
    );
}
