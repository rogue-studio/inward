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
          <p className="text-[#161616]/68">朝は来る — process</p>
          <p className="mt-4">余白の尊さを編集する深夜の詰め詰めスケジュール</p>
          <p>矛盾と皮肉にどっぷり浸かる朝5時のブラック</p>
        </div>

        {/* LOG 2 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">
            信頼 — voices / 30s / female
          </p>
          <p className="mt-4">もう少し読者を信じていい気がしました</p>
        </div>

        {/* LOG 3 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">
            ギミック — voices / 50s / male
          </p>
          <p className="mt-4">
            比喩排除の観察的断片が読者視点で比喩になる仕掛け自体はクールだね
          </p>
        </div>

        {/* LOG 4 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">選定 — process</p>
          <p className="mt-4">良いと良くないの間に境界線を引く</p>
          <p>境界線上あるいはその近くにあるflagmentsがクリティカル</p>
        </div>

        {/* LOG 5 */}
         <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">破天荒メンズ — diary</p>
          <p className="mt-4">日曜日の朝、ラーメンとパスタとざる蕎麦をシバく</p>
          <p>いずれもセブンイレブンで購入</p>
          <p>常識をぶっ飛ばして清々しい</p>
        </div>

        {/* LOG 6 */}
         <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">アンバランス — voices / 40s / male</p>
          <p className="mt-4">コンセプトも体験もおもしろかったけどリズムの崩壊は欲しちゃったなあ</p>
        </div>

      </div>
    </main>
  );
}