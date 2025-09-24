import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Supports weights 200-800
import '@fontsource-variable/manrope';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import CardButton from "@/components/CardButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEMCON | Soluciones de automatización y control para la industria papelera",
  description: "Servicios especializados de medición y control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-svh flex flex-col relative`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CardButton />
      </body>
    </html>
  );
}
