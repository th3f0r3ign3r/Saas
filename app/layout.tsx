import Metadata from "../config/metadata";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../assets/main.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex min-h-screen flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        )}
      >
        {children}
      </body>
    </html>
  );
}
