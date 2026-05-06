'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/images/outdoor-space-home.jpg',
    alt: 'Luxury outdoor space with premium shelter',
    eyebrow: 'Premium Shading & Shelter',
    title: 'Timeless Elegance For Your Outdoor Space',
    description: 'Bespoke systems designed, surveyed and installed for homes and hospitality venues across the UK.',
    primaryCta: { href: '#quote', label: 'Request a Quote' },
    secondaryCta: { href: '#survey', label: 'Book a Site Survey' },
  },
  {
    image: '/images/retractable-roof-2 (1).jpg',
    alt: 'Retractable roof installation in modern outdoor area',
    eyebrow: 'Retractable Roof Systems',
    title: 'Flexible cover with a premium finish',
    description: 'Open for light and air, close for dependable weather protection with elegant integrated design.',
    primaryCta: { href: '#products', label: 'Explore Products' },
    secondaryCta: { href: '#quote', label: 'Discuss Your Project' },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center h-[70vh] min-h-[420px] md:h-[80vh] md:min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-overlay absolute inset-0 z-1 transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="hero-image"
          />
        </div>
      ))}

      <div className="container relative z-3 text-white max-w-[1000px] pt-24 md:pt-16 mx-auto text-center flex flex-col items-center">
        <p className="font-body text-base md:text-[1.125rem] tracking-[0.12em] md:tracking-[0.15em] uppercase mb-4 md:mb-6 text-[#e0d0df] fade-in delay-1">
          {slides[active].eyebrow}
        </p>

        {active === 0 ? (
          <h1 className="text-[clamp(2.75rem,6.8vw,5rem)] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 text-white fade-in delay-2">
            {slides[0].title}
          </h1>
        ) : (
          <h2 className="text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 text-white fade-in delay-2">
            {slides[active].title}
          </h2>
        )}

        <p className="max-w-[720px] mb-6 md:mb-8 text-white/85 fade-in delay-2">
          {slides[active].description}
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 mt-2 justify-center fade-in delay-3">
          <Link href={slides[active].primaryCta.href} className="btn text-center">
            {slides[active].primaryCta.label}
          </Link>
          <Link
            href={slides[active].secondaryCta.href}
            className="btn text-center"
            style={{ backgroundColor: '#ffffff', color: '#280028' }}
          >
            {slides[active].secondaryCta.label}
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-2" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${active === index ? 'w-7 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'}`}
              aria-label={`Show slide ${index + 1}`}
              aria-current={active === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
