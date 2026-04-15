type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SimplePageLayout({ title, children }: Props) {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#1a1a1a] px-6">
      <div className="mx-auto max-w-[520px] pb-20 pt-28">
        <h1 className="mb-4 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
          {title}
        </h1>

        <div>{children}</div>
      </div>
    </main>
  );
}