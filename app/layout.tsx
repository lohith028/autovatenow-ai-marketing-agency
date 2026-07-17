import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://autovaternow.com"),
  title: {
    default: "AutovateNow — Full-Stack Digital Marketing for Healthcare Clinics",
    template: "%s | AutovateNow",
  },
  description:
    "AutovateNow is the full-stack growth partner for modern healthcare practices — combining SEO, personal branding, performance ads, website design, and AI automation under one roof.",
  keywords: [
    "healthcare digital marketing",
    "medical SEO India",
    "clinic marketing agency",
    "doctor personal branding",
    "healthcare website design",
    "GEO optimization for clinics",
    "Meta ads for doctors",
    "WhatsApp automation for clinics",
    "Bangalore healthcare agency",
  ],
  authors: [{ name: "AutovateNow", url: "https://autovaternow.com" }],
  creator: "AutovateNow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://autovaternow.com",
    siteName: "AutovateNow",
    title: "AutovateNow — Full-Stack Digital Marketing for Healthcare Clinics",
    description:
      "The full-stack growth partner for modern healthcare practices — SEO, branding, ads, websites, and automation, under one roof.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutovateNow — Healthcare Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutovateNow — Full-Stack Digital Marketing for Healthcare Clinics",
    description:
      "The full-stack growth partner for modern healthcare practices.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
