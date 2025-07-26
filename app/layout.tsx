import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/components/providers/modal-provider";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gazal Isiaq · Realty project",
  description: "Real estate solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "")}>
        <Toaster />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
