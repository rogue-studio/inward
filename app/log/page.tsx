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
          <p>矛盾と皮肉にどっぷり浸かる朝5時に濃いブラック</p>
          <p>泥水みたいなコーヒー味だ</p>
        </div>

        {/* LOG 2 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">信じること — process</p>
          <p className="mt-4">プロジェクト立ち上げ初期のできごと</p>
          <p>fragmentsをプリントして見てもらった</p>
          <p>「もう少し読者を信じてもいい気がしました」と言われた</p>
        </div>

        {/* LOG 3 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">ギミック — process</p>
          <p className="mt-4">比喩を排除する観察的断片</p>
          <p>読者視点で比喩になるギミック</p>
          <p>仕掛けはまったくそれだけじゃない（自信）</p>
        </div>

        {/* LOG 4 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">選定 — process</p>
          <p className="mt-4">良いと良くないの間に境界線を引く</p>
          <p>境界線上あるいはその近くにあるfragmentsが総じてクリティカルだった</p>
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
          <p className="text-[#161616]/68">写真の難しさよりも — process</p>
          <p className="mt-4">思想を共有できるカメラマン急募だな</p>
          <p>写真が難しいのはさることながら</p>
          <p>視覚的に別解釈もパッケージしたい</p>
        </div>

        {/* LOG 7 */}
        <div className="py-10 border-b border-neutral-200">
          <p className="text-[#161616]/68">季節の変わりめ — diary</p>
          <p className="mt-4">寒いのか暑いのかよくわからない</p>
          <p>セーターと短パンで過ごす羽目になった</p>
          <p>今はめちゃめちゃ暑いからアイス食べてる</p>
        </div>

      </div>
    </main>
  );
}