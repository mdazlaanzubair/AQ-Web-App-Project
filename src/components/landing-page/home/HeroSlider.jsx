import { useContentContext } from "../../../context/content/ContentContext";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const HeroSlider = () => {
  const { appContent } = useContentContext();

  return (
    <section id="hero-section" className="py-3 rounded-box">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="rounded-box"
      >
        {appContent?.header_section?.banners?.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero h-60 md:h-96 lg:h-screen"
              style={{
                backgroundImage: `url(${banner.img})`,
                backgroundAttachment: "fixed",
              }}
            >
              <div className="hero-overlay bg-neutral bg-opacity-75"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl md:max-w-lg lg:max-w-3xl">
                  <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
                    {banner.title}
                  </h1>
                  <p className="mb-5 text-xs md:text-xl lg:text-2xl font-light md:font-normal">
                    {banner.para}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
