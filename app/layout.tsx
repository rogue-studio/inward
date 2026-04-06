import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "INWARD",
  description: "A quiet editorial space for fragments, silence, and trace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} bg-[#f8f6f1] text-neutral-900 antialiased`}
      >
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}