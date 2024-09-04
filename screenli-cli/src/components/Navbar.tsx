"use client";

// Modules
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Assets
import Logo from "@/assets/assets/Logo.png";
import { Github, Menu } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  // { title: "Sobre", href: "/sobre" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="py-4 w-screen z-[10]">
      <div className="flex items-center justify-between px-4 mx-auto w-[90%] lg:w-[70%] tv:max-w-6xl sm:px-6 lg:px-8">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            <Image src={Logo} className="w-28" alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:block bg-sub-dark border-[3px] rounded-2xl border-white/20">
          <div className="px-6 py-2">
            {navItems.map((item) => (
              <React.Fragment key={item.title}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-xl text-[#BFBFBF] border-1.5 border-white/0 hover:border-1.5 hover:border-white/70 hover:text-white"
                >
                  {item.title}
                </Link>
              </React.Fragment>
            ))}
            {isLoggedIn ? (
              <Link
                href="/lists"
                className="px-3 py-2 text-sm font-medium rounded-xl text-[#BFBFBF] border-1.5 border-white/0 hover:border-1.5 hover:border-white/70 hover:text-white"
              >
                Minhas Listas
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-3 py-2 text-sm font-medium rounded-xl text-[#BFBFBF] border-1.5 border-white/0 hover:border-1.5 hover:border-white/70 hover:text-white"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Kc1t/desafio-verzel"
            target="_blank"
            rel="noopener noreferrer"
            className="z-20 items-center justify-center bg-sub-dark hover:border-white/60 transition-all ease-in-out duration-300 border-2 border-white/20 h-11 w-11 md:h-10 md:w-10 cursor-pointer rounded-full hidden md:flex"
          >
            <Github className="text-white w-5 h-5" />
          </a>
          {isLoggedIn ? (
            <Link href="/lists">
              <Button className="hidden md:inline-flex px-6 rounded-xl bg-sub-dark hover:border-white/60 transition-all ease-in-out duration-300 border-2 border-white/20 cursor-pointer">
                Minhas Listas
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button className="hidden md:inline-flex px-6 rounded-xl bg-sub-dark text-white border-2 border-white/20">
                Entrar
              </Button>
            </Link>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
              >
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Fechar</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-sub-dark text-white border-white/20 border-l-2"
            >
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                {!isLoggedIn && (
                  <>
                    <Link
                      href="/register"
                      className="px-3 py-2 text-sm font-medium text-white"
                    >
                      Registrar
                    </Link>
                    <Link
                      href="/login"
                      className="px-3 py-2 text-sm font-medium text-white"
                    >
                      Entrar
                    </Link>
                  </>
                )}
                {isLoggedIn && (
                  <Link
                    href="/lists"
                    className="px-3 py-2 text-sm font-medium text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Minhas Listas
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
