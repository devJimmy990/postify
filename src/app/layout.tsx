import type { Metadata } from "next";
import localFont from "next/font/local";
import "@styles/globals.css";
import Footer from "@components/Footer";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Postify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen max-h-screen flex flex-col sm:pt-16 sm:px-4 xl:px-20`}
      >
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
