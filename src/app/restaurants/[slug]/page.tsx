// src/app/restaurants/[slug]/page.tsx
import AlsoDiscover from "@/src/components/dynamic/alsoDiscover";
import Hero from "@/src/components/dynamic/hero";
import MagnificentPlace from "@/src/components/dynamic/magnificentPlace";
import MoreInformation from "@/src/components/dynamic/moreInformation";
import OverallRating from "@/src/components/dynamic/overallRating";
import Review from "@/src/components/dynamic/review";
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
      <Hero restaurant={restaurant} />
      <MagnificentPlace />
      <MoreInformation />
      <OverallRating />
      <Review />
      <AlsoDiscover />
      {/* {LatestCard.map((items,index)=>(
        <div key={index}>
          {items.dynamic?.location}
        </div>
      ))} */}
    </div>
  );
}
