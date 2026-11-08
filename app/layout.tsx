import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpareSlot — Never waste an empty appointment",
  description: "Find last-minute appointments near you, or fill cancelled slots at your business with SpareSlot.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
