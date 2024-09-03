// Modules
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Screenli | Desafio Verzel",
  description: "Faça sua lista de filmes.",
  icons: {
    icon: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="Lato">
      <head>
        <link rel="icon" href="/ico.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
