import SimplePageLayout from "@/components/SimplePageLayout";

export default function ContactPage() {
  return (
    <SimplePageLayout title="CONTACT">
      <p className="text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        ご感想でも、ご意見でも、ご相談でも。
      </p>

      <p className="text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        お仕事の依頼でも、プロジェクトへの合流希望でも。
      </p>

      <p className="text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        あなたのメッセージを楽しみにしています。
      </p>

      <p className="mt-6 text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        INWARD
      </p>

      <p className="mt-2 text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-80">
        embers@inward.jp
      </p>
    </SimplePageLayout>
  );
}