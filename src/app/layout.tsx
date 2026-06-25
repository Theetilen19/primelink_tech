import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeLink Technologies | Digital Agency & Technology Solutions",
  description:
    "PrimeLink Technologies – Transforming ideas into powerful digital solutions. Web development, mobile apps, custom software, networking, cloud & cybersecurity services in Kenya.",
  keywords:
    "web development, mobile apps, software development, networking, cloud, cybersecurity, ISP solutions, Kenya, PrimeLink Technologies",
  authors: [{ name: "PrimeLink Technologies" }],
  openGraph: {
    title: "PrimeLink Technologies",
    description:
      "Connecting Innovation, Empowering Business – Premier digital agency for web, mobile, software, and networking solutions.",
    url: "https://primelink.co.ke",
    siteName: "PrimeLink Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeLink Technologies",
    description: "Transforming Ideas Into Digital Solutions",
  },
  robots: "index, follow",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
