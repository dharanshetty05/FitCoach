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
  metadataBase: new URL("https://fitcoach-sable.vercel.app"),
  title: "FitCoach – Transform Your Body With 1-on-1 Personal Training",
  description:
    "Home Workouts • Gym Coaching • Online Programs — Fat Loss | Muscle Gain | Strength Training",
  openGraph: {
    title: "FitCoach – Transform Your Body With 1-on-1 Personal Training",
    description:
      "Home Workouts • Gym Coaching • Online Programs — Fat Loss | Muscle Gain | Strength Training",
    url: "https://fitcoach-sable.vercel.app",
    siteName: "FitCoach",
    images: [
      {
        url: "https://fitcoach-sable.vercel.app/og-hero.png", // <-- save your hero image as this
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitCoach – Transform Your Body With 1-on-1 Personal Training",
    description:
      "Premium personal training website demo with transformations & programs.",
    images: ["https://fitcoach-sable.vercel.app/og-hero.png"],
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
