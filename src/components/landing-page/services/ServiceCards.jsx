import Tilt from "react-parallax-tilt";
const ServiceCards = ({ services }) => {
  return services?.map((service, index) => (
    <Tilt key={index}>
      <div className="card bg-base-100 hover:shadow-xl text-center w-full transition-shadow ease-in-out duration-500">
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
    </Tilt>
  ));
};

export default ServiceCards;
