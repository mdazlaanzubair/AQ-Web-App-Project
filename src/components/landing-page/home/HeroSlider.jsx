import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useContentContext } from "../../../context/content/ContentContext";

const HeroSlider = () => {
  // Initialize Swiper in component using the useEffect hook
  const [heroBannerSwiper, setHeroBannerSwiper] = useState(null);

  useEffect(() => {
    setHeroBannerSwiper(
      new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })
    );

    // Finally, clean up the Swiper instance
    return () => {
      if (heroBannerSwiper !== null) {
        heroBannerSwiper.destroy();
      }
    };
  }, []);

  const { appContent } = useContentContext();

  // return <div>I am slider</div>;
  return (
    <section id="hero-section" className="py-3">
      <div className="swiper-container rounded-box">
        <div className="swiper-wrapper">
          {appContent?.header_section?.banners?.map((banner, index) => (
            <div className="swiper-slide" key={index}>
              <div
                className="hero min-h-screen rounded-box"
                style={{
                  backgroundImage: `url(${banner.img})`,
                  backgroundAttachment: "fixed",
                }}
              >
                <div className="hero-overlay bg-neutral bg-opacity-75 rounded-box"></div>
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
            </div>
          ))}
        </div>

        {/* <!-- If we need navigation buttons --> */}
        {heroBannerSwiper && (
          <>
            <div
              className="swiper-button-prev text-neutral-content"
              onClick={() => heroBannerSwiper[0].slidePrev()}
            ></div>
            <div
              className="swiper-button-next text-neutral-content"
              onClick={() => heroBannerSwiper[0].slideNext()}
            ></div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSlider;