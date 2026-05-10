'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-bg-primary border-b border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:fixed lg:top-0">
      <div className="bg-linear-to-r from-[#3c113b] via-[#6b2e6b] to-[#3c113b] text-white">
        <div className="container py-1.5 text-center text-[0.78rem] md:text-[0.86rem]">
          <Link href="/contact" className="inline-block text-white/90 hover:text-white underline-offset-4 hover:underline">
            Finance options available with authorised UK partners
          </Link>
        </div>
      </div>

      <div className="container mx-auto py-1.5 lg:py-2 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-3 lg:gap-0">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border transition-colors border-black/10 text-text-primary"
        >
          <span className="text-xl leading-none">{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>

        {/* Left nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 justify-start">
          <Link href="#expertise" className="nav-link text-[0.84rem] tracking-[0.02em] font-light transition-colors duration-300 hover:text-accent text-text-secondary">About</Link>
          <Link href="/services.html" className="nav-link text-[0.84rem] tracking-[0.02em] font-light transition-colors duration-300 hover:text-accent text-text-secondary">Services</Link>
          <div className="relative inline-block pb-4 -mb-4 group">
            <Link href="#products" className="nav-link text-[0.84rem] tracking-[0.02em] font-light transition-colors duration-300 hover:text-accent text-text-secondary">Products ▾</Link>
            <div className="absolute top-full left-0 bg-bg-primary shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded p-4 flex flex-col gap-4 min-w-[220px] opacity-0 invisible translate-y-[10px] transition-all duration-300 z-10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <Link href="/products/retractable-roofs" className="text-text-primary text-[0.9rem] font-normal whitespace-nowrap transition-colors duration-300 hover:text-accent">Retractable Roofs</Link>
              <Link href="/products/bioclimatic-louvres" className="text-text-primary text-[0.9rem] font-normal whitespace-nowrap transition-colors duration-300 hover:text-accent">Bioclimatic Louvres</Link>
              <Link href="/products/awnings" className="text-text-primary text-[0.9rem] font-normal whitespace-nowrap transition-colors duration-300 hover:text-accent">Awnings</Link>
              <Link href="/products/glass-rooms" className="text-text-primary text-[0.9rem] font-normal whitespace-nowrap transition-colors duration-300 hover:text-accent">Glass Rooms</Link>
            </div>
          </div>
          <Link href="/projects" className="nav-link text-[0.84rem] tracking-[0.02em] font-light transition-colors duration-300 hover:text-accent text-text-secondary">Projects</Link>
        </nav>

        {/* Centre logo: actual pixel size changes so the header height changes too */}
        <Link href="/" className="flex justify-center lg:justify-center items-center transition-all duration-300">
          <Image
            src="/images/smart_awnings_and_canopies_logo-1-1.png"
            alt="Smart Awnings & Canopies"
            width={108}
            height={40}
            style={{ objectFit: 'contain' }}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center justify-end gap-6">
          <Link href="/contact" className="btn px-6 py-3 text-xs font-medium tracking-wider">Request a Quote</Link>
        </div>

        <Link
          href="tel:07971917201"
          aria-label="Call 07971 917201"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-accent/25 bg-accent/15 text-accent"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.99a16 16 0 0 0 6 6l1.53-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
          </svg>
        </Link>

      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-black/10 bg-bg-primary">
          <nav className="container py-3 flex flex-col gap-2.5">
            <Link href="#expertise" className="text-text-secondary py-0.5 text-[0.95rem]" onClick={closeMobileMenu}>About</Link>
            <Link href="/services.html" className="text-text-secondary py-0.5 text-[0.95rem]" onClick={closeMobileMenu}>Services</Link>
            <button
              type="button"
              className="text-left text-text-secondary py-0.5 text-[0.95rem] flex items-center justify-between"
              onClick={() => setIsMobileProductsOpen((prev) => !prev)}
              aria-expanded={isMobileProductsOpen}
            >
              <span>Products</span>
              <span>{isMobileProductsOpen ? '▴' : '▾'}</span>
            </button>
            {isMobileProductsOpen && (
              <div className="pl-3 pb-1 flex flex-col gap-2">
                <Link href="/products/retractable-roofs" className="text-[0.88rem] text-text-secondary" onClick={closeMobileMenu}>Retractable Roofs</Link>
                <Link href="/products/bioclimatic-louvres" className="text-[0.88rem] text-text-secondary" onClick={closeMobileMenu}>Bioclimatic Louvres</Link>
                <Link href="/products/awnings" className="text-[0.88rem] text-text-secondary" onClick={closeMobileMenu}>Awnings</Link>
                <Link href="/products/glass-rooms" className="text-[0.88rem] text-text-secondary" onClick={closeMobileMenu}>Glass Rooms</Link>
              </div>
            )}
            <Link href="/projects" className="text-text-secondary py-0.5 text-[0.95rem]" onClick={closeMobileMenu}>Projects</Link>
            <Link href="/contact" className="btn w-full text-center mt-1" onClick={closeMobileMenu}>Request a Quote</Link>
            <Link href="#survey" className="btn w-full text-center" style={{ backgroundColor: '#ffffff', color: '#280028' }} onClick={closeMobileMenu}>Book a Site Survey</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
