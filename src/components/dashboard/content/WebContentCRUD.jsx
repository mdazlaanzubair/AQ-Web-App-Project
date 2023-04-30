import { useContentContext } from "../../../context/content/ContentContext";
import AboutContent from "./AboutContent";
import HeaderContent from "./HeaderContent";

const WebContentCRUD = () => {
  const {
    headerContent,
    setHeaderContent,
    footerContent,
    setFooterContent,
    aboutContent,
    setAboutContent,
    reviewsContent,
    setReviewsContent,
    servicesContent,
    setServicesContent,
    ctaContent,
    setCtaContent,
    faqContent,
    setFaqContent,
    contactContent,
    setContactContent,
    productsContent,
    setProductsContent,
  } = useContentContext();

  return (
    <>
      <AboutContent />
      <HeaderContent />
    </>
  );
};

export default WebContentCRUD;
