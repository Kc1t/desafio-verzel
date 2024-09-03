"use client";

// Modules
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Service
import { loginUser } from "../../services/auth";
import { createList } from "@/services/list";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import LoginBg from "@/assets/assets/background/login-bg.png";
import Logo from "@/assets/assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/lists");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { token } = await loginUser(email, password);
      localStorage.setItem("token", token);

      try {
        await createList("Favoritos ⭐", "Sua lista padrão de favoritos");
        toast({
          title: "🍿 Login Conclúido!",
        });
      } catch (error) {
        console.error("Erro ao criar lista:", error);
      }
      router.push("/lists");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error logging in:", error.message);
        toast({
          title: "🍿 Algo deu Errado!",
        });
        // alert(error.message);
      } else {
        console.error("Unexpected error:", error);
        toast({
          title: "🍿 Algo deu Errado!",
        });
        // alert("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background-dark h-screen w-screen overflow-hidden flex flex-col items-center justify-center text-white relative">
      <Image
        src={LoginBg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="LoginBg"
      />
      <div className="absolute bg-gradient-to-t from-sub-dark to-bg-sub-dark/80 w-full h-full inset-0 object-cover z-[2]"></div>
      <form onSubmit={handleSubmit} className="z-10 flex flex-col gap-2">
        <Link
          href="/"
          className="text-xl font-bold w-full flex items-center justify-center"
        >
          <Image src={Logo} className="w-[10rem]" alt="Logo" />
        </Link>
        <label htmlFor="" className="text-xs">
          Email
        </label>
        <Input
          type="email"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tarantino@hollywood.com"
          required
          disabled={isLoading}
        />
        <label htmlFor="" className="text-xs mt-2">
          Senha
        </label>
        <Input
          type="password"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*******"
          required
          disabled={isLoading}
        />
        <Button
          className="border-[2px] border-white/40 bg-sub-dark/50 font-semibold py-5 px-8 rounded-xl flex items-center gap-2 mt-4"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : "Entrar"}
        </Button>
      </form>
      <Link href="/register" className="z-10 my-4">
        <span className="text-white font-light my-4 text-center z-10">
          Não possui conta?{" "}
          <strong className="underline cursor-pointer">Registrar</strong>
        </span>
      </Link>
    </div>
  );
};

export default Login;
