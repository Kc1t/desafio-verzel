// Register.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Service
import { registerUser } from "@/services/auth";

// Schemas
import { registerSchema } from "@/schemas/validationSchema";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Assets
import LoginBg from "@/assets/assets/background/login-bg.png";
import Logo from "@/assets/assets/Logo.png";

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("User já está logado, redirecionando para /login");
      router.push("/login");
    }
  }, [router]);

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      await registerUser(data.username, data.email, data.password);
      toast({
        title: "🍿 Registro Concluído!",
      });
      setTimeout(() => {
        router.push("/login");
      }, 0);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error Registrando Usuário:", error.message);
        toast({
          title: "Algo deu Errado!",
        });
      } else {
        console.error("Unexpected error:", error);
        toast({
          title: "Algo deu Errado!",
        });
      }
    } finally {
      reset(); 
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
      <form onSubmit={handleSubmit(onSubmit)} className="z-10 flex flex-col gap-2">
        <Link
          href="/"
          className="text-xl font-bold w-full flex items-center justify-center"
        >
          <Image src={Logo} className="w-[10rem]" alt="Logo" />
        </Link>

        <label htmlFor="username" className="text-xs">
          Usuário
        </label>
        <Input
          id="username"
          type="text"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          placeholder="Username"
          {...register("username")}
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message as string}</p>}

        <label htmlFor="email" className="text-xs">
          Email
        </label>
        <Input
          id="email"
          type="email"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}

        <label htmlFor="password" className="text-xs">
          Senha
        </label>
        <Input
          id="password"
          type="password"
          className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-4 pr-12 pl-6 text-white focus:border-white/20"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message as string}</p>}

        <Button
          type="submit"
          className="border-[2px] border-white/40 bg-sub-dark/50 font-semibold py-5 px-8 rounded-xl flex items-center gap-2 mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registrando..." : "Registrar"}
        </Button>
      </form>
      <Link href="/login" className="z-10 my-4">
        <span className="text-white font-light my-4 text-center z-10">
          Possui conta?{" "}
          <strong className="underline cursor-pointer">Entrar</strong>
        </span>
      </Link>
    </div>
  );
};

export default Register;
