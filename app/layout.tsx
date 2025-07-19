import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Crimson_Pro } from 'next/font/google'
import clsx from "clsx";

export const metadata: Metadata = {
  title: "HackIllinois Schedule",
  description: "The schedule of HackIllinois, UIUC's premier student-led hackathon.",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(montserrat.variable, crimsonPro.variable)}>
      <head>
        <link rel="icon" href="/static/favicon.ico" />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  );
}
