import "modern-normalize";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-Pharmacy",
  description:
    "E-Pharmacy is a digital marketplace where multiple pharmacies offer medicines, vitamins, and health products. Compare offers, order online, and enjoy fast delivery.",
  openGraph: {
    title: "E-Pharmacy Marketplace – Online Pharmacies in One Place",
    description:
      "Discover a wide range of medicines, supplements, and healthcare products from different pharmacies. Shop conveniently and securely with E-Pharmacy.",
    url: "https://e-pharmacy-alpha.vercel.app/",
    images: [
      {
        url: "https://e-pharmacy-alpha.vercel.app/hero.png",
        alt: "E-Pharmacy Marketplace",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <AuthProvider>
            {children}
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
