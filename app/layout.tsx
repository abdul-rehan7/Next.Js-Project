import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavbarDemo} from "@/components/Navbar";

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
        <NavbarDemo/>
        {children}</body>
    </html>
  );
}
