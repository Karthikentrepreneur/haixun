import { motion } from "framer-motion";
import {
  PiggyBank,
  Heart,
  Target,
  Settings,
  Users,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

type Advantage = {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
};

export default function AdvantagesSection() {
  const { t } = useTranslation();

  const advantages: Advantage[] = [
    { icon: PiggyBank, titleKey: "advantages.savetime.title",    descriptionKey: "advantages.savetime.description" },
    { icon: Heart,     titleKey: "advantages.health.title",      descriptionKey: "advantages.health.description" },
    { icon: Target,    titleKey: "advantages.focus.title",       descriptionKey: "advantages.focus.description" },
    { icon: Settings,  titleKey: "advantages.productivity.title",descriptionKey: "advantages.productivity.description" },
    { icon: Users,     titleKey: "advantages.stressfree.title",  descriptionKey: "advantages.stressfree.description" },
    { icon: Truck,     titleKey: "advantages.balance.title",     descriptionKey: "advantages.balance.description" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-3">
            {t("advantages.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </ScrollAnimation>

        {/* Cards (3x2 like screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <ScrollAnimation key={adv.titleKey} delay={i * 80}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center p-8"
                >
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Icon className="w-8 h-8 text-red-500" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {t(adv.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(adv.descriptionKey)}
                  </p>
                </motion.article>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            type="button"
            className="px-8 py-3 rounded-full border border-red-500 text-red-600 font-medium hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            {t("advantages.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
