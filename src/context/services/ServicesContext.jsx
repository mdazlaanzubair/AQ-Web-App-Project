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
  ]);

  const value = { services, setServices };
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
