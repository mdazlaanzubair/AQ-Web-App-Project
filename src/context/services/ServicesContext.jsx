import { createContext, useContext, useState } from "react";

const ServicesContext = createContext();

export const useServicesContext = () => useContext(ServicesContext);

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([
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
  ]);

  const value = { services, setServices };
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
