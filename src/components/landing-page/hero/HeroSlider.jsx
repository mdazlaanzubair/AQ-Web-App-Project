// Import Swiper React components
import { useEffect } from "react";
import Swiper from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const HeroSlider = () => {
  // Initialize Swiper in component using the useEffect hook
  let mySwiper = null;

  useEffect(() => {
    mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Finally, clean up the Swiper instance
    return () => {
      if (mySwiper !== null) {
        mySwiper.destroy();
      }
    };
  }, []);

  const banner = [
    {
      img: "https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "Look and feel your best on the field with our sports apparel.",
      para: "From performance-enhancing materials to stylish designs, our sports apparel has everything you need to take your game to the next level.",
    },
    {
      img: "https://images.unsplash.com/photo-1680199994489-22b5f4ccc620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Make a statement with custom-designed jerseys and gear.",
      para: "Create a lasting impression with our custom-designed jerseys and gear, tailored to your unique style and preferences.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661900678702-a1771f9f849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title:
        "Elevate your game with our high-quality sports products and services.",
      para: "Our top-notch sports products and services are designed to help you perform at your best and achieve your goals.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661900678702-a1771f9f849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title:
        "The perfect balance of style and function for athletes of all levels.",
      para: "We believe that sports apparel should be both functional and fashionable, which is why our products strike the perfect balance between the two.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661900678702-a1771f9f849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title:
        "Unlock your potential with our premium sports apparel and equipment.",
      para: "Our premium sports apparel and equipment are designed to help you unlock your full potential and perform at your best.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661900678702-a1771f9f849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Ready to dominate on the field? We've got you covered.",
      para: "Whether you're a beginner or a pro, we have the products and services you need to dominate on the field and achieve your goals.",
    },
  ];

  // return <div>I am slider</div>;
  return (
    <div className="swiper-container my-10 rounded-box">
      <div className="swiper-wrapper">
        {banner.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <div
              className="hero min-h-screen rounded-box"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundAttachment: "fixed",
              }}
            >
              <div className="hero-overlay bg-neutral bg-opacity-75 rounded-box"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl md:max-w-lg lg:max-w-3xl">
                  <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
                    {item.title}
                  </h1>
                  <p className="mb-5 text-xs md:text-xl lg:text-2xl font-light md:font-normal">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- If we need navigation buttons --> */}
      <div
        className="swiper-button-prev text-neutral-content"
        style={{ fontSize: "150%" }}
        onClick={() => mySwiper.slidePrev()}
      ></div>
      <div
        className="swiper-button-next text-neutral-content"
        onClick={() => mySwiper.slideNext()}
      ></div>
    </div>
  );
};

export default HeroSlider;
