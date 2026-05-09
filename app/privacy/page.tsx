import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | INWARD",
  description: "Privacy policy for INWARD operated by Rogue Studio.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-12 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        Privacy
      </h1>

      <div className="space-y-8 text-[15px] leading-[2.1] text-[#161616]/68">
        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Operator
          </h2>
          <p>
            INWARD（以下、「本サイト」）は、Rogue Studioによって運営されています。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Personal Information
          </h2>
          <p>
            本サイトでは、お問い合わせの際に、名前、メールアドレス、お問い合わせ内容等の個人情報をご提供いただく場合があります。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Purpose
          </h2>
          <p>
            取得した個人情報は、お問い合わせへの対応、必要なご連絡、取材・制作・協業等の相談対応のために利用します。
          </p>
          <p>上記の目的以外で個人情報を利用することはありません。</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Third Party
          </h2>
          <p>
            法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Cookie
          </h2>
          <p>
            本サイトでは、アクセス状況の把握やサービス改善のために、Cookie等を使用する場合があります。
          </p>
          <p>
            Cookieの使用を望まない場合は、ブラウザの設定により無効化することができます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Disclaimer
          </h2>
          <p>
            本サイトからリンクされた外部サイトにおける個人情報の取扱いについて、本サイトは責任を負いません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Revision
          </h2>
          <p>
            本ポリシーの内容は、必要に応じて予告なく変更する場合があります。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#161616]/45">
            Contact
          </h2>
          <p>
            個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
          <p>
            <a
              href="mailto:embers@inward.jp"
              className="underline-offset-4 transition-opacity hover:opacity-55"
            >
              embers@inward.jp
            </a>
          </p>
        </section>

        <section className="space-y-2 pt-4 text-[13px] leading-[1.8] text-[#161616]/50">
          <p>制定日：2026年4月7日</p>
          <p>改定日：2026年5月9日</p>
          <p>運営：Rogue Studio</p>
        </section>
      </div>
    </main>
  );
}