import AboutContent from "./AboutContent";
import TestimonialContent from "./TestimonialContent";
import HeaderContent from "./HeaderContent";
import { useState } from "react";
import FooterContent from "./FooterContent";
import ServicesContent from "./ServicesContent";
import ProductsContent from "./ProductsContent";

const WebContentCRUD = () => {
  const contentTypes = [
    "Banner",
    "About",
    "Testimonial",
    "Call to Action",
    "Services",
    "Products",
    "Footer",
  ];

  const [contentTypeSelected, setContentTypeSelected] = useState("Banner");

  return (
    <section id="header-content" className="py-3">
      <h1 className="my-5 text-xl md:text-3xl font-bold lg:text-5xl text-center">
        Content Management System
      </h1>

      <div className="flex flex-wrap mb-10 items-center justify-center">
        <h1 className="font-bold">Which content do you want to update? </h1>
        {contentTypes.map((content, index) => (
          <button
            type="button"
            className={`btn ${
              contentTypeSelected === content ? "btn-primary" : "btn-neutral"
            } m-2 capitalize`}
            key={index}
            onClick={() => setContentTypeSelected(content)}
          >
            {content}
          </button>
        ))}
      </div>

      {contentTypeSelected === "Banner" ? (
        <HeaderContent />
      ) : contentTypeSelected === "About" ? (
        <AboutContent />
      ) : contentTypeSelected === "Testimonial" ? (
        <TestimonialContent />
      ) : contentTypeSelected === "Services" ? (
        <ServicesContent />
      ) : contentTypeSelected === "Products" ? (
        <ProductsContent />
      ) : contentTypeSelected === "Footer" ? (
        <FooterContent />
      ) : (
        ""
      )}
    </section>
  );
};

export default WebContentCRUD;
