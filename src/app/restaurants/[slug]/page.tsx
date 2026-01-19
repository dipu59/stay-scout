// src/app/restaurants/[slug]/page.tsx
import Hero from "@/src/components/dynamic/hero";
import { RatingStars } from "@/src/components/star";
import { LatestCard } from "@/src/restrurentDB/data";

export default function RestaurantDetails({ params }: any) {
  const { slug } = params;

  const restaurant = LatestCard.find((item) => item.slug === slug);

  if (!restaurant) {
    return <h1>Restaurant not found</h1>;
  }

  return (
    <div>
      <Hero/>
    </div>
  );
}
