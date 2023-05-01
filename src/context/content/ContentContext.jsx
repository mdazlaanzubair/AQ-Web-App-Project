import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const useContentContext = () => useContext(ContentContext);

const ContentProvider = ({ children }) => {
  const [headerContent, setHeaderContent] = useState([
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2018/04/13/11/14/shoes-3316260_960_720.jpg",
      title: "Look and feel your best on the field with our sports apparel.",
      para: "From performance-enhancing materials to stylish designs, our sports apparel has everything you need to take your game to the next level.",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2019/02/24/09/10/bulgarian-folk-costume-4017175_960_720.jpg",
      title: "Make a statement with custom-designed jerseys and gear.",
      para: "Create a lasting impression with our custom-designed jerseys and gear, tailored to your unique style and preferences.",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_960_720.jpg",
      title:
        "Elevate your game with our high-quality sports products and services.",
      para: "Our top-notch sports products and services are designed to help you perform at your best and achieve your goals.",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2019/07/06/11/49/woman-4320328_960_720.jpg",
      title:
        "The perfect balance of style and function for athletes of all levels.",
      para: "We believe that sports apparel should be both functional and fashionable, which is why our products strike the perfect balance between the two.",
    },
  ]);

  const [footerContent, setFooterContent] = useState({
    para: "Copyright © 2023 - All right reserved by RK Custom Apparels",
  });

  const [aboutContent, setAboutContent] = useState({
    title: "Who We Are",
    para: "Welcome to our company! We are a team of creative professionals dedicated to providing high-quality design and customization services for apparel, products, and branding. Our mission is to help businesses and individuals express their unique identities through personalized designs and products.",
    mission: {
      title: "Our Mission",
      para: "Our mission is to provide our clients with exceptional design and printing services that help them build and strengthen their brands. We strive to deliver outstanding customer service and to always exceed our clients' expectations. We are committed to continuous improvement and innovation, and we take pride in the quality of our work.",
    },
    vision: {
      title: "Our Vision",
      para: "Our vision is to become a trusted partner for our clients by delivering exceptional customer service and innovative design solutions that exceed expectations. We strive to build lasting relationships with our clients and to be recognized as a leader in the design and customization industry.",
    },
  });

  const [reviewsContent, setReviewsContent] = useState({
    title: "Our Satisfied Clients",
    para: "Here's what some of our satisfied clients have to say about our services",
    reviews: [
      {
        id: 1,
        comment:
          "I was blown away by the quality of the logo design that this company provided for my business. It perfectly captured the essence of my brand and I have received countless compliments on it. Thank you so much!",
        author: {
          name: "John",
          title: "Small Business Owner",
        },
      },
      {
        id: 2,
        comment:
          "The vector tracing service that this company provided exceeded my expectations. They were able to turn my low-quality image into a crisp, high-quality vector image that I was able to use for my business needs. I highly recommend their services.",
        author: {
          name: "Sarah",
          title: "Graphic Designer",
        },
      },
      {
        id: 3,
        comment:
          "I was impressed with the attention to detail that the team put into digitizing my logo for embroidery. The stitching was precise and the final product looked amazing. I will definitely be using their services again.",
        author: {
          name: "Michael",
          title: "Apparel Company Owner",
        },
      },
      // {
      //   id: 4,
      //   comment:
      //     "The custom PVC patches that this company made for my team were exactly what we needed. They were durable and looked great on our jerseys. I highly recommend this company for any custom apparel needs.",
      //   author: {
      //     name: "Amanda",
      //     title: "Sports Team Coach",
      //   },
      // },
      // {
      //   id: 5,
      //   comment:
      //     "I was blown away by the precision and accuracy of their embroidery digitizing. The final product was exactly what I had envisioned. Thanks for the great work!",
      //   author: {
      //     name: "David Lee",
      //     title: "Owner of DEF Apparel",
      //   },
      // },
      // {
      //   id: 6,
      //   comment:
      //     "I was amazed by the quality of their work. They designed a logo for my business that perfectly captures our brand's identity. Highly recommend!",
      //   author: {
      //     name: "Amanda Jones",
      //     title: "Owner of GHI Outdoors",
      //   },
      // },
    ],
  });

  const [servicesContent, setServicesContent] = useState({
    content: {
      title: "What We Offer",
      para: "At [Client Name], we offer a wide range of services to help bring your ideas to life. Our experienced team of designers and technicians use the latest technology and techniques to deliver high-quality results. Here are some of the services we offer:",
    },
  });

  const [ctaContent, setCtaContent] = useState({
    title:
      "Stay up-to-date with the latest news, promotions, and tips by subscribing to our newsletter!",
    para: "Don't miss out on exclusive content and special offers - simply enter your email below and hit 'subscribe' to join our community.",
  });

  const [faqContent, setFaqContent] = useState({
    title: "Frequently Asked Questions",
    para: "Got questions about our services? Check out our FAQ section below for some answers to commonly asked questions. If you can't find what you're looking for, don't hesitate to contact us directly. We're always here to help!",
    faqs: [
      {
        q: "What is the turnaround time for logo designing?",
        a: "The turnaround time for logo designing varies based on the complexity of the design and the number of revisions required. Typically, we aim to provide the initial design concepts within 3-5 business days and allow for 1-2 revisions within an additional 2-3 business days.",
      },
      {
        q: "What is vector tracing?",
        a: "Vector tracing is the process of converting a raster image (such as a JPEG or PNG) into a vector image, which can be scaled to any size without losing quality. This is important for printing and other uses where a high-quality image is necessary.",
      },
      {
        q: "Can you provide mockups for jerseys and other apparel?",
        a: "Yes, we can create custom mockups for your sports jerseys and other apparel to help you visualize the final product before printing. Our team of designers can help you with the design process as well.",
      },
      {
        q: "What is embroidery digitizing?",
        a: "Embroidery digitizing is the process of converting a logo or design into a digital file that can be used by an embroidery machine. This ensures accurate and high-quality stitching for a professional finish.",
      },
      {
        q: "What is the difference between PVC and leather patches?",
        a: "PVC patches are made of a flexible and durable plastic material, while leather patches are made of genuine leather. Both options are high-quality and can add a professional touch to your products, but the choice ultimately depends on your preferences and the desired aesthetic.",
      },
      {
        q: "Can you create custom thread colors for embroidery?",
        a: "Yes, we offer a wide variety of thread colors and can even create custom colors to match your branding or design needs.",
      },
      {
        q: "What is the difference between sublimation and screen printing?",
        a: "Sublimation is a printing process where the ink is infused into the fabric, resulting in a more vibrant and long-lasting print. Screen printing involves pushing ink through a stencil onto the fabric, creating a more textured finish. Both options have their advantages and can be used depending on your design needs.",
      },
    ],
  });

  const [contactContent, setContactContent] = useState({
    title: "Contact Us",
    para: `Thank you for your interest in our services! If you have any questions, comments, or inquiries, please don't hesitate to get in touch with us. We're always here to help.\nYou can reach us via phone, email, or our online contact form. Our business hours are Monday to Friday, 9am to 5pm Eastern Standard Time.`,
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.660525839482!2d67.03879251437135!3d24.875441450784603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e60981e679b%3A0x4b87eb87263b364!2sMazar-e-Quaid!5e0!3m2!1sen!2s!4v1681034080145!5m2!1sen!2s",
    contactInfo: {
      phone: "(555) 123-4567",
      email: "info@companyname.com",
      address: "123 Main Street, Suite 100, Anytown USA",
    },
  });

  const [productsContent, setProductsContent] = useState({
    content: {
      title: "Our Products",
      para: "Welcome to our collection of high-quality sportswear and custom designs. We offer a wide range of products to choose from, including custom jerseys, t-shirts, hoodies, and more. All of our products are made using premium materials and are designed to provide maximum comfort and durability. Browse our collection below to find the perfect products for your team or organization.",
    },
  });

  const value = {
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
  };
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
