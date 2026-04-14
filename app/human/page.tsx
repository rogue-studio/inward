import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUMAN | INWARD",
  description: "HUMAN is where inward meets the real.",
};

export default function HumanPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-4 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        HUMAN
      </h1>

      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        HUMAN is where inward meets the real.
      </p>

      <div className="text-[15px] leading-[2.1] text-[#161616]/68">
        under consideration
      </div>
    </main>
  );
}