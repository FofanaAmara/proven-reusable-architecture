'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Registre', href: '/registre' },
    { name: 'À propos', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-bnc-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Banque Nationale - Registre PRA</span>
            <Image
              src="/logo-bnc.svg"
              alt="Banque Nationale"
              width={155}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-bnc-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-bnc-dark hover:text-bnc-red transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button (optional) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/registre"
            className="rounded-md bg-bnc-red px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#c41419] transition-colors"
          >
            Commencer
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-bnc-dark hover:bg-bnc-gray hover:text-bnc-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/registre"
              className="mt-4 block rounded-md bg-bnc-red px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#c41419] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Commencer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
