// src/app/restaurants/[slug]/page.tsx
import Hero from "@/src/components/dynamic/hero";
import MagnificentPlace from "@/src/components/dynamic/magnificentPlace";
import MoreInformation from "@/src/components/dynamic/moreInformation";
import OverallRating from "@/src/components/dynamic/overallRating";
import { RatingStars } from "@/src/components/star";
import { LatestCard } from "@/src/restrurentDB/data";

export default async function RestaurantDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const restaurant = LatestCard.find((item) => item.slug === slug);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <Hero />
      <MagnificentPlace />
      <MoreInformation/>
      <OverallRating/>
    </div>
  );
}
