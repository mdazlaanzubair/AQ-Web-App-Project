import { useState } from "react";
import { useContentContext } from "../../../context/content/ContentContext";
import ServiceCards from "./ServiceCards";
import QuoteForm from "./QuoteForm";
import { useServicesContext } from "../../../context/services/ServicesContext";

const Services = () => {
  const { servicesContent } = useContentContext();
  const { services } = useServicesContext();

  const listOfServices = services;

  const [filteredServices, setFilteredServices] = useState(listOfServices);

  const servicesFilter = (e) => {
    const searchQuery = e.target.value.toLowerCase();

    const matchedItems = listOfServices.filter(
      (service) =>
        service.title.toLowerCase().includes(searchQuery) ||
        service.desc.toLowerCase().includes(searchQuery)
    );

    setFilteredServices(matchedItems);
  };

  return (
    <section id="services-section" className="py-3">
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center py-10">
          <div className="">
            <div className="max-w-3xl md:max-w-lg lg:max-w-3xl mx-auto">
              <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl text-center">
                {servicesContent?.content.title}
              </h1>
              <p className="mb-5 text-sm font-light text-center">
                {servicesContent?.content.para}
              </p>
            </div>
            <div className="container m-auto grid ">
              <div className="col text-end mb-3">
                <input
                  type="search"
                  placeholder="Search filter"
                  className="input input-primary border-0 focus:border-none focus:outline-none input-sm w-xs ms-auto"
                  onChange={servicesFilter}
                />
              </div>
              <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ServiceCards services={filteredServices} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GET A QUOTE */}
      <QuoteForm services={listOfServices} />
    </section>
  );
};

export default Services;
