import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NewNav from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehan | Let's Code your Dreams",
  description: "Professional Website developer from Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewNav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
