import React from "react";

const Footer = () => {
  return (
    <div className="w-[95%] lg:w-[85%] tv:max-w-7xl px-2 lg:px-8 flex flex-col items-center justify-center gap-2 py-2">
      <p className="font-light mt-3 max-w-2xl text-sm text-center text-[#FBFBFB] sm:mt-5 md:mt-2 z-10">
        Todos os direitos autoriais, marcas, imagens e marcas de serviço
        pertencem a seus respectivos proprietários.
      </p>
      <span className="text-white font-medium text-center">
        © 2024 ScreenLi - Todos direitos reservados
      </span>
    </div>
  );
};

export default Footer;
