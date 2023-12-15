import { Inter as FontSans } from "next/font/google";
import Metadata from "../config/metadata";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import "../assets/main.css";

// SEO metadata
export const metadata = Metadata;

// Inter font
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
