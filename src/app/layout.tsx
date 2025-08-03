import type { Metadata } from "next";
import { Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brat Utang Tracker",
  description:
    "brat and it's the same but it's an utang tracking website so it's not",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoNarrow.variable} antialiased`}>
        <Toaster
         />
        {children}
      </body>
    </html>
  );
}
