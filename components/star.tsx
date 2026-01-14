import { Stars } from "./icons";

export function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.round(rating); // 4.2 → 4

  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Stars
          key={i}
          
          className={
            i < fullStars
              ? "text-[#E8A641]" // filled star
              : "text-[#E0E0E0] dark:text-[#3a3a3a]" // empty star
          }
        />
      ))}
    </div>
  );
}
