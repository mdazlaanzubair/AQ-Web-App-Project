import { useContentContext } from "../../../context/content/ContentContext";
import { useThemeContext } from "../../../context/theme/ThemeContext";

const Contact = () => {
  const { darkMode } = useThemeContext();
  const { appContent } = useContentContext();
  return (
    <section id="contact-section" className="py-3">
      <div className="hero min-h-screen bg-base-200 rounded-box relative">
        <iframe
          src={appContent?.contact_section?.location}
          style={{
            top: 0,
            left: 0,
            border: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            filter: darkMode ? "invert(90%)" : "",
          }}
          className="rounded-box"
          lowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          filter="invert"
        ></iframe>
        <div className="hero-content flex-col pt-10 justify-center items-start">
          <div className="card bg-base-100 shadow-2xl">
            <div className="w-full card-body flex flex-col lg:flex-row justify-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-xl md:text-3xl font-bold lg:text-5xl lg:text-left text-center">
                  {appContent?.contact_section?.title}
                </h1>
                <p className="mb-5 text-sm font-light lg:text-left text-center">
                  {appContent?.contact_section?.para}
                </p>
                <ul>
                  <li className="flex flex-row items-center my-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 inline-block"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ms-2">
                      {appContent?.contact_section?.contactInfo?.phone}
                    </span>
                  </li>
                  <li className="flex flex-row items-center my-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 inline-block"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>

                    <span className="ms-2">
                      <a
                        href={`mailto:${appContent?.contact_section?.contactInfo?.email}`}
                        className="text-primary underline"
                      >
                        {appContent?.contact_section?.contactInfo?.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex flex-row items-center my-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 inline-block"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ms-2">
                      {appContent?.contact_section?.contactInfo?.address}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="max-w-lg">
                <div className="form-control mb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered focus:outline-none"
                  />
                </div>
                <div className="form-control mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered focus:outline-none"
                  />
                </div>
                <div className="form-control mb-3">
                  <textarea
                    type="text"
                    placeholder="Your message"
                    rows={4}
                    className="textarea textarea-bordered focus:outline-none"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary flex justify-between">
                    <span>Send It Now!</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-2 -rotate-45"
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
