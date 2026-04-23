import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOG | INWARD",
  description: "Unfinished records from inward.",
};

export default function LogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-4 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        LOG
      </h1>

      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Unfinished records from inward.
      </p>

      <div className="text-[15px] leading-[1.9] text-[#161616]/68">

        {/* LOG 1 */}
        <div className="pb-10 border-b border-neutral-200">
          <p>#制作ログ #本末転倒</p>
          <p>余白の尊さを編集するのは詰め詰めの深夜</p>
          <p>矛盾と皮肉にどっぷり浸かってグンモーニン</p>
        </div>

        {/* LOG 2 */}
        <div className="py-10 border-b border-neutral-200">
          <p>#ご感想ログ #信頼</p>
          <p>「もう少し読者を信じていい気がしました」</p>
        </div>

        {/* LOG 3 */}
        <div className="py-10 border-b border-neutral-200">
          <p>#ご感想ログ #ギミック</p>
          <p>「比喩排除の観察的断片が読者視点で比喩になる仕掛けは悪くない」</p>
        </div>

        {/* LOG 4 */}
        <div className="py-10 border-b border-neutral-200">
          <p>#制作ログ #境界線上</p>
          <p>良いと良くないの境界線を引く</p>
          <p>境界線上あるいはその近くにあるflagmentsが最適解</p>
        </div>

        {/* LOG 5（最後は線なし） */}
        <div className="pt-10">
          <p>#日記ログ #破天荒</p>
          <p>日曜日の朝、ラーメンとパスタとざる蕎麦を食べた</p>
          <p>いずれもセブンイレブンで購入</p>
          <p>常識をぶっ飛ばして清々しい</p>
        </div>

      </div>
    </main>
  );
}