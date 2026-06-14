import type { Metadata } from "next";
import Image from "next/image";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "SOUNDSCAPE | INWARD",
  description: "Soundscapes from INWARD.",
};

const storeLinks = [
  {
    label: "Apple Music",
    href: "https://music.apple.com/jp/album/boundary-ep/6776065582",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/intl-ja/album/1pH05bjta2iLwcDGJRyFU4",
  },
  {
    label: "YouTube Music",
    href: "https://music.youtube.com/playlist?list=OLAK5uy_lpbSstJx05PS6xuwJ7gxtDhqzex6nLg4o",
  },
  {
    label: "Amazon Music",
    href: "https://music.amazon.co.jp/albums/B0H3S8C5Z4",
  },
  {
    label: "AWA",
    href: "https://s.awa.fm/album/17c47a58547a29fb0620",
  },
  {
    label: "LINE MUSIC",
    href: "https://music.line.me/webapp/album/mb00000000055b0db3",
  },
  {
    label: "mora",
    href: "https://mora.jp/package/43000018/4511820-78485/",
  },
];

const tracks = [
  "inward",
  "a day off",
  "Between Bloom and Fall",
  "inward x a day off (Residual Mix)",
];

export default function SoundscapePage() {
  return (
    <SimplePageLayout title="SOUNDSCAPE">
      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Soundscapes from inward.
      </p>

      <section className="space-y-10">
        <div className="space-y-6 text-[13px] leading-[2.1] tracking-[0.06em] text-[#161616]/62">
          <p>断章、余白、痕跡、変化、境界。</p>

          <p>
            言葉に紡げない感覚。
            <br />
            写真に映らない温度。
          </p>

          <p>
            それらは、INWARDに触れる人それぞれの記憶や追憶の中で、
            異なる意味を持ちはじめるものだと考えています。
          </p>

          <p>
            SOUNDSCAPEは、その解釈の一例として用意した音響風景です。
          </p>
        </div>

        <section className="border-t border-[#161616]/10 pt-10">
          <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#161616]/35">
            Latest Release
          </p>

          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#161616]/35">
            2026.06.13 1st EP release
          </p>

          <h2 className="text-[22px] font-light tracking-[0.08em] text-[#161616]/72">
            “Boundary”
          </h2>

          <div className="mt-8 max-w-[400px]">
            <Image
              src="/images/soundscape/boundary.jpg"
              alt="INWARD soundscape - Boundary"
              width={800}
              height={800}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="mt-8">
            <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-[#161616]/35">
              Track
            </p>

            <ol className="space-y-2 text-[12px] leading-[1.9] tracking-[0.08em] text-[#161616]/48">
              {tracks.map((track, index) => (
                <li key={track}>
                  {String(index + 1).padStart(2, "0")} {track}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-[#161616]/35">
              Store
            </p>

            <div className="max-w-[520px] text-[13px] leading-[2.1] tracking-[0.08em] text-[#161616]/55">
              {storeLinks.map((link, index) => (
                <span key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#161616]/85"
                  >
                    {link.label}
                  </a>
                  {index < storeLinks.length - 1 && (
                    <span className="px-2 text-[#161616]/25">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-[#161616]/10 pt-10">
            <h2 className="text-[22px] font-light tracking-[0.08em] text-[#161616]/72">
              “Boundary”
            </h2>

            <div className="mt-8 space-y-5 text-[13px] leading-[2.1] tracking-[0.06em] text-[#161616]/56">
              <p>境界は、何かを分けるためだけにあるのか。</p>

              <p>
                川と海のあいだ。
                <br />
                咲くことと、散ることのあいだ。
                <br />
                日常と非日常のあいだ。
                <br />
                出会いと別れのあいだ。
                <br />
                過ぎ去ったものと、残り続けるもののあいだ。
              </p>

              <p>
                “Boundary” は、そうした曖昧でありながら確かに存在する場所に
                耳を澄ませるための記録。
              </p>

              <p>FragmentsとSCENEから派生した音響風景として。</p>
            </div>
          </div>
        </section>
      </section>
    </SimplePageLayout>
  );
}