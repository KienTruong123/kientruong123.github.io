import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kien's Profolior ",
  description: "Build",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 font-serif">{children}</body>
    </html>
  );
}
