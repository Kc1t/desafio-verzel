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
        <meta property="image" content="/cover.png" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://screenli.kc1t.com" />
        <meta property="og:title" content="Screenli | Desafio Verzel" />
        <meta property="og:description" content="Faça sua lista de filmes." />
        <meta property="og:image" content="/cover.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://screenli.kc1t.com" />
        <meta property="twitter:title" content="Screenli | Desafio Verzel" />
        <meta
          property="twitter:description"
          content="Faça sua lista de filmes."
        />
        <meta property="twitter:image" content="/cover.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
