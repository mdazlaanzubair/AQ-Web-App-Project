import { useEffect, useState } from "react";
import { useContentContext } from "../../../context/content/ContentContext";
import { toast } from "react-toastify";

const AboutContent = ({}) => {
  const { aboutContent, setAboutContent } = useContentContext();

  const [contentType, setContentType] = useState("About");
  const [selectedContent, setSelectedContent] = useState({});

  const updateContent = () => {
    if (contentType === "About") {
      setAboutContent((prevState) => ({
        ...prevState,
        title: selectedContent?.title,
        para: selectedContent?.para,
      }));
    } else if (contentType === "Vision") {
      setAboutContent((prevState) => ({
        ...prevState,
        vision: selectedContent,
      }));
    } else {
      setAboutContent((prevState) => ({
        ...prevState,
        mission: selectedContent,
      }));
    }

    toast.success("Content updated successfully!");
  };

  useEffect(() => {
    if (contentType === "About") {
      setSelectedContent({
        title: aboutContent?.title,
        para: aboutContent?.para,
      });
    } else if (contentType === "Vision") {
      setSelectedContent({
        title: aboutContent?.vision?.title,
        para: aboutContent?.vision?.para,
      });
    } else {
      setSelectedContent({
        title: aboutContent?.mission?.title,
        para: aboutContent?.mission?.para,
      });
    }
  }, [contentType]);

  return (
    <section id="header-content" className="py-3">
      <h1 className="text-start text-3xl mb-5 font-bold">About Content</h1>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">
              Do you want to update{" "}
              <strong className="text-primary">{contentType}</strong> ?
            </h2>
            <div className="flex flex-row">
              {["About", "Vision", "Mission"].map((item, index) => (
                <div className="form-control" key={index}>
                  <label className="label cursor-pointer mr-5">
                    <span className="label-text mr-2 font-bold">{item}</span>
                    <input
                      type="radio"
                      name="content_type"
                      className="radio checked:bg-primary"
                      value={item}
                      checked={item === contentType ? true : false}
                      onChange={(e) => setContentType(e.target.value)}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Headline</h2>
            <input
              type="text"
              placeholder="Headline here..."
              className="input input-bordered focus:outline-none w-full"
              value={selectedContent?.title}
              onChange={(e) =>
                setSelectedContent((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Paragraph</h2>
            <textarea
              type="text"
              placeholder="Paragraph here..."
              className="textarea textarea-bordered focus:outline-none w-full"
              value={selectedContent?.para}
              rows={3}
              onChange={(e) =>
                setSelectedContent((prevState) => ({
                  ...prevState,
                  para: e.target.value,
                }))
              }
            />
          </div>
          <div className="col w-full text-right">
            <button
              className="btn btn-info text-right capitalize"
              onClick={updateContent}
            >
              Update Content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
