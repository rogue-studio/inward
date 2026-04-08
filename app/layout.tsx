import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
          <div className="max-w-3xl px-6 py-6">
            <nav>
              <ul className="flex items-center justify-center gap-6 text-[12px] uppercase tracking-[0.28em] text-[#161616]/55">
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

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}