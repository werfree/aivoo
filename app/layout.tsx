import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header/Header";
import Footer from "@/components/Footer";
import GLowComponent from "@/components/GLowComponent";
import { ClerkProvider } from "@clerk/nextjs";
import OverlayLoading from "@/components/Loading/OverlayLoading";
import { dark } from "@clerk/themes";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
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
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html className={`${monaSans.variable} dark scroll-pt-4`}>
        <body className="font-mona antialiased">
          <div className="min-h-screen w-full bg-[#0D1117] text-gray-200 font-sans overflow-x-hidden">
            {/* Background Glows */}
            <GLowComponent />
            <div className="relative z-10 flex flex-col items-center min-h-screen p-4">
              <HeaderComponent />
              <OverlayLoading />
              <div className="">{children}</div>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
