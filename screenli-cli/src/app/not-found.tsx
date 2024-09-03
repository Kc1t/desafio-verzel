// Modules
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";

// Assets
import Error from "@/assets/assets/404.png";

const notFound = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-background-dark">
      <Link href="/" className="text-xl font-bold">
        <Image src={Error} className="w-[14rem]" alt="Logo" />
      </Link>
      <Link href="/">
        <Button className="hidden md:inline-flex px-6 rounded-xl bg-sub-dark text-white border-2 border-white/20">
          Perdido? Voltar a Sala de Cinema!
        </Button>
      </Link>
    </div>
  );
};

export default notFound;
