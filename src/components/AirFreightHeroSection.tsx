"use client";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = Readonly<{
  id: number;
  numberLabel: string;
  backgroundImage: string;
  bigTitle: string;
  mainImage: string;
  iconOne: string;
  iconTwo: string;
}>;

const slides: readonly Slide[] = [
  {
    id: 1,
    numberLabel: "01.",
    backgroundImage: "/img/slider/slider-v1-img1.jpg",
    bigTitle: "Air Freight",
    mainImage: "/img/slider/slider-v1-img4.png",
    iconOne: "/img/icon/slider-v1-icon1.png",
    iconTwo: "/img/icon/slider-v1-icon2.png"
  },
  {
    id: 2,
    numberLabel: "02.",
    backgroundImage: "/img/slider/slider-v1-img2.jpg",
    bigTitle: "Air Freight",
    mainImage: "/img/slider/slider-v1-img4.png",
    iconOne: "/img/icon/slider-v1-icon1.png",
    iconTwo: "/img/icon/slider-v1-icon2.png"
  },
  {
    id: 3,
    numberLabel: "03.",
    backgroundImage: "/img/slider/slider-v1-img3.jpg",
    bigTitle: "Air Freight",
    mainImage: "/img/slider/slider-v1-img4.png",
    iconOne: "/img/icon/slider-v1-icon1.png",
    iconTwo: "/img/icon/slider-v1-icon2.png"
  }
] as const;

const AirFreightHeroSection = () => {
  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop
        effect="fade"
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev"
        }}
        autoplay={{
          delay: 7000
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-slide">
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
              <img src={slide.mainImage} alt="" />
            </div>
            <div className="icon-one">
              <img src={slide.iconOne} alt="" />
            </div>
            <div className="icon-two">
              <img src={slide.iconTwo} alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>{slide.numberLabel}</span> AIR Freight
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
                    <a className="thm-btn" href="/">
                      <span className="txt">Calculate Package</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination" id="main-slider-pagination" />
        <div className="main-slider__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-next">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default AirFreightHeroSection;
