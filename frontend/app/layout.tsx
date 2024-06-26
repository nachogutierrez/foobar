
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeWatch",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/logo/homewatch-32x32.png"/>
      </head>
      <body className={`${font.className} m-0 flex flex-col justify-center overscroll-none h-full`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
