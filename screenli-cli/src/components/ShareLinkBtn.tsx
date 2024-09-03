"use client";

// Modules
import React, { useState } from "react";

// Components
import { useToast } from "@/hooks/use-toast";

// Assets
import ShareSvg from "@/assets/assets/svgs/ShareSvg";

const ShareLinkBtn = () => {
  const [copyMessage, setCopyMessage] = useState("");
  const { toast } = useToast();

  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setCopyMessage("Copiado!");
          setTimeout(() => setCopyMessage(""), 3000);
          toast({
            title: "🍿 Link Copiado!",
            // description: "Friday, February 10, 2023 at 5:57 PM",
          });
        })
        .catch((err) => {
          console.error("Erro ao copiar link", err);
          alert("erro");
          setCopyMessage(
            "Erro ao copiar Link, copie manualmente ou tente novamente"
          );
          setTimeout(() => setCopyMessage(""), 5000);
        });
    } else {
      setCopyMessage("Clipboard API não suportada, copie manualmente");
      setTimeout(() => setCopyMessage(""), 5000);
    }
  };

  return (
    <button
      className="flex z-20 items-center justify-center bg-sub-dark hover:border-white/60 transition-all ease-in-out duration-300 border-2 border-white/20 h-8 w-8 md:h-10 md:w-10 cursor-pointer rounded-full"
      onClick={copyLink}
    >
      <ShareSvg />
      {/* {copyMessage && (
        <p className="absolute top-[20px] left-[-30px] rounded-md bg-[#191919] text-white p-2 text-center text-sm cursor-default">
          {copyMessage}
        </p>
      )} */}
    </button>
  );
};

export default ShareLinkBtn;
