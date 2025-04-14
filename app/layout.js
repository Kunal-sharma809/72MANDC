import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "72MANDC | Leading Minerals & Chemicals Company in India – Mining Innovation & Sustainability",
  description: "72MANDC is a premier Indian company specializing in the extraction and supply of minerals and chemicals for the mining industry. With cutting-edge projects across the country, we power sustainable growth through responsible mining practices.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="min-h-screen max-w-full font-arial w-full">
        {children}
        </div>
        <Footer/>

      </body>
    </html>
  );
}
