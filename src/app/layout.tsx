import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ChainSquad GmbH - Pioneering Web3 Engineering Excellence",
  description: "German technology consultancy at the intersection of blockchain, AI, and full-stack development. Building production-ready systems since 2016.",
  keywords: "blockchain, Web3, AI, full-stack development, smart contracts, decentralized systems, Germany, consultancy",
  openGraph: {
    title: "ChainSquad GmbH - Pioneering Web3 Engineering Excellence",
    description: "German technology consultancy at the intersection of blockchain, AI, and full-stack development.",
    url: "https://chainsquad.com",
    siteName: "ChainSquad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        {children}
        <Script
          defer
          data-domain="chainsquad.com"
          src="https://p.chainsquad.com/js/script.js"
        />
      </body>
    </html>
  );
}
