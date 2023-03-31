import { useContentContext } from "../../../context/content/ContentContext";

const ServiceCards = () => {
  const { appContent } = useContentContext();

  return appContent?.services_section?.services?.map((service, index) => (
    <div
      className="card bg-base-100 hover:shadow-xl text-center w-full transition-shadow ease-in-out duration-500"
      key={index}
    >
      <div className="card-body">
        <h2 className="card-title justify-center">{service.title}</h2>
        <p className="text-sm">{service.desc}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-ghost btn-sm capitalize text-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  ));
};

export default ServiceCards;
