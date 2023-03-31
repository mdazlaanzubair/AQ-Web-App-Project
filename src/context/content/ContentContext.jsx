import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const useContentContext = () => useContext(ContentContext);

const ContentProvider = ({ children }) => {
  const [appContent, setAppContent] = useState({
    header_section: {
      banners: [
        {
          img: "https://cdn.pixabay.com/photo/2018/04/13/11/14/shoes-3316260_960_720.jpg",
          title:
            "Look and feel your best on the field with our sports apparel.",
          para: "From performance-enhancing materials to stylish designs, our sports apparel has everything you need to take your game to the next level.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2019/02/24/09/10/bulgarian-folk-costume-4017175_960_720.jpg",
          title: "Make a statement with custom-designed jerseys and gear.",
          para: "Create a lasting impression with our custom-designed jerseys and gear, tailored to your unique style and preferences.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_960_720.jpg",
          title:
            "Elevate your game with our high-quality sports products and services.",
          para: "Our top-notch sports products and services are designed to help you perform at your best and achieve your goals.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg",
          title:
            "The perfect balance of style and function for athletes of all levels.",
          para: "We believe that sports apparel should be both functional and fashionable, which is why our products strike the perfect balance between the two.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2020/06/01/10/39/galaxy-5246185_960_720.jpg",
          title:
            "Unlock your potential with our premium sports apparel and equipment.",
          para: "Our premium sports apparel and equipment are designed to help you unlock your full potential and perform at your best.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2019/07/26/12/24/boss-4364677_960_720.jpg",
          title: "Ready to dominate on the field? We've got you covered.",
          para: "Whether you're a beginner or a pro, we have the products and services you need to dominate on the field and achieve your goals.",
        },
      ],
    },
    services_section: {
      content: {
        title: "What We Offer",
        para: "At [Client Name], we offer a wide range of services to help bring your ideas to life. Our experienced team of designers and technicians use the latest technology and techniques to deliver high-quality results. Here are some of the services we offer:",
      },
      services: [
        {
          title: "Logo Designing",
          desc: "Get a professional logo representing your brand's identity with multiple design concepts and revisions.",
        },
        {
          title: "Jerseys & Apparel Mockups",
          desc: "Create custom mockups to visualize sports jerseys and apparel before printing with our designers' help.",
        },
        {
          title: "Vector Tracing",
          desc: "Convert raster images into high-quality, scalable vectors for printing and other purposes with advanced software and techniques.",
        },
        {
          title: "Color Separation",
          desc: "Separate designs into individual colors for screen printing with advanced color separation techniques for accurate and vibrant colors.",
        },
        {
          title: "Embroidery Digitizing",
          desc: "Digitize designs for accurate and high-quality embroidery using state-of-the-art software and precise stitching.",
        },
        {
          title: "Engraving and Scoring Files",
          desc: "Get precise engraving and scoring files for products with a variety of materials and finishes using advanced technology.",
        },
        {
          title: "3D Engraving",
          desc: "Add depth and dimension to products with custom 3D designs from our team of experts.",
        },
        {
          title: "Embroidered",
          desc: "Professional and high-quality embroidery on apparel and fabrics with a wide variety of thread colors and styles.",
        },
        {
          title: "PVC",
          desc: "Create durable and custom PVC patches or labels for apparel or products that withstand harsh conditions.",
        },
        {
          title: "Leather",
          desc: "Customize size, shape, and color for high-quality and luxurious leather patches or labels.",
        },
        {
          title: "Chenille",
          desc: "Create custom chenille patches or letters with high-quality materials and a variety of colors and sizes.",
        },
        {
          title: "Woven",
          desc: "Unique and high-quality woven designs on apparel and fabrics with precision and attention to detail.",
        },
        {
          title: "Sublimated",
          desc: "Full-color, high-resolution designs for custom sublimated apparel with long-lasting, vibrant colors.",
        },
        {
          title: "Screen Print Transfers",
          desc: "Custom screen-printed transfers for apparel and products with high-quality ink and application to various materials.",
        },
        {
          title: `DTF Gang Sheets [22"x 36"]`,
          desc: "Custom DTF (direct-to-film) transfers for apparel and products with high-quality ink and application to various materials.",
        },
        {
          title: "HTV",
          desc: "Create durable and long-lasting custom heat transfer vinyl designs for apparel and products.",
        },
      ],
    },
    cta_section: {
      title:
        "Stay up-to-date with the latest news, promotions, and tips by subscribing to our newsletter!",
      para: "Don't miss out on exclusive content and special offers - simply enter your email below and hit 'subscribe' to join our community.",
    },
  });

  const value = { appContent, setAppContent };
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
