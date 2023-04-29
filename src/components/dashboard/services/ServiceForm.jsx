import { useEffect, useState } from "react";
import { useServicesContext } from "../../../context/services/ServicesContext";
import { toast } from "react-toastify";

const ServiceForm = () => {
  const { selectedService, setSelectedService, createService, updateService } =
    useServicesContext();

  // form states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState({});

  const resetStates = () => {
    setTitle("");
    setDesc("");
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    // Check for errors
    const errors = {};
    if (title.trim() === "") {
      errors.title = "Title is required";
      toast.error(errors.title);
    }
    if (desc.trim() === "") {
      errors.desc = "Description is required";
      toast.error(errors.desc);
    }

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      if (Object.keys(selectedService).length === 0) {
        const newService = {
          id: Date.now() + Math.random(),
          title,
          desc,
        };

        createService(newService);
        toast.success("Service added successfully!");
      } else {
        const updatedService = {
          title,
          desc,
        };

        updateService(selectedService?.id, updatedService);
        toast.success("Service updated successfully!");
      }
      setSelectedService({});
      resetStates();
    } else {
      // Set errors state
      setErrors(errors);
    }
  };

  useEffect(() => {
    if (Object.keys(selectedService).length === 0) resetStates();
    else {
      setTitle(selectedService?.title);
      setDesc(selectedService?.desc);
    }
  }, [selectedService]);

  return (
    <>
      <input
        type="checkbox"
        id="popup_form_services"
        className="modal-toggle"
      />
      <label htmlFor="popup_form_services" className="modal cursor-pointer">
        <label className="modal-box relative">
          <label
            htmlFor="popup_form_services"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <form onSubmit={handelSubmit}>
            <h3 className="text-lg font-bold">
              {Object.keys(selectedService).length === 0
                ? "Add New Service"
                : "Updating " + selectedService?.title}
            </h3>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Service Title</span>
              </label>
              <input
                type="text"
                placeholder="Service Title"
                className="input input-bordered focus:outline-none input-md"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description of service"
                className="textarea textarea-bordered focus:outline-none textarea-md"
                rows={3}
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="capitalize btn btn-block btn-success"
              >
                {Object.keys(selectedService).length === 0
                  ? "Add New Service"
                  : "Update"}
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default ServiceForm;
