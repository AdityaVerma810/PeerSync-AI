import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut,SignInButton,SignUpButton,UserButton } from "@clerk/nextjs";

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
         <header className="flex justify-end items-center p-4 gap-4 h-16">
              
              {/* Show the sign-in and sign-up buttons when the user is signed out */}
              

              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              {/* Show the user button when the user is signed in */}
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
