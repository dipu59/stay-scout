// src/app/restaurants/[slug]/page.tsx
import { RatingStars } from "@/src/components/star";
import { LatestCard, restaurants } from "@/src/config/data";

export default function RestaurantDetails({ params }: any) {
  const { slug } = params;

  const restaurant = LatestCard.find((item) => item.slug === slug);

  if (!restaurant) {
    return <h1>Restaurant not found</h1>;
  }

  return (
    <div>
      <h1>{restaurant.title}</h1>
      <p>{restaurant.description}</p>
      <RatingStars rating={restaurant.ratings}/>
      <h1>Pack pack baby</h1>
    </div>
  );
}
