import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
    rating: number;
    max?: number;
    size?: number;
    interactive?: boolean;
    onRatingChange?: (rating: number) => void;
    className?: string;
}

export default function StarRating({
    rating,
    max = 5,
    size = 18,
    interactive = false,
    onRatingChange,
    className
}: StarRatingProps) {
    return (
        <div className={cn("flex items-center gap-0.5", className)}>
            {Array.from({ length: max }).map((_, i) => (
                <button
                    key={i}
                    type="button"
                    disabled={!interactive}
                    onClick={() => interactive && onRatingChange?.(i + 1)}
                    className={cn(
                        "focus:outline-none transition-colors",
                        interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
                    )}
                >
                    <Star
                        size={size}
                        className={cn(
                            i < rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted-foreground",
                            "transition-colors"
                        )}
                    />
                </button>
            ))}
        </div>
    );
}
