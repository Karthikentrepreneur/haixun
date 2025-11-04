import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Boxes, Building2 } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  image: string;
  slug: string;
}
interface ServiceCardProps extends Service { baseUrl: string; }

const ServiceCard: React.FC<ServiceCardProps> = ({
  title, description, icon: Icon, image, slug, baseUrl
}) => {
  const url = slug === 'services' ? baseUrl : `${baseUrl}/${slug}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group md:flex md:items-stretch"
    >
      <div className="relative w-full md:w-1/2 min-h-[12rem] md:min-h-[16rem]">
        <img src={image} alt={title} loading="lazy"
             className="absolute inset-0 block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gradient-to-br from-gc-light-gold/10 to-gc-gold/5 bg-stone-200">
        <div className="bg-blue-200 text-gc-dark-blue p-2 rounded-full inline-block mb-2 w-fit">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-semibold text-gc-dark-blue mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link to={url} className="text-gc-blue font-medium hover:text-gc-dark-blue inline-flex items-center text-sm transition-colors duration-300">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const location = useLocation();
  const segs = location.pathname.split('/').filter(Boolean);
  const first = segs[0] || ""; const second = segs[1] || "";
  let baseUrl = "/services";
  if (first && first !== "services") baseUrl = `/${first}/services`;
  if (first === "services") baseUrl = "/services";
  if (second === "services") baseUrl = `/${first}/services`;

  const allServices: Service[] = [
    {
      id: 1, title: "LCL",
      description: "Amass Freight, Dubai is one of the leading logistics providers in the region providing Less-Than Container load (LCL) for the ultimate convenience of our customers to help in transporting their products to any location required.",
      icon: Boxes, image: "/lcl1.JPG", slug: "lcl"
    },
    {
      id: 2, title: "CFS",
      description: "Take full advantage of our state-of-the-art CFS, which is equipped with the latest equipment, technology and staffed by experienced professionals at every level. Our warehouses are designed to handle your cargo efficiently across all regions.",
      icon: Building2, image: "/container.jpg", slug: "cfs"
    }
  ];

  const RED = "#BC0018";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-r from-gc-dark-blue via-gc-blue to-gc-dark-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/lovable-uploads/gp.jpg" alt="Services"
                 className="w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-gc-dark-blue/90 to-gc-blue/90" />
          </div>
          <div className="container mx-auto px-4 py-16 relative z-[5]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black mt-7">Our Logistics Services</h1>
              <div className="w-20 h-1 bg-gc-gold mx-auto mb-6"></div>
              <p className="text-xl text-blac leading-relaxed">
                Comprehensive end-to-end global logistics solutions tailored to your business needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES + RED CORNER SHAPES */}
        <section className="relative py-20 bg-gradient-to-b from-white to-gc-light-gold/10 overflow-hidden">
          {/* TOP-LEFT RED TRIANGLE */}
          <div
            className="pointer-events-none absolute z-[1]"
            style={{
              top: -80, left: -80, width: 420, height: 420, background: RED,
              clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)", borderRadius: 16,
              filter: "drop-shadow(0 12px 24px rgba(188,0,24,0.25))"
            }}
          />
          {/* BOTTOM-RIGHT RED BAND/DIAGONAL */}
          <div
            className="pointer-events-none absolute z-[1]"
            style={{
              right: -220, bottom: -180, width: 1200, height: 320, background: RED,
              transform: "rotate(-28deg)", borderRadius: 24,
              filter: "drop-shadow(0 12px 24px rgba(188,0,24,0.28))"
            }}
          />

          {/* CONTENT ABOVE SHAPES */}
          <div className="container mx-auto px-4 relative z-[5]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allServices.map(s => <ServiceCard key={s.id} {...s} baseUrl={baseUrl} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
