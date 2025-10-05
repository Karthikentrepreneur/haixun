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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-14">
          <h2 className="font-bold text-gray-900 text-4xl md:text-5xl mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </ScrollAnimation>

        {/* 3x3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={service.titleKey} delay={index * 50}>
                <Link to={service.link} aria-label={t(service.titleKey)}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-red-600 transition-all duration-300 h-full group cursor-pointer overflow-hidden"
                  >
                    {/* Image with Icon on top-right */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                      
                      {/* Icon Badge (Top Right Corner) */}
                      <div className="absolute top-3 right-3 w-11 h-11 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {t(service.descriptionKey)}
                      </p>
                      <div className="mt-4 text-red-600 font-medium text-sm group-hover:underline">
                        {t("services.readMore")} →
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
