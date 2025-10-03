import React, { useEffect, useState } from "react";
import { Users, UserCircle, SearchCode, Ship } from "lucide-react";

const HeroSection: React.FC = () => {
  const portalLinks = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Consolmate",
      url: "https://consolmate.com/auth/login/10",
    },
    {
      icon: <UserCircle className="w-5 h-5" />,
      title: "Partner Portal",
      url: "https://pp.onlinetracking.co/auth/login/10",
    },
    {
      icon: <SearchCode className="w-5 h-5" />,
      title: "Tracking",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:195",
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "Sailing Schedule",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:195",
    },
  ];

  const heroImages = ["/oceanfreight.png", "/airfreight.png", "/truck.png"];
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Images */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`hero-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay gradient (for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Buttons Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 px-4">
          {portalLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md px-4 py-3 text-white hover:bg-black/60 transition"
            >
              <span className="p-2 rounded-full bg-white/20">{link.icon}</span>
              <span className="text-sm font-semibold">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
