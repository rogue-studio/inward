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

      <div className="space-y-10">
        <Link href="/human/go-takada" className="group block">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#161616]/35">
            HUMAN #01
          </p>
          <p className="mt-2 text-[18px] font-light tracking-[0.04em] text-[#161616]/76 transition group-hover:text-[#161616]">
            GO TAKADA
          </p>
          <p className="mt-2 text-[12px] tracking-[0.06em] text-[#161616]/42">
            SLOUP / Nimka by hand & light
          </p>
        </Link>
      </div>
    </SimplePageLayout>
  );
}
