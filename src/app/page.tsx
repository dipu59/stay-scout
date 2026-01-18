import FindBestSection from "@/src/modules/findRestu";
import MyFeedback from "@/src/modules/myFeedback";
import LatestTrands from "@/src/modules/theLatestTrands";
import RecentActivities from "../modules/recentActivities";
import NavLinks from "../components/navLinks";



export default function Home() {
  return (
    <section className="">
      <NavLinks/>
      <FindBestSection/>
      <LatestTrands/>
      <MyFeedback/>
      <RecentActivities/>
    </section>
  );
}
