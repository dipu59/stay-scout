import FindBestSection from "@/src/modules/findRestu";
import MyFeedback from "@/src/modules/myFeedback";
import LatestTrands from "@/src/modules/theLatestTrands";



export default function Home() {
  return (
    <section className="">
      <FindBestSection/>
      <LatestTrands/>
      <MyFeedback/>
    </section>
  );
}
