import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUMAN | INWARD",
  description: "Where INWARD meets the real.",
};

export default function HumanPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-4 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        HUMAN
      </h1>

      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Where INWARD meets the real.
      </p>

      <div className="space-y-4 text-[14px] font-light leading-[1.0] tracking-[0.05em] text-[#161616]/68">
        <p>創造する人、場所を営む人。</p>

        <p>INWARDが出会った人の声と気配を記録します。</p>

        <p className="pt-6 text-[13px] tracking-[0.06em] text-[#161616]/50">
          現在、取材記事を準備しています。
        </p>
      </div>
    </main>
  );
}