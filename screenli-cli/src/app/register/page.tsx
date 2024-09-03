"use client";

// Modules
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Service
import { registerUser } from "../../services/auth";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import LoginBg from "@/assets/assets/background/login-bg.png";
import Logo from "@/assets/assets/Logo.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("User ja esta logado, redirecionando para /login");
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await registerUser(username, email, password);
      setSuccess("Registro Concluído!");
      toast({
        title: "🍿 Registro Conclúido!",
      });
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error Registrando Usuário:", error.message);
        toast({
          title: "Algo deu Errado!",
        });
        setError(error.message);
      } else {
        console.error("Unexpected error:", error);
        toast({
          title: "Algo deu Errado!",
        });
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
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
          Usuário
        </label>
        <Input
          type="text"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          disabled={loading}
        />

        <label htmlFor="" className="text-xs">
          Email
        </label>
        <Input
          type="email"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          disabled={loading}
        />

        <label htmlFor="" className="text-xs">
          Senha
        </label>
        <Input
          type="password"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          disabled={loading}
        />
        <Button
          type="submit"
          className="border-[2px] border-white/40 bg-sub-dark/50 font-semibold py-5 px-8 rounded-xl flex items-center gap-2 mt-4"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrar"}
        </Button>
      </form>
      <Link href="/login" className="z-10 my-4">
        <span className="text-white font-light my-4 text-center z-10">
          Possui conta?{" "}
          <strong className="underline cursor-pointer">Entrar</strong>
        </span>
      </Link>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      {/* {success && <p style={{ color: "green" }}>{success}</p>} */}
    </div>
  );
};

export default Register;
