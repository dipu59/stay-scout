import FindBestSection from "@/modules/findRestu";
import MyFeedback from "@/modules/myFeedback";
import LatestTrands from "@/modules/theLatestTrands";


export default function Home() {
  return (
    <section className="">
      <FindBestSection/>
      <LatestTrands/>
      <MyFeedback/>
    </section>
  );
}
