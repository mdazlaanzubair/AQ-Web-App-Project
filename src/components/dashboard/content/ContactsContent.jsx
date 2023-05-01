import { useState } from "react";
import { useContentContext } from "../../../context/content/ContentContext";
import { toast } from "react-toastify";

const ContactsContent = ({}) => {
  const { productsContent, setProductsContent } = useContentContext();
  const { contactContent, setContactContent } = useContentContext();
  const demo_location = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.7782232771283!2d67.11683339999999!3d25.0076508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346dd43717689%3A0xe6786e0953f8d2a2!2sMashriqi%20Cooperative%20Housing%20Society!5e0!3m2!1sen!2s!4v1682955234333!5m2!1sen!2s`;
  const [isDemoLoc, setIsDemoLoc] = useState(false);

  return (
    <section id="about-content" className="py-3">
      <h1 className="text-start text-3xl mb-5 font-bold">Contacts Content</h1>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Headline</h2>
            <input
              type="text"
              placeholder="Headline..."
              className="input input-bordered focus:outline-none w-full"
              value={contactContent.title}
              onChange={(e) =>
                setContactContent((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <p
              className="text-xs underline cursor-pointer"
              onClick={() => {
                setContactContent((prevState) => ({
                  ...prevState,
                  location: demo_location,
                }));
                setIsDemoLoc(!isDemoLoc);
              }}
            >
              demo location link
            </p>
            <h2 className="text-xl font-medium mb-3">Location</h2>
            <input
              type="url"
              placeholder="Location URL..."
              className="input input-bordered focus:outline-none w-full"
              value={isDemoLoc ? demo_location : contactContent.location}
              onChange={(e) =>
                setContactContent((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Paragraph</h2>
            <textarea
              type="text"
              placeholder="Paragraph..."
              className="textarea textarea-bordered focus:outline-none w-full"
              value={contactContent.para}
              rows={3}
              onChange={(e) =>
                setContactContent((prevState) => ({
                  ...prevState,
                  para: e.target.value,
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Contact Number</h2>
            <input
              type="text"
              placeholder="e.g. (555) 123-4567"
              className="input input-bordered focus:outline-none w-full"
              value={contactContent.contactInfo.phone}
              rows={3}
              onChange={(e) =>
                setContactContent((prevState) => ({
                  ...prevState,
                  contactInfo: {
                    ...prevState.contactInfo,
                    phone: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Email Address</h2>
            <input
              type="email"
              placeholder="e.g. abc@eample.com"
              className="input input-bordered focus:outline-none w-full"
              value={contactContent.contactInfo.email}
              rows={3}
              onChange={(e) =>
                setContactContent((prevState) => ({
                  ...prevState,
                  contactInfo: {
                    ...prevState.contactInfo,
                    email: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="col mb-5 w-full">
            <h2 className="text-xl font-medium mb-3">Outlet Address</h2>
            <textarea
              type="email"
              placeholder="e.g. 123 Main Street, Suite 100, Anytown USA"
              className="textarea textarea-bordered focus:outline-none w-full"
              value={contactContent.contactInfo.address}
              rows={2}
              onChange={(e) =>
                setContactContent((prevState) => ({
                  ...prevState,
                  contactInfo: {
                    ...prevState.contactInfo,
                    address: e.target.value,
                  },
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

export default ContactsContent;
