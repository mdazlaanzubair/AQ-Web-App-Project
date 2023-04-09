import { useContentContext } from "../../../context/content/ContentContext";

const FAQ = () => {
  const { appContent } = useContentContext();
  return (
    <section id="hero-section" className="py-3">
      <div className="hero bg-base-100 rounded-box">
        <div className="hero-content flex-col lg:flex-row pt-10 justify-center items-start">
          <div className="max-w-full">
            <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl lg:text-left text-center">
              {appContent?.faq_section?.title}
            </h1>
            <p className="mb-5 text-base font-light md:font-medium lg:text-left text-center">
              {appContent?.faq_section?.para}
            </p>
          </div>
          <div className="max-w-full">
            <div className="grid grid-cols-1">
              {appContent?.faq_section?.faqs?.map((faq, index) => (
                <div
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
                >
                  <input id={index} type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-primary peer-checked:text-primary-content">
                    {faq?.q}
                  </div>
                  <div className="collapse-content peer-checked:bg-primary peer-checked:text-primary-content">
                    <p>{faq?.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
