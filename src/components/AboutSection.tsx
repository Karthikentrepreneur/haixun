import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe2, ShieldCheck } from "lucide-react";

/**
 * AboutSection
 * - Left: two stacked images with an offset, red L-frame block behind, circular badge
 * - Right: heading, paragraph, two feature rows, CTA + contact
 * 
 * Replace the image src paths below with your actual assets.
 */
const AboutSection: React.FC = () => {
  const ACCENT = "#BC0018"; // Haixun red

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Image Composition */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Red L-frame block (behind images) */}
          <div
            className="absolute -top-8 -left-8 rounded-lg -z-10"
            style={{
              width: "82%",
              height: "82%",
              borderTopLeftRadius: "0.75rem",
              borderWidth: "20px",
              borderStyle: "solid",
              borderColor: ACCENT,
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />

          {/* Two images with offset like the reference */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left / main image */}
            <img
              src="/about-v3-img1.jpg"          // <-- change to your image
              alt="Container stacks"
              className="rounded-lg shadow-xl object-cover w-full h-[340px] md:h-[380px] lg:h-[420px]"
            />
            {/* Right / secondary image slightly lower */}
            <img
              src="/truck1.png"             // <-- change to your image
              alt="Crew at work"
              className="rounded-lg shadow-xl object-cover w-full h-[340px] md:h-[380px] lg:h-[420px] mt-10"
            />
          </div>

          {/* Circular award badge overlapping the images */}
          <div className="absolute -bottom-8 left-10">
            <div
              className="relative rounded-full border-4 border-white shadow-2xl"
              style={{ backgroundColor: ACCENT }}
            >
              <div className="px-7 py-6 text-center text-white">
                <p className="text-sm font-semibold">Since 2010</p>
                <p className="text-xs opacity-90">Award Winning Company</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Text & Features */}
        <div>
          <p className="uppercase tracking-wide font-semibold flex items-center gap-2 text-[13px]" style={{ color: ACCENT }}>
            About Company
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The Best Transport & Logistic Company
          </h2>

          <p className="mt-5 text-gray-700 max-w-xl">
            Haixun Global Co., Ltd. headquartered in Shenzhen, China. Its business scope covers the sea,
            land and air transportation agency business of global LCL, FCL, bulk cargo, etc.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-7">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Globe2 className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Fast Worldwide Delivery</h4>
                <p className="text-gray-600 text-sm">
                  Our vast global network ensures your cargo reaches destinations on schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <ShieldCheck className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Safe And Secure Delivery</h4>
                <p className="text-gray-600 text-sm">
                  From pickup to final drop-off, we maintain strict safety and compliance standards.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + Contact */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <Link to="/contact">
              <Button
                className="text-white text-base font-semibold px-6 py-3 rounded-md shadow-lg transition"
                style={{ backgroundColor: ACCENT }}
              >
                Know More About Us
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <img
                src="/support-person.jpg"     // optional helper avatar
                alt="Support"
                className="w-12 h-12 rounded-full object-cover border-2"
                style={{ borderColor: ACCENT }}
              />
              <div>
                <p className="text-sm text-gray-600">Need Help?</p>
                <p className="text-lg font-bold text-gray-900">+00 264 566 579</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
