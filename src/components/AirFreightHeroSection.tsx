import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    number: "01.",
    backgroundImage: "/img/slider/slider-v1-img1.jpg",
    bigTitle: "Air Freight",
    mainImage: "/img/slider/slider-v1-img4.png",
    iconOne: "/img/icon/slider-v1-icon1.png",
    iconTwo: "/img/icon/slider-v1-icon2.png"
  },
  {
    id: 2,
    number: "02.",
    backgroundImage: "/img/slider/slider-v1-img2.jpg",
    bigTitle: "Air Freight",
    mainImage: "/img/slider/slider-v1-img4.png",
    iconOne: "/img/icon/slider-v1-icon1.png",
    iconTwo: "/img/icon/slider-v1-icon2.png"
  },
  {
    id: 3,
    number: "03.",
    backgroundImage: "/img/slider/slider-v1-img3.jpg",
    bigTitle: "Air Freight",
    mainImage: "/img/slider/slider-v1-img4.png",
    iconOne: "/img/icon/slider-v1-icon1.png",
    iconTwo: "/img/icon/slider-v1-icon2.png"
  }
] as const;

const SLIDE_DURATION = 7000;

const AirFreightHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="main-slider main-slider-one" aria-label="Air freight hero slider">
      <div className="swiper-container thm-swiper__slider relative overflow-hidden">
        <div className="swiper-wrapper relative">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={slide.id}
                className="swiper-slide transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? "visible" : "hidden",
                  position: isActive ? "relative" : "absolute",
                  inset: isActive ? undefined : 0,
                  pointerEvents: isActive ? "auto" : "none"
                }}
                aria-hidden={!isActive}
              >
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`
                  }}
                />
                <div className="big-title">
                  <h2>{slide.bigTitle}</h2>
                </div>
                <div className="img-box">
                  <img src={slide.mainImage} alt="Air freight airplane" />
                </div>
                <div className="icon-one">
                  <img src={slide.iconOne} alt="Decorative icon" />
                </div>
                <div className="icon-two">
                  <img src={slide.iconTwo} alt="Decorative icon" />
                </div>
                <div className="container">
                  <div className="main-slider-one__single padding">
                    <div className="main-slider-one__content">
                      <h3>
                        <span>{slide.number}</span> AIR Freight
                      </h3>
                      <h2>
                        Fast and safe <br />
                        <span>transport</span> your <br />
                        product
                      </h2>
                      <p>
                        With more than 30 years of experience in the logistics industry <br />
                        bibendum auctor nisi elit more consequat ipsum.
                      </p>
                      <div className="btn-box">
                        <Link className="thm-btn" to="/">
                          <span className="txt">Calculate Package</span>
                          <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="swiper-pagination flex items-center justify-center gap-2" id="main-slider-pagination">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                className={`h-2 w-2 rounded-full border border-white/60 transition-colors duration-300 ${isActive ? "bg-white" : "bg-transparent"}`}
                aria-label={`Go to slide ${slide.number}`}
                aria-current={isActive}
                onClick={() => goToSlide(index)}
              />
            );
          })}
        </div>

        <div className="main-slider__nav">
          <button
            type="button"
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirFreightHeroSection;
