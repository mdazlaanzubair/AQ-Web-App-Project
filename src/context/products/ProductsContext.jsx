import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
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
  ]);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
