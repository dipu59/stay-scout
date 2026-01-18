import dynamic from "next/dynamic";

const RestaurantMap = dynamic(() => import("./RestaurantMapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[1264px] rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
  ),
});

export default RestaurantMap;
