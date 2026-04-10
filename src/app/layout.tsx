import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AquaPrime Maritime Marketplace",
  description: "Dynamic and seamless buying and selling platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
