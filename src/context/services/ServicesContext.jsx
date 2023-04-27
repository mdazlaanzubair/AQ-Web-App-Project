import { createContext, useContext, useState } from "react";

const ServicesContext = createContext();

export const useServicesContext = () => useContext(ServicesContext);

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Logo Designing",
      desc: "Get a professional logo representing your brand's identity with multiple design concepts and revisions.",
    },
    {
      id: 2,
      title: "Jerseys & Apparel Mockups",
      desc: "Create custom mockups to visualize sports jerseys and apparel before printing with our designers' help.",
    },
    {
      id: 3,
      title: "Vector Tracing",
      desc: "Convert raster images into high-quality, scalable vectors for printing and other purposes with advanced software and techniques.",
    },
    {
      id: 4,
      title: "Color Separation",
      desc: "Separate designs into individual colors for screen printing with advanced color separation techniques for accurate and vibrant colors.",
    },
  ]);

  const [selectedService, setSelectedService] = useState({});

  // services CUD functions
  // 1. ADD NEW PRODUCT
  const createService = (newService) => {
    setServices([newService, ...services]);
  };

  // 2. UPDATE SINGLE PRODUCT
  const updateService = (id, updatedService) => {
    setServices(
      services.map((service) => {
        if (service.id === id) {
          return { ...service, ...updatedService };
        }
        return service;
      })
    );
  };

  // 3. DELETE SINGLE PRODUCT
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const value = {
    services,
    setServices,
    selectedService,
    setSelectedService,
    createService,
    updateService,
    deleteService,
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
