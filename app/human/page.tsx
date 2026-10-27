import type { Metadata } from "next";
import Link from "next/link";
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
      </div>

      <div className="mt-16 border-t border-[#161616]/10 pt-8">
        <Link href="/human/go-takada" className="group block">
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#161616]/35">
            HUMAN #01
          </p>
          <p className="text-[22px] font-medium tracking-[0.04em] text-[#161616]/88 transition group-hover:text-[#161616]">
            GO TAKADA
          </p>
          <p className="mt-3 text-[12px] leading-[1.8] tracking-[0.05em] text-[#161616]/48">
            SLOUP / Nimka by hand &amp; light
          </p>
        </Link>
      </div>
    </SimplePageLayout>
  );
}
