import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.inward.jp/#organization",
      name: "Rogue Studio",
      url: "https://www.inward.jp/",
      email: "embers@inward.jp",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.inward.jp/#website",
      name: "INWARD",
      url: "https://www.inward.jp/",
      description:
        "An editorial project shaped by fragments, silence, and trace.",
      inLanguage: "ja",
      publisher: {
        "@id": "https://www.inward.jp/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-[#f5f1ea] text-[#161616] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}