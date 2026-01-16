import { Stars } from "./icons";

export function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.round(rating); // 4.2 → 4

  return (
    <div className="flex gap-[2px] md:gap-[5px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Stars
          key={i}
          className={
            i < fullStars
              ? "text-[#E8A641] size-[12px] md:size-[15px] lg:size-[19px] " // filled star
              : "text-[#E0E0E0] dark:text-[#3a3a3a] size-[12px] md:size-[15px] lg:size-[19px]" // empty star
          }
        />
      ))}
    </div>
  );
}
