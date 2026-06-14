import type { Metadata } from "next";
import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata: Metadata = {
  title: "ABOUT | INWARD",
  description:
    "INWARD is an editorial project shaped by fragments, silence, and trace. A work by Rogue Studio.",
};

export default function AboutPage() {
  return (
    <SimplePageLayout title="ABOUT">
      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        An editorial project shaped by fragments, silence, and trace.
      </p>

      <div className="space-y-5 text-[13px] leading-[2.1] tracking-[0.06em] text-[#161616]/62">
        <p>断章、余白、痕跡、変化、境界。</p>

        <p>言い切られない曖昧を置くプロジェクト。</p>

        <p>
          だれかが触れたとき、
          <br />
          だれかの記憶が、そっと波打つ。
        </p>

        <p className="pt-4">
          すべては説明するためのものではない。
        </p>

        <p>残るものに、ゆっくりと触れていくための場所。</p>

        <p>
          それぞれは独立し、
          <br />
          それぞれはつながっている。
        </p>

        <p>温度や気配は残り続ける。</p>

        <p className="pt-4">
          結論へ急がない。
          <br />
          過程にとどまらない。
        </p>

        <p>残り火を刻み、誰かの心に灯していく。</p>

        <p className="pt-2">——</p>

        <p>内側へ。</p>
      </div>

      <div className="mt-14 space-y-4 text-[13px] leading-[1.9] tracking-[0.06em] text-[#161616]/45">
        <p>INWARD is an editorial project.</p>

        <p>Shaped by fragments, silence, and trace.</p>

        <p>It does not seek to explain everything.</p>

        <p>It leaves space for what remains unspoken.</p>

        <p>
          Each fragment stands alone,
          <br />
          yet remains quietly connected to something larger.
        </p>

        <p>INWARD does not rush toward conclusions.</p>

        <p>It stays with what remains.</p>
      </div>

      <p className="mt-14 text-[13px] tracking-[0.08em] text-[#161616]/45">
        A work by Rogue Studio.
      </p>
    </SimplePageLayout>
  );
}