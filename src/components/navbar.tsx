"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="w-full bg-white border-t-[3px] fixed border-[#374151] border-b border-[#e5e7eb] top-0 left-0 right-0 z-50">
        <div className="container sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. LOGO */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 rounded"
            >
              <Image
                src="/images/pratiksha-logo.webp"
                alt="Pratiksha Earthing Solutions"
                width={180}
                height={93}
                priority
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-[15px] font-medium transition-colors ${
                    active
                      ? "text-[var(--primary-color)]"
                      : "text-[#4b5457] hover:text-[var(--primary-color)]"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary-color)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. DESKTOP GET A QUOTE BUTTON */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[var(--primary-color)]  rounded-[7px] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
            >
              Get a Quote
            </Link>
          </div>

          {/* 4. MOBILE HAMBURGER BUTTON */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-gray-700 hover:text-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] rounded-md transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    active
                      ? "text-[var(--primary-color)] bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] font-semibold border-l-4 border-[var(--primary-color)]"
                      : "text-gray-700 hover:text-[var(--primary-color)] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-white bg-[var(--primary-color)] hover:bg-[#065e6f] rounded-[7px] transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
      {/* Fixed navbar height placeholder: reserves 80px space in document flow so sections start below */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
