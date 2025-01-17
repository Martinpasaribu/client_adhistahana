import type { Metadata } from "next";
import localFont from "next/font/local";

import "@style/globals.css";
import { Toaster } from "react-hot-toast";
import ClientProvider from "./Provider/ClientProvider/page";




const geistSans = localFont({
  src: "../style/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../style/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Adhisthana</title>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" />

        <ClientProvider>
          {children}
        </ClientProvider>

        

      </body>
    </html>
  );
}
