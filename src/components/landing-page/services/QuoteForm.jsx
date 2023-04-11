import { useState } from "react";

const QuoteForm = ({ services }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [chosenService, setChosenService] = useState(services[0]?.title);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileInput = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const allowedFormats = ["jpg", "jpeg", "png", "psd", "ai", "esp"];
    const maxFileSize = 500 * 1024 * 1024; // 500 MB

    if (file && !allowedFormats.includes(file.name.split(".").pop())) {
      setError(
        "File format not supported. Allowed formats are JPG, JPEG and PNG."
      );
    } else if (file.size > maxFileSize) {
      setError("File size exceeds the maximum limit of 500 MB.");
    } else {
      setFile(file);
      e.target.value = null;
      setError(null);
    }
  };

  const askForQuote = (e) => {
    e.preventDefault();

    const quoteRequest = {
      username,
      email,
      contact,
      message,
      file,
      service: chosenService,
    };

    console.log(quoteRequest);
    confirm(JSON.stringify(quoteRequest));

    // emptying form
    setUsername("");
    setEmail("");
    setContact("");
    setMessage("");
    setChosenService(services[0]?.title);
    setFile(null);
    setError(null);
  };

  return (
    <>
      <input type="checkbox" id="order_form" className="modal-toggle" />
      <label htmlFor="order_form" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl font-bold">
                Ask for a Custom Quote
              </h2>
              <form className="form" onSubmit={askForQuote}>
                <div className="form-control mb-3">
                  <label className="label text-base font-medium">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered focus:outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    minLength="3"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="form-control mb-3">
                  <label className="label text-base font-medium">
                    <span className="label-text">E-mail Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. abc@example.com"
                    className="input input-bordered focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="form-control mb-3">
                  <label className="label text-base font-medium">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. (+92) XXX XXXXXXX)"
                    className="input input-bordered focus:outline-none"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    maxLength="14"
                    required
                  />
                </div>
                <div className="form-control mb-3">
                  <label className="label text-base font-medium">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="How we can help you?"
                    className="textarea textarea-bordered focus:outline-none"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows={5}
                    minLength="10"
                    maxLength="1200"
                    required
                  />
                </div>
                <div className="form-control mb-3">
                  <label className="label text-base font-medium">
                    <span className="label-text">Select a service</span>
                  </label>
                  <select
                    className="select select-bordered focus:outline-none"
                    onChange={(e) => setChosenService(e.target.value)}
                    defaultValue={chosenService}
                  >
                    {services?.map((service) => (
                      <option value={service?.title}>{service?.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-control mb-3">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Pick a File{" "}
                      <em className="text-xs font-thin">(optional)</em>
                    </span>
                  </label>
                  <input
                    type="file"
                    className="file-input"
                    onChange={handleFileInput}
                  />
                  <label className="label">
                    {error ? (
                      <span className="label-text text-error">{error}</span>
                    ) : (
                      <span className="label-text">
                        Maximum file size must be
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <button
                    type="submit"
                    className="btn btn-primary capitalize disabled"
                    disabled={error ? "disabled" : ""}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default QuoteForm;
