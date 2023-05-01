import { useContentContext } from "../../../context/content/ContentContext";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Testimonials = () => {
  const { reviewsContent } = useContentContext();

  return (
    <section id="testimonial-section" className="py-3">
      <div className="hero rounded-box bg-base-200">
        <div className="hero-content text-center pt-10">
          <div className="max-w-3xl md:max-w-lg lg:max-w-4xl">
            <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
              {reviewsContent?.title}
            </h1>
            <p className="mb-5 text-base font-light md:font-medium">
              {reviewsContent?.para}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          grabCursor={false}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          // breakpoints={{
          //   // when window width is >= 320px
          //   320: {
          //     slidesPerView: 1,
          //     spaceBetween: 0,
          //     slidesPerGroup: 1,
          //   },
          //   // when window width is >= 640px
          //   640: {
          //     slidesPerView: 2,
          //     slidesPerGroup: 2,
          //   },
          //   1000: {
          //     slidesPerView: 3,
          //     slidesPerGroup: 3,
          //   },
          // }}
        >
          {reviewsContent?.reviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card w-1/2 m-3 hover:shadow mx-auto">
                <div className="card-body">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-10 h-10 opacity-25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 34h6l4-8v-12h-12v12h6zm16 0h6l4-8v-12h-12v12h6z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                  </svg>
                  <div className="card-content text-left">
                    <p>{review?.comment}</p>
                    <div className="author flex flex-col justify-end items-end mt-3">
                      <h2 className="text-base font-bold">
                        {review?.author?.name}
                      </h2>
                      <small className="">{review?.author?.title}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
