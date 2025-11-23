import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitCoach – Personal Training Demo Website",
  description: "Premium personal training website demo with fitness programs, transformations, and 1-on-1 coaching.",
  openGraph: {
    title: "FitCoach – Personal Training Demo Website",
    description: "Premium personal training website demo with fitness programs, transformations, and 1-on-1 coaching.",
    url: "https://fitcoach-sable.vercel.app/",
    siteName: "FitCoach",
    images: [
      {
        url: "/og-hero.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitCoach – Personal Training Demo Website",
    description: "Premium personal training website demo with fitness programs, transformations, and coaching.",
    images: ["/og-hero.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
