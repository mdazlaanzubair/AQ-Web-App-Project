import { useContentContext } from "../../../context/content/ContentContext";

const CallToAction = () => {
  const { appContent } = useContentContext();
  return (
    <section id="call-to-action-section" className="py-3">
      <section className=" body-font">
        <div className="container px-5 py-10 mx-auto bg-neutral rounded-box text-neutral-content">
          <div className="flex flex-col lg:flex-row sm:items-center items-start mx-auto w-full md:w-4/5">
            <div className="content mb-3">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font">
                {appContent?.cta_section?.title}
              </h1>
            </div>
            <div className="form-control w-full">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Subscribe"
                  className="input input-bordered input-success w-full"
                />
                <button className="btn btn-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -rotate-45"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CallToAction;
