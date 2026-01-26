"use client";
import FindBestSection from "@/src/modules/findRestu";
import MyFeedback from "@/src/modules/myFeedback";
import LatestTrands from "@/src/modules/theLatestTrands";
import RecentActivities from "../modules/recentActivities";
import NavLinks from "../components/navLinks";
import SearchBox from "../components/search";
import SearchFilter from "../components/search";
import { useMemo, useState } from "react";
import { LatestCard } from "../restrurentDB/data";
import { useSearch } from "../context/context";

export default function Home() {
  const { filters } = useSearch();

  // 🔍 Filter cards based on context filters
  const filteredData = useMemo(() => {
    const name = filters.name.toLowerCase();
    const location = filters.location.toLowerCase();

    return LatestCard.filter((item) => {
      const matchName = name ? item.title.toLowerCase().includes(name) : true;

      const matchLocation = location
        ? item.dynamic.shortLocation.toLowerCase().includes(location)
        : true;

      return matchName && matchLocation;
    });
  }, [filters]);

  return (
    <section className="">
      <NavLinks />
      <FindBestSection />
      <LatestTrands data={filteredData} />
      <MyFeedback />
      <RecentActivities />
    </section>
  );
}
