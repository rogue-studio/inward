import SimplePageLayout from "@/components/SimplePageLayout";

const jpClass =
  "text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70 [text-wrap:pretty]";
const enClass =
  "text-[14px] leading-[1.5] tracking-[0.06em] opacity-60 [text-wrap:pretty]";

export default function AboutPage() {
  return (
    <SimplePageLayout title="ABOUT">
      {/* 日本語 */}
      <p className={jpClass}>
        内側へ向かうための、ひとつのプロジェクト。
      </p>

      <p className={jpClass}>
        断章、余白、痕跡、そして境界。言い切られない曖昧を、そのまま置く。
      </p>

      <p className={jpClass}>
        だれかが触れたとき、だれかの記憶が、そっと波打つ。
      </p>

      <p className={`${jpClass} mt-6`}>
        すべては説明するためのものではない。
      </p>

      <p className={jpClass}>
        説明されないまま残るものに、ゆっくりと触れていくための場所。
      </p>

      <p className={jpClass}>
        それぞれは独立しているが、どこかでつながっている。
      </p>

      <p className={jpClass}>
        温度や境界、残り続ける気配のようなものとして。
      </p>

      <p className={`${jpClass} mt-6`}>
        結論へ急がない。過程にとどまらない。
      </p>

      <p className={jpClass}>
        内側の残り火を刻み、誰かの心に灯していく。
      </p>

      <p className={jpClass}>——</p>

      <p className={jpClass}>内側に答えがある。</p>

      {/* 英語 */}
      <p className={`${enClass} mt-12`}>
        INWARD is an editorial project.
      </p>

      <p className={enClass}>
        shaped by fragments, silence, and trace.
      </p>

      <p className={enClass}>
        It does not seek to explain everything.
      </p>

      <p className={enClass}>
        It leaves space for what remains unspoken.
      </p>

      <p className={enClass}>Each fragment stands alone,</p>

      <p className={enClass}>
        yet remains quietly connected to something larger.
      </p>

      <p className={enClass}>
        INWARD does not rush toward conclusions.
      </p>

      <p className={enClass}>It stays with what remains.</p>
    </SimplePageLayout>
  );
}