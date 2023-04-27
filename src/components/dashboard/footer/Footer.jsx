import { useContentContext } from "../../../context/content/ContentContext";

const AdminFooter = () => {
  const { footerContent } = useContentContext();
  return (
    <section id="footer-section" className="py-3">
      <footer className="footer footer-center p-4 rounded-box shadow-md bg-neutral text-neutral-content">
        <div>
          <p>{footerContent?.para}</p>
        </div>
      </footer>
    </section>
  );
};

export default AdminFooter;
