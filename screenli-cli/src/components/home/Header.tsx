"use client";

// Modules
import React, { useState } from "react";
import Image from "next/image";

// Components
import Navbar from "@/components/Navbar";
import SearchInput from "./SearchInput";

// Assets
import AlienBg from "@/assets/assets/background/header-background.png";

const Header = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  return (
    <div className="w-full min-h-[120vh] h-screen flex flex-col justify-between items-center overflow-hidden relative">
      <Image
        src={AlienBg}
        className="absolute w-full h-full inset-0 object-cover z-[1]"
        alt="AlienBg"
      />
      <div className="absolute bg-gradient-to-t from-background-dark to-bg-background-dark/10 w-full h-full inset-0 object-cover z-[2]"></div>
      <Navbar />
      <div className="text-center flex flex-col lg:gap-2 z-[10] w-full">
        <h1 className="text-2xl font-bold tracking-wide text-primary sm:text-5xl md:text-5xl">
          <span className="block xl:inline">
            Crie sua lista de filmes e receba <br /> recomendações!
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm w-4/5 md:w-full lg:text-xl text-white/80 sm:mt-5 md:mt-2">
          Monte sua lista de filmes e compartilhe com seus amigos!
        </p>
        <div className="my-2">
          <SearchInput onSearchResults={setSearchResults} />
        </div>
      </div>
      <div className="h-[20vh]"></div>
    </div>
  );
};

export default Header;
