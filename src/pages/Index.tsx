
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HaixunHeroSection from "@/components/AirFreightHeroSection";
import HaixunServicesSection from "@/components/HaixunServicesSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return null;
};

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const handleScroll = () => {
      const scrollAnimElements = document.querySelectorAll('.scroll-animate');
      scrollAnimElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('appear');
        }
      });
    };

    // Initial check on load
    setTimeout(handleScroll, 100);

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <Navigation />
      <ScrollToTop />
      <AirFreightHeroSection />
      <HaixunServicesSection />
      <AboutSection />
      <AdvantagesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
