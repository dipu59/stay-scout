"use client";

import { createContext, useContext, useState } from "react";

type SearchFilters = {
  name: string;
  location: string;
};

type SearchContextType = {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>({
    name: "",
    location: "",
  });

  return (
    <SearchContext.Provider value={{ filters, setFilters }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }
  return context;
}
