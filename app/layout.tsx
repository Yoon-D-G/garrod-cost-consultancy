import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Garrod Cost Consultancy</title>
        <meta name="description" content="Expert cost reduction consultancy in the UK. Reduce costs or it’s free." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
