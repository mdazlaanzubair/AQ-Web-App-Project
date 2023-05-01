import { useContentContext } from "../../../context/content/ContentContext";
import { toast } from "react-toastify";

const ServicesContent = ({}) => {
  const { servicesContent, setServicesContent } = useContentContext();

  return (
    <section id="about-content" className="py-3">
      <h1 className="text-start text-3xl mb-5 font-bold">Services Content</h1>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Headline</h2>
            <input
              type="text"
              placeholder="Copy Rights Statement"
              className="input input-bordered focus:outline-none w-full"
              value={servicesContent.content.title}
              onChange={(e) =>
                setServicesContent((prevState) => ({
                  ...prevState,
                  content: { ...prevState.content, title: e.target.value },
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Paragraph</h2>
            <textarea
              type="text"
              placeholder="Copy Rights Statement"
              className="textarea textarea-bordered focus:outline-none w-full"
              value={servicesContent.content.para}
              rows={3}
              onChange={(e) =>
                setServicesContent((prevState) => ({
                  ...prevState,
                  content: { ...prevState.content, para: e.target.value },
                }))
              }
            />
          </div>
          <div className="col w-full text-right">
            <button
              className="btn btn-info text-right capitalize"
              onClick={() => toast.success("Content updated successfully!")}
            >
              Update Content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
