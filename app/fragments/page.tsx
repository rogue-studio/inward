import Link from "next/link";
import { fragments } from "@/content/fragments";

export default function FragmentsPage() {
  const sorted = [...fragments].sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#1a1a1a] px-6">
      <div className="mx-auto max-w-[520px] py-40 pl-2">

        {/* Title */}
        <h1 className="mb-20 text-[24px] tracking-[0.3em] opacity-70">
          FRAGMENTS
        </h1>

        {/* List */}
        <ul className="space-y-2">
          {sorted.map((f) => (
            <li key={f.slug}>
              <Link href={`/fragments/${f.slug}`} className="group block">
                
                <p className="
                  text-[16px]
                  leading-[1.7]
                  tracking-[0.04em]
                  font-light
                  opacity-70
                  transition
                  duration-500
                  group-hover:opacity-100
                ">
                  {f.preview}
                </p>

              </Link>
            </li>
          ))}
        </ul>

      </div>
    </main>
  );
}