import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const useContentContext = () => useContext(ContentContext);

const ContentProvider = ({ children }) => {
  const [appContent, setAppContent] = useState({
    header_section: {
      banners: [
        {
          img: "https://cdn.pixabay.com/photo/2018/04/13/11/14/shoes-3316260_960_720.jpg",
          title:
            "Look and feel your best on the field with our sports apparel.",
          para: "From performance-enhancing materials to stylish designs, our sports apparel has everything you need to take your game to the next level.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2019/02/24/09/10/bulgarian-folk-costume-4017175_960_720.jpg",
          title: "Make a statement with custom-designed jerseys and gear.",
          para: "Create a lasting impression with our custom-designed jerseys and gear, tailored to your unique style and preferences.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_960_720.jpg",
          title:
            "Elevate your game with our high-quality sports products and services.",
          para: "Our top-notch sports products and services are designed to help you perform at your best and achieve your goals.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg",
          title:
            "The perfect balance of style and function for athletes of all levels.",
          para: "We believe that sports apparel should be both functional and fashionable, which is why our products strike the perfect balance between the two.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2020/06/01/10/39/galaxy-5246185_960_720.jpg",
          title:
            "Unlock your potential with our premium sports apparel and equipment.",
          para: "Our premium sports apparel and equipment are designed to help you unlock your full potential and perform at your best.",
        },
        {
          img: "https://cdn.pixabay.com/photo/2019/07/26/12/24/boss-4364677_960_720.jpg",
          title: "Ready to dominate on the field? We've got you covered.",
          para: "Whether you're a beginner or a pro, we have the products and services you need to dominate on the field and achieve your goals.",
        },
      ],
    },
    about_section: {
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
    },
    testimonial_section: {
      title: "Our Satisfied Clients",
      para: "Here's what some of our satisfied clients have to say about our services",
      reviews: [
        {
          comment:
            "I was blown away by the quality of the logo design that this company provided for my business. It perfectly captured the essence of my brand and I have received countless compliments on it. Thank you so much!",
          author: {
            name: "John",
            title: "Small Business Owner",
          },
        },
        {
          comment:
            "The vector tracing service that this company provided exceeded my expectations. They were able to turn my low-quality image into a crisp, high-quality vector image that I was able to use for my business needs. I highly recommend their services.",
          author: {
            name: "Sarah",
            title: "Graphic Designer",
          },
        },
        {
          comment:
            "I was impressed with the attention to detail that the team put into digitizing my logo for embroidery. The stitching was precise and the final product looked amazing. I will definitely be using their services again.",
          author: {
            name: "Michael",
            title: "Apparel Company Owner",
          },
        },
        {
          comment:
            "The custom PVC patches that this company made for my team were exactly what we needed. They were durable and looked great on our jerseys. I highly recommend this company for any custom apparel needs.",
          author: {
            name: "Amanda",
            title: "Sports Team Coach",
          },
        },
        {
          comment:
            "I was blown away by the precision and accuracy of their embroidery digitizing. The final product was exactly what I had envisioned. Thanks for the great work!",
          author: {
            name: "David Lee",
            title: "Owner of DEF Apparel",
          },
        },
        {
          comment:
            "I was amazed by the quality of their work. They designed a logo for my business that perfectly captures our brand's identity. Highly recommend!",
          author: {
            name: "Amanda Jones",
            title: "Owner of GHI Outdoors",
          },
        },
      ],
    },
    services_section: {
      content: {
        title: "What We Offer",
        para: "At [Client Name], we offer a wide range of services to help bring your ideas to life. Our experienced team of designers and technicians use the latest technology and techniques to deliver high-quality results. Here are some of the services we offer:",
      },
      services: [
        {
          title: "Logo Designing",
          desc: "Get a professional logo representing your brand's identity with multiple design concepts and revisions.",
        },
        {
          title: "Jerseys & Apparel Mockups",
          desc: "Create custom mockups to visualize sports jerseys and apparel before printing with our designers' help.",
        },
        {
          title: "Vector Tracing",
          desc: "Convert raster images into high-quality, scalable vectors for printing and other purposes with advanced software and techniques.",
        },
        {
          title: "Color Separation",
          desc: "Separate designs into individual colors for screen printing with advanced color separation techniques for accurate and vibrant colors.",
        },
        {
          title: "Embroidery Digitizing",
          desc: "Digitize designs for accurate and high-quality embroidery using state-of-the-art software and precise stitching.",
        },
        {
          title: "Engraving and Scoring Files",
          desc: "Get precise engraving and scoring files for products with a variety of materials and finishes using advanced technology.",
        },
        {
          title: "3D Engraving",
          desc: "Add depth and dimension to products with custom 3D designs from our team of experts.",
        },
        {
          title: "Embroidered",
          desc: "Professional and high-quality embroidery on apparel and fabrics with a wide variety of thread colors and styles.",
        },
        {
          title: "PVC",
          desc: "Create durable and custom PVC patches or labels for apparel or products that withstand harsh conditions.",
        },
        {
          title: "Leather",
          desc: "Customize size, shape, and color for high-quality and luxurious leather patches or labels.",
        },
        {
          title: "Chenille",
          desc: "Create custom chenille patches or letters with high-quality materials and a variety of colors and sizes.",
        },
        {
          title: "Woven",
          desc: "Unique and high-quality woven designs on apparel and fabrics with precision and attention to detail.",
        },
        {
          title: "Sublimated",
          desc: "Full-color, high-resolution designs for custom sublimated apparel with long-lasting, vibrant colors.",
        },
        {
          title: "Screen Print Transfers",
          desc: "Custom screen-printed transfers for apparel and products with high-quality ink and application to various materials.",
        },
        {
          title: `DTF Gang Sheets [22"x 36"]`,
          desc: "Custom DTF (direct-to-film) transfers for apparel and products with high-quality ink and application to various materials.",
        },
        {
          title: "HTV",
          desc: "Create durable and long-lasting custom heat transfer vinyl designs for apparel and products.",
        },
      ],
    },
    cta_section: {
      title:
        "Stay up-to-date with the latest news, promotions, and tips by subscribing to our newsletter!",
      para: "Don't miss out on exclusive content and special offers - simply enter your email below and hit 'subscribe' to join our community.",
    },
    faq_section: {
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
    },
    contact_section: {
      title: "Contact Us",
      para: `Thank you for your interest in our services! If you have any questions, comments, or inquiries, please don't hesitate to get in touch with us. We're always here to help.\nYou can reach us via phone, email, or our online contact form. Our business hours are Monday to Friday, 9am to 5pm Eastern Standard Time.`,
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.660525839482!2d67.03879251437135!3d24.875441450784603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e60981e679b%3A0x4b87eb87263b364!2sMazar-e-Quaid!5e0!3m2!1sen!2s!4v1681034080145!5m2!1sen!2s",
      contactInfo: {
        phone: "(555) 123-4567",
        email: "info@companyname.com",
        address: "123 Main Street, Suite 100, Anytown USA",
      },
    },
    products_section: {
      content: {
        title: "Our Products",
        para: "Welcome to our collection of high-quality sportswear and custom designs. We offer a wide range of products to choose from, including custom jerseys, t-shirts, hoodies, and more. All of our products are made using premium materials and are designed to provide maximum comfort and durability. Browse our collection below to find the perfect products for your team or organization.",
      },
      products: [
        {
          name: "Fishing Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Fish Pattern",
          category: "Jersey",
          stock: 20,
          price: 39.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay cool and comfortable on your next fishing trip with our Fishing Jersey. Made with moisture-wicking fabric and breathable mesh panels, this jersey is perfect for any angler.",
        },
        {
          name: "Fishing Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Fish Pattern",
          category: "Hoodie",
          stock: 20,
          price: 49.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and comfortable on your next fishing trip with our Fishing Hoodie. Made with soft, fleece-lined fabric and a cozy hood, this hoodie is perfect for any angler.",
        },
        {
          name: "Cornhole Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Cornhole Board Pattern",
          category: "Jersey",
          stock: 20,
          price: 29.99,
          img: "https://picsum.photos/200/300",
          description:
            "Show off your love for cornhole with our Cornhole Jersey. Made with lightweight and breathable fabric, this jersey is perfect for any cornhole player.",
        },
        {
          name: "Cornhole Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Cornhole Board Pattern",
          category: "Hoodie",
          stock: 20,
          price: 39.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and comfortable on your next cornhole game with our Cornhole Hoodie. Made with soft, fleece-lined fabric and a cozy hood, this hoodie is perfect for any cornhole player.",
        },
        {
          name: "Cycling Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Race Pattern",
          category: "Jersey",
          stock: 20,
          price: 49.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay comfortable and stylish on your next ride with our Cycling Jersey. Made with moisture-wicking fabric and a slim fit design, this jersey is perfect for any cyclist.",
        },
        {
          name: "Cycling Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Race Pattern",
          category: "Hoodie",
          stock: 20,
          price: 59.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and comfortable on your next ride with our Cycling Hoodie. Made with soft, fleece-lined fabric and a cozy hood, this hoodie is perfect for any cyclist.",
        },
        {
          name: "Baseball Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Team Logo",
          category: "Jersey",
          stock: 20,
          price: 44.99,
          img: "https://picsum.photos/200/300",
          description:
            "Step up to the plate in style with our Baseball Jersey. Made with breathable mesh fabric and moisture-wicking technology, this jersey is perfect for any baseball player.",
        },
        {
          name: "Baseball Pants",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Solid Color",
          category: "Pants",
          stock: 20,
          price: 34.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay comfortable and agile on the field with our Baseball Pants. Made with stretchy, lightweight fabric and reinforced knee patches, these pants are perfect for any baseball player.",
        },
        {
          name: "American Football Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Team Logo",
          category: "Jersey",
          stock: 20,
          price: 59.99,
          img: "https://picsum.photos/200/300",
          description:
            "Score a touchdown in style with our American Football Jersey. Made with durable, moisture-wicking fabric and a comfortable fit, this jersey is perfect for any football player.",
        },
        {
          name: "Ice Hockey Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Team Logo",
          category: "Jersey",
          stock: 20,
          price: 69.99,
          img: "https://picsum.photos/200/300",
          description:
            "Take to the ice in style with our Ice Hockey Jersey. Made with breathable mesh fabric and reinforced elbows, this jersey is perfect for any hockey player.",
        },
        {
          name: "Racing Jersey",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Racing Stripe",
          category: "Jersey",
          stock: 20,
          price: 79.99,
          img: "https://picsum.photos/200/300",
          description:
            "Feel the need for speed in our Racing Jersey. Made with moisture-wicking fabric and a sleek design, this jersey is perfect for any race car driver or enthusiast.",
        },
        {
          name: "Racing Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
          design: "Racing Stripe",
          category: "Hoodie",
          stock: 20,
          price: 89.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and comfortable in the pits with our Racing Hoodie. Made with soft, fleece-lined fabric and a sleek design, this hoodie is perfect for any race car driver or enthusiast.",
        },
        {
          name: "Billiards Jersey",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Billiards design",
          category: "Jersey",
          stock: 20,
          price: 45.99,
          img: "https://picsum.photos/200/300",
          description:
            "Get your game on with our comfortable and customizable billiards jersey!",
        },
        {
          name: "Billiards Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Billiards design",
          category: "Hoodie",
          stock: 20,
          price: 59.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and stylish while playing pool with our customizable billiards hoodie!",
        },
        {
          name: "Shooting Jersey",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Shooting design",
          category: "Jersey",
          stock: 20,
          price: 49.99,
          img: "https://picsum.photos/200/300",
          description:
            "A perfect shooting shirt with a great fit. Customize your look and take your shot!",
        },
        {
          name: "Shooting Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Shooting design",
          category: "Hoodie",
          stock: 20,
          price: 64.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and comfortable while practicing your aim in our customizable shooting hoodie!",
        },
        {
          name: "Soccer Jersey",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Soccer design",
          category: "Jersey",
          stock: 20,
          price: 39.99,
          img: "https://picsum.photos/200/300",
          description:
            "Get ready to score some goals with our comfortable and customizable soccer jersey!",
        },
        {
          name: "Reversible Jersey",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable design on both sides",
          category: "Jersey",
          stock: 20,
          price: 54.99,
          img: "https://picsum.photos/200/300",
          description:
            "Versatile and stylish, our reversible jersey lets you switch up your look on the fly!",
        },
        {
          name: "Frisbee Disc Golf Jersey",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Frisbee Disc Golf design",
          category: "Jersey",
          stock: 20,
          price: 44.99,
          img: "https://picsum.photos/200/300",
          description:
            "Fly high and far with our customizable frisbee disc golf jersey!",
        },
        {
          name: "Frisbee Disc Golf Hoodie",
          sizes: ["S", "M", "L", "XL", "2XL"],
          design: "Customizable Frisbee Disc Golf design",
          category: "Hoodie",
          stock: 20,
          price: 59.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay warm and stylish while playing frisbee disc golf with our customizable hoodie!",
        },
        {
          name: "Frisbee Disc Golf Jersey",
          sizes: ["S", "M", "L", "XL"],
          design: "Graphic Print",
          category: "Jersey",
          stock: 20,
          price: 29.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay comfortable and stylish on the course with this Frisbee Disc Golf Jersey, featuring a unique graphic print design.",
        },
        {
          name: "Frisbee Disc Golf Hoodie",
          sizes: ["S", "M", "L", "XL"],
          design: "Embroidered Logo",
          category: "Hoodie",
          stock: 20,
          price: 49.99,
          img: "https://picsum.photos/200/300",
          description:
            "Keep warm and show off your Frisbee Disc Golf love with this cozy hoodie, featuring an embroidered logo on the chest.",
        },
        {
          name: "Lacrosse Jersey",
          sizes: ["S", "M", "L", "XL"],
          design: "Mesh Panels",
          category: "Jersey",
          stock: 20,
          price: 39.99,
          img: "https://picsum.photos/200/300",
          description:
            "Stay cool and comfortable on the field with this Lacrosse Jersey, featuring breathable mesh panels and a stylish design.",
        },
        {
          name: "Custom Sports Shorts",
          sizes: ["S", "M", "L", "XL"],
          design: "Customizable",
          category: "Shorts",
          stock: 20,
          price: 24.99,
          img: "https://picsum.photos/200/300",
          description:
            "Get the perfect fit and look with these Custom Sports Shorts, featuring a customizable design to match your team or personal style.",
        },
        {
          name: "Custom Polo Shirt",
          sizes: ["S", "M", "L", "XL"],
          design: "Embroidered Logo",
          category: "Polo",
          stock: 20,
          price: 34.99,
          img: "https://picsum.photos/200/300",
          description:
            "Dress up or down with this Custom Polo Shirt, featuring an embroidered logo on the chest and a variety of colors to choose from.",
        },
        {
          name: "Blank T-Shirt",
          sizes: ["S", "M", "L", "XL"],
          design: "Plain",
          category: "T-Shirt",
          stock: 20,
          price: 9.99,
          img: "https://picsum.photos/200/300",
          description:
            "Keep it simple and versatile with this Blank T-Shirt, available in a variety of colors and perfect for screen print transfers or vinyl transfers.",
        },
        {
          name: "Screen Print Transfer",
          sizes: ["N/A"],
          design: "Customizable",
          category: "Transfer",
          stock: 20,
          price: 1.99,
          img: "https://picsum.photos/200/300",
          description:
            "Create your own custom designs and logos with these Screen Print Transfers, available in various sizes and suitable for a variety of fabrics.",
        },
        {
          name: "Direct-to-Fabric Transfer",
          sizes: ["N/A"],
          design: "Customizable",
          category: "Transfer",
          stock: 20,
          price: 2.99,
          img: "https://picsum.photos/200/300",
          description:
            "Bring your designs to life with these Direct-to-Fabric Transfers, which use a special printing process to achieve a professional look on your chosen fabric.",
        },
        {
          name: "Custom Vinyl Transfers",
          sizes: "Various sizes available",
          design: "Customizable design",
          category: "Heat Transfer Vinyl",
          stock: 20,
          price: "$5.99 per sheet",
          img: "https://picsum.photos/200/300",
          description:
            "Create your own custom designs with our high-quality heat transfer vinyl sheets. Simply cut your design with a vinyl cutter or scissors and apply using a heat press or iron. Available in a variety of colors and sizes.",
        },
      ],
    },
  });

  const value = { appContent, setAppContent };
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
