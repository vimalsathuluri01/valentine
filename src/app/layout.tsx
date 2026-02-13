import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Himalasya | With All My Love",
  description: "A heartfelt Valentine's message dedicated to the one who makes my heart skip a beat. Every word written with love, every moment cherished forever.",
  keywords: ["Valentine", "Love", "Romantic", "Heartfelt", "Himalasya"],
  authors: [{ name: "With Love" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "For Himalasya | With All My Love",
    description: "A heartfelt Valentine's message from the heart",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased text-foreground overflow-x-hidden`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
