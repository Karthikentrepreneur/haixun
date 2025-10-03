import React, { useEffect, useMemo, useRef, useState } from "react";
import { Users, UserCircle, SearchCode, Ship } from "lucide-react";

const SLIDE_MS = 5000;          // auto-advance every 5s
const FADE_MS = 900;            // fade duration

const HeroSection: React.FC = () => {
  const portalLinks = useMemo(() => ([
    { icon: <Users className="w-5 h-5" />, title: "Consolmate",      url: "https://consolmate.com/auth/login/10" },
    { icon: <UserCircle className="w-5 h-5" />, title: "Partner Portal", url: "https://pp.onlinetracking.co/auth/login/10" },
    { icon: <SearchCode className="w-5 h-5" />, title: "Tracking",   url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:195" },
    { icon: <Ship className="w-5 h-5" />, title: "Sailing Schedule", url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:195" },
  ]), []);

  // Use high-quality, wide images (placed in /public).
  const heroImages = useMemo(() => ([
    "/oceanfreight.png",
    "/airfreight.png",
    "/truck.png",
  ]), []);

  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [heroImages.length]);

  const goTo = (i: number) => setIndex((i + heroImages.length) % heroImages.length);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Height tuned for hero: fill viewport but leave a little space under header */}
      <div className="relative h-[76vh] md:h-[86vh]">

        {/* Slides (full-bleed) */}
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`hero-${i}`}
              className={[
                "absolute inset-0 w-full h-full object-cover", // full-bleed, no side bars
                "transition-opacity ease-in-out",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{ transitionDuration: `${FADE_MS}ms` }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          ))}
        </div>

        {/* Subtle top/bottom gradients for readability */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Dots (indicators) */}
        <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                i === index ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/80",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Buttons Bar – glassy, centered, responsive */}
        <div className="absolute bottom-6 left-0 right-0 z-30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {portalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-white/15 active:scale-[0.98] transition"
                >
                  <span className="grid place-items-center size-8 rounded-full bg-white/20">{link.icon}</span>
                  <span className="text-sm font-semibold">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Optional left/right arrows (desktop) */}
        <button
          onClick={() => goTo(index - 1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/45 text-white"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => goTo(index + 1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/45 text-white"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
