import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: "HackIllinois Schedule",
  description: "The schedule of HackIllinois, UIUC's premier student-led hackathon.",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="icon" href="/static/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
