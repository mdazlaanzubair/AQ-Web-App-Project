import { useContentContext } from "../../../context/content/ContentContext";

const FAQ = () => {
  const { appContent } = useContentContext();
  return (
    <section id="hero-section" className="py-3">
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center pt-10">
          <div className="max-w-3xl md:max-w-lg lg:max-w-3xl">
            <h1 className="text-5xl font-bold">
              {appContent?.faq_section?.title}
            </h1>
            <p className="py-6">{appContent?.faq_section?.para}</p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center pb-10">
          <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-start">

            {appContent?.faq_section?.faqs?.map((faq, index) => (
              <div
                key={index}
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
              >
                <div className="collapse-title text-xl font-medium">
                  {faq?.q}
                </div>
                <div className="collapse-content">
                  <p>{faq?.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
