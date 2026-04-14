import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | INWARD",
  description: "Privacy policy for INWARD.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-12 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        Privacy
      </h1>

      <div className="space-y-6 text-[15px] leading-[2.1] text-[#161616]/68">
        <p>
          INWARD（以下、「本サイト」）は、お問い合わせの際に、名前やメールアドレス等の個人情報をご提供いただく場合があります。
        </p>

        <p>
          取得した個人情報は、お問い合わせへの対応および必要なご連絡のためにのみ利用し、それ以外の目的では使用しません。
        </p>

        <p>
          法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供することはありません。
        </p>

        <p>
          本サイトでは、アクセス解析やサービス改善のために、Cookie等を使用する場合があります。
        </p>

        <p>
          個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
        </p>

        <p>embers@inward.jp</p>

        <p>INWARD / Rogue Studio</p>
      </div>
    </main>
  );
}