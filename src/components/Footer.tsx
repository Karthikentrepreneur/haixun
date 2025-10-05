import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

type Office = {
  name: string;
  address: string;
  phone?: string;
  fax?: string;
  email?: string;
  map?: string;
  country?: string;
};

const Footer = () => {
  const location = useLocation();

  // --- data (unchanged) ---
  const keyAddresses: { country: string; offices: Office[] }[] = [
    {
      country: "China",
      offices: [
        {
          name: "Shenzhen Office",
          address: "13C02, Block A,\nZhaoxin Huijin Plaza 3085 Shennan East Road,\nLuohu, Shenzhen.",
          phone: "+86 75582222447",
          fax: "+86 75582192854",
          email: "helen@haixun.co",
          map: "",
        },
      ],
    },
  ];
  // ------------------------

  const getCurrentCountry = () => "China";

  // Build prioritized list (current country first, then the rest)
  const offices = useMemo(() => {
    const all = keyAddresses.flatMap((c) =>
      c.offices.map((o) => ({ ...o, country: c.country }))
    );
    const current = getCurrentCountry();
    return [...all.filter(o => o.country === current), ...all.filter(o => o.country !== current)];
  }, [location.pathname]);

  // One-by-one vertical slider
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const dirRef = useRef<1 | -1>(1); // (kept if you later want bi-direction)

  const intervalMs = 4000;
  const slideMs = 450;

  useEffect(() => {
    setIdx(0); // reset on route change
  }, [location.pathname]);

  useEffect(() => {
    if (paused || offices.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % offices.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [paused, offices.length]);

  const current = offices[idx];

  const footerAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="pt-16 pb-8 text-white bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-gc-gold via-gc-light-gold to-gc-gold rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1: Logo & About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnim}
            className="flex flex-col items-start"
          >
            <div className="mb-4">
              <img
                src="/haixun-logo.svg"
                alt="Haixun Global"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-50">
              Haixun Global Co., Ltd
            </h3>
            <p className="text-sm md:text-base max-w-xs text-left leading-relaxed mb-4 text-slate-50">
              Leveraging over 30 years of expertise in logistics, including sea, land, air transportation, customs declaration, warehousing, and distribution.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnim}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end lg:items-start lg:pl-10"
          >
            <h3 className="font-bold text-xl text-gc-gold mb-4">Useful Links</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Services", path: "/services" },
                { name: "About Us", path: "/about-us" },
                { name: "News", path: "/blog" },
                { name: "Advantage", path: "/advantages" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white/90 hover:text-black transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-gc-gold" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Contact (vertical slider) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnim}
            transition={{ delay: 0.4 }}
            className="lg:pl-10"
          >
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="font-bold text-xl text-gc-gold">Contact Us</h3>
              <button
                onClick={() => setIdx((i) => (i + 1) % offices.length)}
                onMouseDown={() => setPaused(true)}
                onMouseUp={() => setPaused(false)}
                className="bg-gc-gold text-gc-dark-blue p-1.5 rounded-full hover:bg-gc-light-gold transition-colors"
                title="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Viewport */}
            <div
              className="relative h-[168px] overflow-hidden" // ~fits 1 card height; tweak as needed
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: slideMs / 1000, ease: "easeOut" }}
                  className="space-y-3"
                >
                  <p className="font-semibold text-gc-gold">
                    {current.name} • {current.country}
                  </p>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-gc-gold mt-1 flex-shrink-0" />
                    <p className="whitespace-pre-line text-sm leading-relaxed text-slate-50">
                      {current.address}
                    </p>
                  </div>

                  {current.phone && (
                    <div className="flex items-center gap-2 text-slate-50 text-sm">
                      <Phone size={16} className="text-gc-gold flex-shrink-0" />
                      <span>{current.phone}</span>
                    </div>
                  )}
                  {current.fax && (
                    <div className="flex items-center gap-2 text-slate-50 text-sm">
                      <Phone size={16} className="text-gc-gold flex-shrink-0" />
                      <span>Fax: {current.fax}</span>
                    </div>
                  )}
                  {current.email && (
                    <div className="flex items-center gap-2 text-slate-50 text-sm">
                      <Mail size={16} className="text-gc-gold flex-shrink-0" />
                      <span>{current.email}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-start mt-4 space-x-2">
              {offices.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === idx ? "bg-gc-gold" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to office ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-white/70 mt-12 pt-8 border-t border-gc-gold/20 text-sm">
          &copy; {new Date().getFullYear()} Haixun Global Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
