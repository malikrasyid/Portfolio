import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // This imports Tailwind

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malik's Portfolio",
  description: "Fullstack Developer Portfolio",
};

// THIS is the default export the error is looking for!
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}