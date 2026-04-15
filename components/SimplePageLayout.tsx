type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SimplePageLayout({ title, children }: Props) {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#1a1a1a] px-6">
      <div className="mx-auto max-w-[520px] py-40 pl-2">
        <h1 className="mb-4 text-[24px] tracking-[0.3em] opacity-70">
          {title}
        </h1>

        <div>{children}</div>
      </div>
    </main>
  );
}