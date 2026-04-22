import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-app",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRAND One — the world's brightest desk luminaire",
  description:
    "Structural replica of the heavn-one landing template. Replace copy and assets with your own brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="global-body">{children}</body>
    </html>
  );
}
