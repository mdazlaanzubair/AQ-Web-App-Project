import { toast } from "react-toastify";
import { useContentContext } from "../../../context/content/ContentContext";

const TestimonialContent = () => {
  const { reviewsContent, setReviewsContent } = useContentContext();

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setReviewsContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <section id="about-content" className="py-3">
      <h1 className="text-start text-3xl mb-5 font-bold">
        Testimonial Content
      </h1>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col col-span-1 w-full">
            <h2 className="text-2xl font-bold mb-3">Main Section</h2>
            <div className="col mb-5 w-full">
              <h2 className="text-xl font-medium mb-3">Headline</h2>
              <input
                type="text"
                placeholder="Headline here..."
                className="input input-bordered focus:outline-none w-full"
                name="title"
                value={reviewsContent.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="col mb-5 w-full">
              <h2 className="text-xl font-medium mb-3">Paragraph</h2>
              <textarea
                type="text"
                placeholder="Paragraph here..."
                className="textarea textarea-bordered focus:outline-none w-full"
                rows={3}
                name="para"
                value={reviewsContent.para}
                onChange={handleInputChange}
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
          <div className="col col-span-2 w-full">
            <h2 className="text-2xl font-bold mb-3">Reviews Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {reviewsContent.reviews.map((review, index) => (
                <div
                  className="col w-full mb-3 bg-base-200 shadow-lg p-5 rounded-box"
                  key={index}
                >
                  <div className="col mb-2 w-full">
                    <h2 className="text-xl font-medium mb-3">
                      Client {index + 1}
                    </h2>
                    <div className="flex flex-row">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered input-group-xs focus:outline-none m-1 w-full"
                        name={`reviews[${index}].author.title`}
                        value={review.author.title}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        placeholder="Designation"
                        className="input input-bordered input-group-xs focus:outline-none m-1 w-full"
                        name={`reviews[${index}].author.title`}
                        value={review.author.title}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col mb-2 w-full">
                    <h2 className="text-xl font-medium mb-3">Comment</h2>
                    <textarea
                      type="text"
                      placeholder="Paragraph here..."
                      className="textarea textarea-bordered textarea-sm focus:outline-none w-full leading-tight"
                      rows={5}
                      name={`reviews[${index}].comment`}
                      value={review.comment}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <form ons>
    //   <br />
    //   {reviewsContent.reviews.map((review, index) => (
    //     <div key={index}>
    //       <label>
    //         Comment:
    //         <input
    //           className="w-full"
    //           type="text"
    //           name={`reviews[${index}].comment`}
    //           value={review.comment}
    //           onChange={handleInputChange}
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Title:
    //         <input
    //           className="w-full"
    //           type="text"
    //           name={`reviews[${index}].author.title`}
    //           value={review.author.title}
    //           onChange={handleInputChange}
    //         />
    //       </label>
    //       <br />
    //     </div>
    //   ))}
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default TestimonialContent;
