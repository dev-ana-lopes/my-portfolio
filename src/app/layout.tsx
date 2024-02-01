import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600']
 });

export const metadata: Metadata = {
  title: "Ana Lopes",
  description: "Ana Lopes is a Software Engineer...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
