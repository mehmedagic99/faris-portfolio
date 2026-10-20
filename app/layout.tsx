import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://faris-portfolio-flax.vercel.app"),
  title: "Faris Mehmedagić | YouTube Thumbnail Designer",
  description: "Custom YouTube thumbnails for creators who want their videos to stand out. Explore cinematic, gaming, podcast, and entertainment thumbnail design by Faris Mehmedagić.",
  applicationName: "FARISM | YouTube Thumbnail Designer",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  keywords: [
    "YouTube thumbnail designer",
    "custom YouTube thumbnails",
    "cinematic thumbnails",
    "gaming thumbnails",
    "podcast thumbnails",
    "thumbnail design portfolio",
    "Faris Mehmedagić",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Faris Mehmedagić | YouTube Thumbnail Designer",
    description: "Custom YouTube thumbnails built around your video idea, audience, and channel.",
    siteName: "FARISM | Thumbnail Design",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "FARISM, YouTube thumbnail design by Faris Mehmedagic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faris Mehmedagić | YouTube Thumbnail Designer",
    description: "Custom YouTube thumbnail design for creators and growing channels.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
