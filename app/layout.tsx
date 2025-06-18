import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header";
import Footer from "@/components/Footer";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aivoo",
  description: "AI Prower Interview Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased`}
      >
                <div className="min-h-screen w-full bg-[#0D1117] text-gray-200 font-sans overflow-x-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

             <div className="relative z-10 flex flex-col items-center min-h-screen p-4">
              <HeaderComponent/>
                {children}
              
             </div>
             <Footer/>
        </div>
      </body>
    </html>
  );
}
