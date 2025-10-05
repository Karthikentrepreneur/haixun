import { motion } from "framer-motion";
import { Truck, Settings, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";
export default function AdvantagesSection() {
  const {
    t
  } = useTranslation();
  const advantages = [{
    icon: Truck,
    titleKey: "advantages.transportation.title",
    descriptionKey: "advantages.transportation.description"
  }, {
    icon: Settings,
    titleKey: "advantages.logistics.title",
    descriptionKey: "advantages.logistics.description"
  }, {
    icon: Users,
    titleKey: "advantages.team.title",
    descriptionKey: "advantages.team.description"
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-3">
            {t("advantages.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </ScrollAnimation>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          return <ScrollAnimation key={index} delay={index * 100}>
                <motion.div whileHover={{
              y: -8,
              scale: 1.02
            }} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-8 w-full max-w-[380px] text-center bg-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    {t(advantage.titleKey)}
                  </h3>
                  <p className="leading-relaxed text-sm text-slate-950">
                    {t(advantage.descriptionKey)}
                  </p>
                </motion.div>
              </ScrollAnimation>;
        })}
        </div>

        {/* CTA Button */}
        
      </div>
    </section>;
}