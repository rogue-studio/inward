import SimplePageLayout from "@/components/SimplePageLayout";

export const metadata = {
  title: "CONTACT | INWARD",
  description:
    "Contact INWARD for impressions, inquiries, editorial work, collaborations, and project requests.",
};

export default function ContactPage() {
  return (
    <SimplePageLayout title="CONTACT">
      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        A place for thoughts, requests, and quiet connections.
      </p>

      <div className="space-y-4 text-[14px] font-light leading-[1.6] tracking-[0.05em] text-[#161616]/70">
        <p>ご感想でも、ご意見でも、ご相談でも。</p>

        <p>お仕事の依頼でも、プロジェクトへの合流希望でも。</p>

        <p>
          INWARDでは、感想も、相談も、小さなきっかけも歓迎しています。
          <br />
          どうぞ気軽にご連絡ください。
        </p>
      </div>

      <div className="mt-10 space-y-3 text-[14px] font-light leading-[1.6] tracking-[0.05em] text-[#161616]/70">
        <p className="text-[12px] uppercase tracking-[0.18em] text-[#161616]/45">
          Mail
        </p>

        <a
          href="mailto:embers@inward.jp"
          className="inline-block text-[#161616]/80 underline-offset-4 transition-opacity hover:opacity-55"
        >
          embers@inward.jp
        </a>
      </div>

      <div className="mt-10 space-y-3 text-[14px] font-light leading-[1.8] tracking-[0.05em] text-[#161616]/68">
        <p className="text-[12px] uppercase tracking-[0.18em] text-[#161616]/45">
          For
        </p>

        <div className="space-y-1">
          <p>・ご意見、ご感想</p>
          <p>・取材、掲載、撮影に関するご相談</p>
          <p>・編集・制作、Web、ブランド設計に関するご依頼</p>
          <p>・プロジェクトへの参画、コラボレーションに関するご相談</p>
        </div>
      </div>

      <div className="mt-12 space-y-2 text-[13px] font-light leading-[1.7] tracking-[0.05em] text-[#161616]/52">
        <p>Operated by Rogue Studio / INWARD.</p>
        <p>通常、数日以内を目安に返信します。</p>
      </div>
    </SimplePageLayout>
  );
}