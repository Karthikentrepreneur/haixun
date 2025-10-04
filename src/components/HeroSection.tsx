import React, { useEffect, useMemo, useRef, useState } from "react";
import { Users, UserCircle, SearchCode, Ship, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  // === Config ===
  const portalLinks = useMemo(
    () => [
      { icon: <Users className="w-5 h-5" />, title: "Consolmate", url: "https://consolmate.com/auth/login/10" },
      { icon: <UserCircle className="w-5 h-5" />, title: "Partner Portal", url: "https://pp.onlinetracking.co/auth/login/10" },
      { icon: <SearchCode className="w-5 h-5" />, title: "Tracking", url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:195" },
      { icon: <Ship className="w-5 h-5" />, title: "Sailing Schedule", url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:195" },
    ],
    []
  );

  // Background assets
  const heroImages = useMemo(() => ["/oceanfreight.png", "/airfreight.png", "/truck.png"], []);
  const videoMp4 = "/hero1.mp4"; // put file in /public
  const videoWebm = "/hero1.webm"; // optional, if you have it
  const videoPoster = "/hero-poster.jpg"; // optional poster frame while loading

  // Slider state (used for fallback images)
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => heroImages.map(() => false));
  const [autoPlay, setAutoPlay] = useState(true);

  // Video state
  const [useVideo, setUseVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Respect reduced motion
  const prefersReducedMotion = useRef<boolean>(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  // Preload fallback images
  useEffect(() => {
    const imgs = heroImages.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        setLoaded((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      return img;
    });
    return () => imgs.forEach((img) => (img.onload = null));
  }, [heroImages]);

  // Fallback image autoplay
  useEffect(() => {
    if (prefersReducedMotion || !autoPlay || useVideo) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [heroImages.length, prefersReducedMotion, autoPlay, useVideo]);

  // Try to play video; fall back to images if blocked
  useEffect(() => {
    if (prefersReducedMotion) {
      setUseVideo(false);
      return;
    }
    const tryPlay = async () => {
      try {
        await videoRef.current?.play();
        setUseVideo(true);
      } catch {
        setUseVideo(false);
      }
    };
    tryPlay();

    // Pause when tab hidden
    const onVis = () => {
      if (!videoRef.current) return;
      if (document.hidden) videoRef.current.pause();
      else videoRef.current.play().catch(() => setUseVideo(false));
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [prefersReducedMotion]);

  const goNext = () => {
    setAutoPlay(false);
    setIndex((p) => (p + 1) % heroImages.length);
  };
  const goPrev = () => {
    setAutoPlay(false);
    setIndex((p) => (p - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* === BACKDROP LAYER === */}
      <div className="absolute inset-0">
        {useVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={videoPoster}
          >
            {/* WebM first if available */}
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
          </video>
        ) : (
          heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Hero background ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== index}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))
        )}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* === LEFT MIDDLE CONTENT === */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 max-w-xl pr-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
          Welcome to <span className="text-white/90">Haixun</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90">
          Haixun Global Co., Ltd. headquartered in Shenzhen, China. Its business scope covers the sea, land and air
          transportation agency business of global LCL, FCL, bulk cargo, etc...
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow/50 shadow-black/40 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            Read More
          </a>
          {/* Optional secondary CTA */}
          {/* <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50">Get a Quote</a> */}
        </div>
      </div>

      {/* Prev / Next arrows (hidden when video is active) */}
      {!useVideo && (
        <>
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="group absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="group absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots (hidden when video is active) */}
      {!useVideo && (
        <div className="absolute bottom-28 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setAutoPlay(false);
                setIndex(i);
              }}
              className={`h-2.5 w-2.5 rounded-full border border-white/60 transition ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Buttons Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
          {portalLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition hover:bg-white/15 hover:border-white/25"
            >
              <span className="rounded-full bg-white/20 p-2">{link.icon}</span>
              <span className="text-sm font-semibold">{link.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Subtle frame */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

      {/* Shimmer while first image loads (fallback only) */}
      {!useVideo && !loaded[0] && <div className="absolute inset-0 z-0 animate-pulse bg-neutral-900" aria-hidden />}
    </section>
  );
};

export default HeroSection;
