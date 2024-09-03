// Modules
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "../ui/button";
import HorrorMovies2024 from "./HorrorMovies";

// Assets
import HorrorBg from "@/assets/assets/background/horror-bg.png";
import FireSvg from "@/assets/assets/svgs/FireSvg";

const HorrorContainer = () => {
  return (
    <div className="w-[90%] lg:w-[70%] tv:max-w-6xl sm:px-6 lg:px-8 h-[45rem] flex flex-col items-center justify-center bg-sub-dark border-2 border-white/20 rounded-2xl my-8 relative">
      <Image
        src={HorrorBg}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        alt="AnnoucementBg"
      />
      <div className="z-10 flex items-start justify-end flex-col w-full h-full pl-4">
        <div className="flex gap-2">
          <FireSvg />
          <h1 className="text-2xl font-bold tracking-wide text-[#D5D5D5] md:text-3xl text-center z-10">
            Melhores Horrores de 2024.
          </h1>
        </div>
        <HorrorMovies2024 />
      </div>
    </div>
  );
};

export default HorrorContainer;
