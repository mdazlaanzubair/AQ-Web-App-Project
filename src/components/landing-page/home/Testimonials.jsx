import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useContentContext } from "../../../context/content/ContentContext";

const Testimonials = () => {
  // Initialize Swiper in component using the useEffect hook
  const [testimonialSwiper, setTestimonialSwiper] = useState(null);

  useEffect(() => {
    setTestimonialSwiper(
      new Swiper(".swiper-container", {
        slidesPerView: 2,
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
      if (testimonialSwiper !== null) {
        testimonialSwiper.destroy();
      }
    };
  }, []);

  const { appContent } = useContentContext();

  return (
    <section id="testimonial-section" className="py-3">
      <div className="hero rounded-box bg-base-200">
        <div className="hero-content text-center pt-10">
          <div className="max-w-3xl md:max-w-lg lg:max-w-4xl">
            <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
              {appContent?.testimonial_section?.title}
            </h1>
            <p className="mb-5 text-base font-light md:font-medium">
              {appContent?.testimonial_section?.para}
            </p>
          </div>
        </div>
      </div>
      <div className="hero rounded-box bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl md:max-w-lg lg:max-w-4xl">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {appContent?.testimonial_section?.reviews?.map(
                  (review, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                          <svg
                            viewBox="0 0 48 48"
                            className="w-10 h-10 text-base-content"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 34h6l4-8v-12h-12v12h6zm16 0h6l4-8v-12h-12v12h6z" />
                            <path d="M0 0h48v48h-48z" fill="none" />
                          </svg>
                          <p>{review?.comment}</p>
                          <div className="card-footer">
                            <h2 className="card-title">
                              {review?.author?.name}
                            </h2>
                            <small>{review?.author?.title}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* <!-- If we need navigation buttons --> */}
            {testimonialSwiper && (
              <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() => testimonialSwiper.slidePrev()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() => testimonialSwiper.slideNext()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
