import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Image Composition */}
        <div className="relative flex justify-center">
          {/* Background red frame */}
          <div className="absolute -top-8 -left-8 w-[85%] h-[85%] border-[20px] border-[#BC0018] rounded-lg -z-10" />

          <div className="grid grid-cols-2 gap-4 relative">
            <img
              src="/containers.jpg"
              alt="Containers"
              className="rounded-lg shadow-lg object-cover w-full h-[320px]"
            />
            <img
              src="/workers.jpg"
              alt="Workers"
              className="rounded-lg shadow-lg object-cover w-full h-[320px] mt-8"
            />
          </div>

          {/* Award badge */}
          <div className="absolute -bottom-8 left-10 bg-[#BC0018] text-white rounded-full p-8 shadow-xl border-4 border-white">
            <div className="text-center text-sm font-semibold leading-tight">
              <p>Since 2010</p>
              <p className="text-xs opacity-80">Award Winning Company</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div>
          <h5 className="text-[#BC0018] font-semibold tracking-wide uppercase mb-3 flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#BC0018]" /> About Company
          </h5>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The Best Transport & Logistic Company
          </h2>
          <p className="mt-4 text-gray-700">
            Haixun Global Co., Ltd. is a professional logistics company providing
            integrated solutions for sea, land, and air freight across global
            trade routes. Our commitment to reliability and innovation ensures
            safe, efficient, and on-time delivery.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Globe2 className="w-8 h-8 text-[#BC0018]" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Fast Worldwide Delivery
                </h4>
                <p className="text-gray-700 text-sm">
                  Our vast network ensures your cargo reaches destinations on
                  schedule, every time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#BC0018]" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Safe And Secure Delivery
                </h4>
                <p className="text-gray-700 text-sm">
                  From pickup to final drop-off, we maintain strict safety and
                  compliance standards.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button & Contact */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <Link to="/contact">
              <Button
                className="bg-[#BC0018] hover:bg-[#a00015] text-white text-base font-semibold px-6 py-3 rounded-md shadow-lg transition"
              >
                Know More About Us
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <img
                src="/support-person.jpg"
                alt="Support"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#BC0018]"
              />
              <div>
                <p className="text-sm text-gray-600">Need Help?</p>
                <p className="text-lg font-bold text-gray-900">
                  +00 264 566 579
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
