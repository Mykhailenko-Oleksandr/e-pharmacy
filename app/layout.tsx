import "modern-normalize";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: "https://",
    images: [{ url: "" }],
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
          <Header />

          <main>{children}</main>

          <Footer />
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
