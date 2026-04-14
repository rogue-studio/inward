import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "INWARD",
  description: "An editorial project shaped by fragments, silence, and trace.",
  openGraph: {
    title: "INWARD",
    description: "An editorial project shaped by fragments, silence, and trace.",
    url: "https://www.inward.jp",
    siteName: "INWARD",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INWARD",
    description: "An editorial project shaped by fragments, silence, and trace.",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-[#f5f1ea] text-[#161616] antialiased">
        <header className="fixed top-0 left-0 z-50 w-full bg-[#f5f1ea]/90 backdrop-blur">
          <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-6">
            <nav className="overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ul className="flex min-w-max items-center justify-start gap-4 px-2 text-[11px] uppercase tracking-[0.22em] text-[#161616]/55 sm:justify-center sm:gap-6 sm:px-0 sm:text-[12px] sm:tracking-[0.28em]">
                <li>
                  <Link
                    href="/"
                    className="transition duration-500 hover:text-[#161616]/85"
                  >
                    Top
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fragments"
                    className="transition duration-500 hover:text-[#161616]/85"
                  >
                    Fragments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/human"
                    className="transition duration-500 hover:text-[#161616]/85"
                  >
                    Human
                  </Link>
                </li>
                <li>
                  <Link
                    href="/log"
                    className="transition duration-500 hover:text-[#161616]/85"
                  >
                    Log
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition duration-500 hover:text-[#161616]/85"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition duration-500 hover:text-[#161616]/85"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-20 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}