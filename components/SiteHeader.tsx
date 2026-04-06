import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1000px] px-6 py-5 md:px-8">
        <nav aria-label="Global Navigation">
          <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <Link
                href="/"
                className="text-[0.68rem] tracking-[0.24em] uppercase text-neutral-600 transition-opacity duration-300 hover:opacity-50"
              >
                Top
              </Link>
            </li>
            <li>
              <Link
                href="/fragments"
                className="text-[0.68rem] tracking-[0.24em] uppercase text-neutral-600 transition-opacity duration-300 hover:opacity-50"
              >
                Fragments
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[0.68rem] tracking-[0.24em] uppercase text-neutral-600 transition-opacity duration-300 hover:opacity-50"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[0.68rem] tracking-[0.24em] uppercase text-neutral-600 transition-opacity duration-300 hover:opacity-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}