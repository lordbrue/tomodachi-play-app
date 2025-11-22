import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import BottomNav from "@/components/custom/bottom-nav";

export const metadata: Metadata = {
  title: "Tomodachi Play - Assista anime com companhia virtual",
  description: "Marketplace seguro para assistir animes com acompanhantes virtuais. Conecte-se com otakus e compartilhe sua paixão por anime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-geist-sans antialiased bg-black text-white">
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}