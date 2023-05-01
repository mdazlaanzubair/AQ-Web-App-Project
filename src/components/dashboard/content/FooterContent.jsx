import { useContentContext } from "../../../context/content/ContentContext";
import { toast } from "react-toastify";

const FooterContent = ({}) => {
  const { footerContent, setFooterContent } = useContentContext();

  return (
    <section id="about-content" className="py-3">
      <h1 className="text-start text-3xl mb-5 font-bold">Footer Content</h1>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Copy/Rights Statement</h2>
            <input
              type="text"
              placeholder="Copy Rights Statement"
              className="input input-bordered focus:outline-none w-full"
              value={footerContent.para}
              onChange={(e) => setFooterContent({ para: e.target.value })}
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

export default FooterContent;
