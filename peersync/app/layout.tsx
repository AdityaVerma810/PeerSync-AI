import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/layout/header";
import HeaderWrapper from "@/components/ui/layout/header-wrapper"

const outfitFont = Outfit({
  
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});



export const metadata: Metadata = {
  title: "PeerSync AI",
  description: "PeerSync is a platform to find your perfect study partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfitFont.className} antialiased`}
      >
       <HeaderWrapper />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
