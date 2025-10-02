import { CSSProperties, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

type HeroSlide = {
  id: number;
  number: string;
  backgroundImage: string;
  bigTitle: string;
  mainImage: string;
  iconOne: string;
  iconTwo: string;
};

const slides: HeroSlide[] = [
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
];

const AirFreightHeroSection = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const nextButtonRef = useRef<HTMLDivElement | null>(null);

  const createBackgroundStyle = (imagePath: string): CSSProperties => ({
    backgroundImage: `url(${imagePath})`
  });

  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop
        effect="fade"
        pagination={{
          el: paginationRef.current,
          type: "bullets",
          clickable: true
        }}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current
        }}
        autoplay={{
          delay: 7000
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onBeforeInit={swiper => {
          const navigation = swiper.params.navigation;
          if (typeof navigation !== "boolean" && navigation) {
            navigation.prevEl = prevButtonRef.current;
            navigation.nextEl = nextButtonRef.current;
          }

          const pagination = swiper.params.pagination;
          if (typeof pagination !== "boolean" && pagination) {
            pagination.el = paginationRef.current;
          }
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className="swiper-slide">
            <div className="image-layer" style={createBackgroundStyle(slide.backgroundImage)} />
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
          </SwiperSlide>
        ))}

        <div className="swiper-pagination" id="main-slider-pagination" ref={paginationRef} />
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
            ref={prevButtonRef}
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
            ref={nextButtonRef}
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default AirFreightHeroSection;
