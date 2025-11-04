import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Ship,
  Boxes,
  Warehouse as WarehouseIcon,
  Package,
  Plane,
  FileCheck,
  ArrowDownToLine,
  Container,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

type Service = {
  icon: LucideIcon;
  image: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
};

export default function HaixunServicesSection() {
  const { t } = useTranslation();

  const services: Service[] = [
    { icon: Boxes, image: "/lcl.png", titleKey: "services.lcl.title", descriptionKey: "services.lcl.description", link: "/services/lcl" },
    { icon: Ship, image: "/fcl.png", titleKey: "services.fcl.title", descriptionKey: "services.fcl.description", link: "/services/fcl" },
    { icon: WarehouseIcon, image: "/warehouse.png", titleKey: "services.warehouse.title", descriptionKey: "services.warehouse.description", link: "/services/warehouse" },
    { icon: Package, image: "/projectlogistics.png", titleKey: "services.project.title", descriptionKey: "services.project.description", link: "/services/project-logistics" },
    { icon: Plane, image: "/airfreight.png", titleKey: "services.air.title", descriptionKey: "services.air.description", link: "/services/air" },
    { icon: FileCheck, image: "/customclearance.png", titleKey: "services.customs.title", descriptionKey: "services.customs.description", link: "/services/customs" },
    { icon: ArrowDownToLine, image: "/Aircargo.png", titleKey: "services.import.title", descriptionKey: "services.import.description", link: "/services/import" },
    { icon: Boxes, image: "/lclconsoldation.png", titleKey: "services.consolidation.title", descriptionKey: "services.consolidation.description", link: "/services/lcl-consolidation" },
    { icon: Container, image: "/oog.png", titleKey: "services.oog.title", descriptionKey: "services.oog.description", link: "/services/oog" },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden min-h-screen"
      style={{
        background:
          "linear-gradient(to top, #9B111E 0%, #B24049 30%, #D58A8A 65%, #F2E6E6 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-14">
          <h2 className="font-extrabold text-gray-900 text-4xl md:text-5xl mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </ScrollAnimation>

        {/* 3x3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={service.titleKey} delay={index * 60}>
                <Link to={service.link} aria-label={t(service.titleKey)}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 16px 30px rgba(0,0,0,0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#9B111E] transition-all duration-300 h-full group cursor-pointer overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />

                      {/* Icon Badge */}
                      <div className="absolute top-3 right-3 w-11 h-11 bg-[#9B111E] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#9B111E] transition-colors">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {t(service.descriptionKey)}
                      </p>
                      <div className="mt-4 text-[#9B111E] font-medium text-sm group-hover:underline">
                        {t('services.readMore')} →
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
