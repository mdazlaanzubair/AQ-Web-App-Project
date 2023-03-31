import { useContentContext } from "../../../context/content/ContentContext";
import ServiceCards from "./ServiceCards";

const Services = () => {
  const { appContent } = useContentContext();
  return (
    <section id="service-section" className="py-3">
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center py-10">
          <div className="">
            <div className="max-w-3xl md:max-w-lg lg:max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold">
                {appContent?.services_section?.content.title}
              </h1>
              <p className="py-6">
                {appContent?.services_section?.content.para}
              </p>
            </div>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <ServiceCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
