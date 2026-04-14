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
              <Link
                href="/"
                className="transition duration-500 hover:text-[#161616]/85"
              >
                Top
              </Link>
            </li>
            <li>
              <Link
                href="/fragments"
                className="transition duration-500 hover:text-[#161616]/85"
              >
                Fragments
              </Link>
            </li>
            <li>
              <Link
                href="/human"
                className="transition duration-500 hover:text-[#161616]/85"
              >
                Human
              </Link>
            </li>
            <li>
              <Link
                href="/log"
                className="transition duration-500 hover:text-[#161616]/85"
              >
                Log
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition duration-500 hover:text-[#161616]/85"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition duration-500 hover:text-[#161616]/85"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile trigger */}
        <div className="flex justify-end md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="text-[11px] uppercase tracking-[0.28em] text-[#161616]/55 transition duration-500 hover:text-[#161616]/85"
          >
            INDEX
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            className="mt-5 border-t border-[#161616]/10 pt-5 md:hidden"
          >
            <ul className="flex flex-col items-end gap-4 text-[12px] uppercase tracking-[0.24em] text-[#161616]/65">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="transition duration-500 hover:text-[#161616]/85"
                >
                  Top
                </Link>
              </li>
              <li>
                <Link
                  href="/fragments"
                  onClick={closeMenu}
                  className="transition duration-500 hover:text-[#161616]/85"
                >
                  Fragments
                </Link>
              </li>
              <li>
                <Link
                  href="/human"
                  onClick={closeMenu}
                  className="transition duration-500 hover:text-[#161616]/85"
                >
                  Human
                </Link>
              </li>
              <li>
                <Link
                  href="/log"
                  onClick={closeMenu}
                  className="transition duration-500 hover:text-[#161616]/85"
                >
                  Log
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="transition duration-500 hover:text-[#161616]/85"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="transition duration-500 hover:text-[#161616]/85"
                >
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