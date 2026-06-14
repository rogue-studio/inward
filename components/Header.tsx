"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#f5f1ea]/90 backdrop-blur">
      <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-6">
        {/* PC navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 text-[12px] uppercase tracking-[0.28em] text-[#161616]/55">
            <li>
              <Link href="/" className="transition hover:text-[#161616]/85">
                Top
              </Link>
            </li>

            <li>
              <Link href="/about" className="transition hover:text-[#161616]/85">
                About
              </Link>
            </li>

            <li>
              <Link href="/fragments" className="transition hover:text-[#161616]/85">
                Fragments
              </Link>
            </li>

            <li>
              <Link href="/scene" className="transition hover:text-[#161616]/85">
                Scene
              </Link>
            </li>

            <li>
              <Link href="/soundscape" className="transition hover:text-[#161616]/85">
                Soundscape
              </Link>
            </li>

            <li>
              <Link href="/human" className="transition hover:text-[#161616]/85">
                Human
              </Link>
            </li>

            <li>
              <Link href="/log" className="transition hover:text-[#161616]/85">
                Log
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-[#161616]/85">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile trigger */}
        <div className="flex justify-start md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[14px] uppercase tracking-[0.28em] text-[#161616]/55 transition duration-500 hover:text-[#161616]/85"
          >
            INDEX
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="mt-5 border-t border-[#161616]/10 pt-5 md:hidden">
            <ul className="flex flex-col items-start gap-4 text-[12px] uppercase tracking-[0.24em] text-[#161616]/65">
              <li>
                <Link href="/" onClick={closeMenu}>
                  Top
                </Link>
              </li>

              <li>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>

              <li>
                <Link href="/fragments" onClick={closeMenu}>
                  Fragments
                </Link>
              </li>

              <li>
                <Link href="/scene" onClick={closeMenu}>
                  Scene
                </Link>
              </li>

              <li>
                <Link href="/soundscape" onClick={closeMenu}>
                  Soundscape
                </Link>
              </li>

              <li>
                <Link href="/human" onClick={closeMenu}>
                  Human
                </Link>
              </li>

              <li>
                <Link href="/log" onClick={closeMenu}>
                  Log
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}