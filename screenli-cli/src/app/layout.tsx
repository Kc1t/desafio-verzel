// Modules
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import Script from "next/script";

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

        {/* Microsoft Clairity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ny1ia4yk10"); 
           `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
