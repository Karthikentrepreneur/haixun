import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUsSection() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/ajax/helen@haixun.co", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      setFormStatus("success");
      e.currentTarget.reset();
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "#F5EAEA", // 🌸 Full soft rose white background
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* LEFT COLUMN - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-[#9B111E] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-800 text-lg max-w-md leading-relaxed">
            Need to get in touch?{" "}
            <span className="text-[#9B111E] font-semibold">No problem!</span>{" "}
            You can use our contact form to send us a message.
          </p>

          <div className="space-y-6">
            {/* Office */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#9B111E]/10">
              <div className="w-12 h-12 rounded-full bg-[#9B111E]/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#9B111E]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Our Office Address
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  13C02, Block A, Zhaoxin Huijin Plaza
                  <br />
                  3085 Shennan East Road, Luohu, Shenzhen.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#9B111E]/10">
              <div className="w-12 h-12 rounded-full bg-[#9B111E]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#9B111E]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email Us</h4>
                <a
                  href="mailto:helen@haixun.co"
                  className="text-[#9B111E] text-sm hover:underline"
                >
                  helen@haixun.co
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#9B111E]/10">
              <div className="w-12 h-12 rounded-full bg-[#9B111E]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#9B111E]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Call Us</h4>
                <a
                  href="tel:+8675582222447"
                  className="text-[#9B111E] text-sm hover:underline"
                >
                  +86 75582222447
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER COLUMN - CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-xl border border-[#9B111E]/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">
                Your Name
              </label>
              <Input
                name="Name"
                placeholder="Enter your name"
                required
                className="border-gray-200 focus-visible:ring-[#9B111E]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">
                Your Email
              </label>
              <Input
                name="Email"
                type="email"
                placeholder="Enter your email"
                required
                className="border-gray-200 focus-visible:ring-[#9B111E]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">
                Subject
              </label>
              <Input
                name="Subject"
                placeholder="Enter subject"
                required
                className="border-gray-200 focus-visible:ring-[#9B111E]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-800">
                Message
              </label>
              <Textarea
                name="Message"
                placeholder="Write your message"
                rows={5}
                required
                className="border-gray-200 focus-visible:ring-[#9B111E]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#9B111E] hover:bg-[#7F0E18] text-white font-semibold text-lg py-6 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </Button>

            {formStatus === "success" && (
              <p className="text-green-600 text-center mt-4">
                ✅ Message sent successfully!
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 text-center mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT COLUMN - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="w-full max-w-md bg-white p-5 rounded-2xl shadow-lg border border-[#9B111E]/10">
            <img
              src="/contact.png"
              alt="Haixun contact representative"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
