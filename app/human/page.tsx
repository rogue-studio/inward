import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "HUMAN | INWARD",
  description: "Where INWARD meets the real.",
};

export default function HumanPage() {
  return (
    <SimplePageLayout title="HUMAN">
      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Where INWARD meets the real.
      </p>

      <div className="space-y-5 text-[13px] leading-[2.1] tracking-[0.06em] text-[#161616]/62">
        <p>創造する人、場所を営む人。</p>

        <p>INWARDが出会った人の声と気配を記録します。</p>

        <p className="pt-6 text-[12px] tracking-[0.06em] text-[#161616]/45">
          現在、取材記事を準備しています。
        </p>
      </div>
    </SimplePageLayout>
  );
}