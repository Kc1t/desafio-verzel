"use client";

// Modules
import React, { useState } from "react";

// Components
import Navbar from "../Navbar";
import MoviesSearchBar from "./MoviesSearchBar";

const MoviesTopBar = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  return (
    <div className="flex flex-col w-full z-[25]">
      <Navbar />
      <MoviesSearchBar onSearchResults={setSearchResults} />
      <div className="w-full flex gap-2 items-center justify-center"></div>
    </div>
  );
};

export default MoviesTopBar;
