import "~/styles/globals.css";

import { Noto_Sans, Nova_Flat } from "next/font/google";
import { type Metadata } from "next";

import config from "public/config.json";

export const metadata: Metadata = config.meta;

const heading = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const body = Nova_Flat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

const accent = Noto_Sans({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-accent",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${accent.variable} ${body.variable} bg-s2`}>
        {children}
      </body>
    </html>
  );
}
