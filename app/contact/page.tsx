import SimplePageLayout from "@/components/SimplePageLayout";

export default function ContactPage() {
  return (
    <SimplePageLayout title="CONTACT">
      <p className="text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        感想を話すこと。
      </p>

      <p className="text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        リクエストをすること。
      </p>

      <p className="text-[14px] leading-[1.6] tracking-[0.05em] font-light opacity-70">
        出会うこと、繋がること。
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