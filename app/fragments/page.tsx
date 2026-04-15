import Link from "next/link";
import SimplePageLayout from "@/components/SimplePageLayout";
import { fragments } from "@/content/fragments";

export default function FragmentsPage() {
  const sorted = [...fragments].sort((a, b) => a.order - b.order);

  return (
    <SimplePageLayout title="FRAGMENTS">
      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Fragments shaped by silence, trace, and distance.
      </p>

      <ul className="space-y-2">
        {sorted.map((fragment) => (
          <li key={fragment.slug}>
            <Link
              href={`/fragments/${fragment.slug}`}
              className="group block"
            >
              <p
                className="
                  text-[16px]
                  leading-[1.7]
                  tracking-[0.04em]
                  font-light
                  opacity-70
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              >
                {fragment.preview}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </SimplePageLayout>
  );
}