"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const links = [
  { label: "Features", href: "#Features" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "FAQ", href: "#FAQ" },
];

const Header = () => {
  const params = useParams();
  const lang = params.lang;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background shadow-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex justify-between items-center">
        {/* Left section - NolanDex */}
        <div className="flex items-center">
          <Link href="/" aria-label="NolanDex" title="NolanDex" className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-gray-300 font-poppins">
              NolanDex
            </span>
          </Link>
        </div>

        {/* Center section - Navigation (Desktop) */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${lang === "en" ? "" : lang}${link.href}`}
                aria-label={link.label}
                title={link.label}
                className="tracking-wide transition-colors duration-200 font-normal text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section - Desktop (HeaderLinks + ThemedButton) */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <HeaderLinks />
          <ThemedButton />
        </div>

        {/* Right section - Mobile (ThemedButton + Hamburger) */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemedButton />
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="text-gray-900 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-50 md:hidden">
            <div className="p-5 bg-white dark:bg-gray-900 border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    href="/"
                    aria-label="NolanDex"
                    title="NolanDex"
                    className="inline-flex items-center"
                  >
                    <span className="text-xl font-bold tracking-wide text-gray-900 dark:text-gray-300 font-poppins">
                      NolanDex
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CgClose className="text-gray-900 dark:text-gray-300" />
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        aria-label={link.label}
                        title={link.label}
                        className="font-medium tracking-wide transition-colors duration-200 text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="pt-4">
                <div className="flex items-center gap-x-5 justify-between">
                  <HeaderLinks />
                  <div className="flex items-center justify-end gap-x-5">
                    <ThemedButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
