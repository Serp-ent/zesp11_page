'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const links = [
  { url: "/posty", label: "Posty" },
  { url: "/harmonogram", label: "Harmonogram" },
  { url: "/czlonkowie", label: "Czlonkowie" },
  { url: "/opis", label: "Opis Projektu" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
        // setIsMenuOpen(false);  // optional?
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if ((navRef.current && !navRef.current.contains(event.target as Node))
        && (buttonRef.current && !buttonRef.current.contains(event.target as Node))) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [lastScrollY]);

  return (
    <header className={`bg-background shadow flex justify-between items-center p-1 sm:p-4 w-screen transform transition-transform duration-200 fixed ${isHeaderVisible ? "translate-y-0" : '-translate-y-full'}`}>
      <Link
        className="p-1 flex gap-1"
        href={"/"}
      >
        <div className="aspect-square h-6 bg-foreground rotate-[15deg]"></div>
        <div className="text-xl font-bold text-gray-800 ml-2 hidden sm:block">Project Name</div>
      </Link>

      {/* Mobile menu */}
      <div className="md:hidden">
        <section className="relative flex items-center">
          <button
            className="pr-2"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            ref={buttonRef}
          >
            <AiOutlineMenu size={24} color="black" />
          </button>

        </section>


        <section className={`
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
           transition-transform absolute top-full w-52 sm:w-72 right-0 h-screen text-sm p-2 bg-white border border-gray-200 shadow-lg
           `}
          ref={navRef}
        >
          <nav className="flex flex-col gap-2">
            {links.map((l, i) => (
              <Link
                href={l.url}
                key={i}
                className={`
              font-semibold text-center border-gray-100 border-b px-3 py-1 my-1 rounded text-gray-800 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-150
              ${pathname === l.url ? 'bg-black text-white' : ''}
              `}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex mr-4 gap-6">
        {links.map((l, i) => (
          <Link
            href={l.url}
            key={i}
            className={`font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors duration-150 ${pathname === l.url ? "border-b-2 border-black" : ""
              }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
