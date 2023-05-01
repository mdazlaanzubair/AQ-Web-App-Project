import { useState } from "react";
import { useContentContext } from "../../../context/content/ContentContext";
import { toast } from "react-toastify";

const HeaderContent = ({}) => {
  const { headerContent, setHeaderContent } = useContentContext();
  const [selectedContent, setSelectedContent] = useState({});

  const updateHeaderContent = (e) => {
    e.preventDefault();

    setHeaderContent(
      headerContent.map((content) =>
        content.id === selectedContent.id ? selectedContent : content
      )
    );

    setSelectedContent({});
    toast.success("Content updated successfully!");
  };

  return (
    <section id="header-content" className="py-3">
      <h1 className="text-start text-3xl mb-5 font-bold">Header Content</h1>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="flex flex-col w-full">
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Headline</h2>
            <input
              type="text"
              placeholder="Search by product name…"
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
              placeholder="Search by product name…"
              className="textarea textarea-bordered focus:outline-none w-full"
              rows={3}
              value={selectedContent?.para}
              onChange={(e) =>
                setSelectedContent((prevState) => ({
                  ...prevState,
                  para: e.target.value,
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full text-right">
            <button
              className="btn btn-info text-right capitalize"
              onClick={updateHeaderContent}
            >
              Update Content
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-5 gap-3">
        {headerContent?.map((item, index) => (
          <div
            className="card w-full bg-base-100 shadow-xl image-full cursor-pointer"
            key={index}
            onClick={() => setSelectedContent(item)}
          >
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl">
                {item.title}
              </h2>
              <p className="mb-5 text-xs md:text-xl lg:text-2xl font-light md:font-normal">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeaderContent;
