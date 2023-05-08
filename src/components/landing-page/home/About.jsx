import { Link } from "react-router-dom";
import { useContentContext } from "../../../context/content/ContentContext";
import Tilt from "react-parallax-tilt";

const About = () => {
  const { aboutContent } = useContentContext();
  return (
    <section id="about-section" className="py-3">
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center py-10">
          <div className="max-w-3xl md:max-w-lg lg:max-w-4xl">
            <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
              {aboutContent?.title}
            </h1>
            <p className="mb-5 text-base font-light md:font-medium">
              {aboutContent?.para}
            </p>
            <div className="flex flex-row justify-center items-center">
              <Link
                to="/services"
                className="btn btn-outline btn-primary capitalize m-2"
              >
                Explore Our Services
              </Link>
              <Link to="/products" className="btn btn-primary capitalize m-2">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row pt-10">
          <Tilt>
            <img
              src="https://cdn.pixabay.com/photo/2017/06/04/20/48/vision-2372177_960_720.jpg"
              className="max-w-sm rounded-lg shadow-2xl hidden md:block"
            />
          </Tilt>
          <div className="max-w-3xl md:max-w-lg lg:max-w-4xl text-center lg:text-left">
            <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
              {aboutContent?.vision_title}
            </h1>
            <p className="mb-5 text-sm md:text-lg font-light md:font-medium">
              {aboutContent?.vision_para}
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse pb-10">
          <Tilt>
            <img
              src="https://cdn.pixabay.com/photo/2018/09/17/12/46/business-idea-3683781_960_720.jpg"
              className="max-w-sm rounded-lg shadow-2xl hidden md:block"
            />
          </Tilt>

          <div className="max-w-3xl md:max-w-lg lg:max-w-4xl text-center lg:text-left">
            <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
              {aboutContent?.mission_title}
            </h1>
            <p className="mb-5 text-sm md:text-lg font-light md:font-medium">
              {aboutContent?.mission_para}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
