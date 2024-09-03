// Modules
import Image from "next/image";
import React from "react";

// Assets
import Logo from "@/assets/assets/Logo.png";

const Loading = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background-dark flex flex-col items-center justify-center">
      <Image src={Logo} className="w-[14rem] animate-pulse" alt="Logo" />
    </div>
  );
};

export default Loading;
