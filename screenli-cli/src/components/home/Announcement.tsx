// Modules
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "../ui/button";

// Assets
import AnnoncementBg from "@/assets/assets/background/announcement-bg.png";

const Announcement = () => {
  return (
    <div className="w-[90%] lg:w-[70%] tv:max-w-6xl sm:px-6 lg:px-8 h-[45rem] flex flex-col items-center justify-center bg-sub-dark border-2 border-white/20 rounded-2xl my-8 relative">
      <Image
        src={AnnoncementBg}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        alt="AnnoucementBg"
      />
      <div className="z-10 flex items-center justify-center flex-col w-full h-full">
        <h1 className="text-2xl font-bold tracking-wide text-primary md:text-3xl text-center w-3/4 md:w-2/4 z-10">
          Hora de começar a criar listas de filmes e se tornar mais cinéfilo!
        </h1>
        <p className="mx-auto font-light mt-3 max-w-2xl text-sm w-4/5 md:w-full lg:text-lg text-center text-[#E2D6D6] sm:mt-5 md:mt-2 z-10">
          Junte-se a ScreenLi totalmente de graça, comece a criar lista e
          compartilhar com amigos e dispute!
        </p>
        <Link href="/login">
          <Button className="border-[3.5px] border-white/40 bg-sub-dark/50 font-semibold py-5 px-8 rounded-xl flex items-center gap-2 mt-4">
            Adicionar a uma Lista!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Announcement;
