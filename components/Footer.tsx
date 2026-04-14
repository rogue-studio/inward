import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#161616]/10 px-6 py-10">
      <div className="mx-auto max-w-3xl text-center text-[12px] leading-6 tracking-[0.04em] text-[#161616]/55">

        <div className="mb-3">
          © INWARD 2026
          <br />
          A work by Rogue Studio
        </div>

        <div>
          <Link
            href="/privacy"
            className="transition duration-500 hover:text-[#161616]/80"
          >
            Privacy
          </Link>
        </div>

      </div>
    </footer>
  );
}