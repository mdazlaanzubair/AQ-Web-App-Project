const products = [
  {
    name: "Fishing Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 39.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay cool and comfortable on your next fishing trip with our Fishing Jersey. Made with moisture-wicking fabric and breathable mesh panels, this jersey is perfect for any angler.",
  },
  {
    name: "Fishing Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Hoodie",
    stock: 20,
    price: 49.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and comfortable on your next fishing trip with our Fishing Hoodie. Made with soft, fleece-lined fabric and a cozy hood, this hoodie is perfect for any angler.",
  },
  {
    name: "Cornhole Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 29.99,
    img: "https://picsum.photos/200/300",
    desc: "Show off your love for cornhole with our Cornhole Jersey. Made with lightweight and breathable fabric, this jersey is perfect for any cornhole player.",
  },
  {
    name: "Cornhole Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Hoodie",
    stock: 20,
    price: 39.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and comfortable on your next cornhole game with our Cornhole Hoodie. Made with soft, fleece-lined fabric and a cozy hood, this hoodie is perfect for any cornhole player.",
  },
  {
    name: "Cycling Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 49.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay comfortable and stylish on your next ride with our Cycling Jersey. Made with moisture-wicking fabric and a slim fit design, this jersey is perfect for any cyclist.",
  },
  {
    name: "Cycling Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Hoodie",
    stock: 20,
    price: 59.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and comfortable on your next ride with our Cycling Hoodie. Made with soft, fleece-lined fabric and a cozy hood, this hoodie is perfect for any cyclist.",
  },
  {
    name: "Baseball Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 44.99,
    img: "https://picsum.photos/200/300",
    desc: "Step up to the plate in style with our Baseball Jersey. Made with breathable mesh fabric and moisture-wicking technology, this jersey is perfect for any baseball player.",
  },
  {
    name: "Baseball Pants",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Pants",
    stock: 20,
    price: 34.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay comfortable and agile on the field with our Baseball Pants. Made with stretchy, lightweight fabric and reinforced knee patches, these pants are perfect for any baseball player.",
  },
  {
    name: "American Football Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 59.99,
    img: "https://picsum.photos/200/300",
    desc: "Score a touchdown in style with our American Football Jersey. Made with durable, moisture-wicking fabric and a comfortable fit, this jersey is perfect for any football player.",
  },
  {
    name: "Ice Hockey Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 69.99,
    img: "https://picsum.photos/200/300",
    desc: "Take to the ice in style with our Ice Hockey Jersey. Made with breathable mesh fabric and reinforced elbows, this jersey is perfect for any hockey player.",
  },
  {
    name: "Racing Jersey",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Jersey",
    stock: 20,
    price: 79.99,
    img: "https://picsum.photos/200/300",
    desc: "Feel the need for speed in our Racing Jersey. Made with moisture-wicking fabric and a sleek design, this jersey is perfect for any race car driver or enthusiast.",
  },
  {
    name: "Racing Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    category: "Hoodie",
    stock: 20,
    price: 89.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and comfortable in the pits with our Racing Hoodie. Made with soft, fleece-lined fabric and a sleek design, this hoodie is perfect for any race car driver or enthusiast.",
  },
  {
    name: "Billiards Jersey",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Jersey",
    stock: 20,
    price: 45.99,
    img: "https://picsum.photos/200/300",
    desc: "Get your game on with our comfortable and customizable billiards jersey!",
  },
  {
    name: "Billiards Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Hoodie",
    stock: 20,
    price: 59.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and stylish while playing pool with our customizable billiards hoodie!",
  },
  {
    name: "Shooting Jersey",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Jersey",
    stock: 20,
    price: 49.99,
    img: "https://picsum.photos/200/300",
    desc: "A perfect shooting shirt with a great fit. Customize your look and take your shot!",
  },
  {
    name: "Shooting Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Hoodie",
    stock: 20,
    price: 64.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and comfortable while practicing your aim in our customizable shooting hoodie!",
  },
  {
    name: "Soccer Jersey",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Jersey",
    stock: 20,
    price: 39.99,
    img: "https://picsum.photos/200/300",
    desc: "Get ready to score some goals with our comfortable and customizable soccer jersey!",
  },
  {
    name: "Reversible Jersey",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Jersey",
    stock: 20,
    price: 54.99,
    img: "https://picsum.photos/200/300",
    desc: "Versatile and stylish, our reversible jersey lets you switch up your look on the fly!",
  },
  {
    name: "Frisbee Disc Golf Jersey",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Jersey",
    stock: 20,
    price: 44.99,
    img: "https://picsum.photos/200/300",
    desc: "Fly high and far with our customizable frisbee disc golf jersey!",
  },
  {
    name: "Frisbee Disc Golf Hoodie",
    sizes: ["S", "M", "L", "XL", "2XL"],
    category: "Hoodie",
    stock: 20,
    price: 59.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay warm and stylish while playing frisbee disc golf with our customizable hoodie!",
  },
  {
    name: "Frisbee Disc Golf Jersey",
    sizes: ["S", "M", "L", "XL"],
    category: "Jersey",
    stock: 20,
    price: 29.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay comfortable and stylish on the course with this Frisbee Disc Golf Jersey, featuring a unique graphic print design.",
  },
  {
    name: "Frisbee Disc Golf Hoodie",
    sizes: ["S", "M", "L", "XL"],
    category: "Hoodie",
    stock: 20,
    price: 49.99,
    img: "https://picsum.photos/200/300",
    desc: "Keep warm and show off your Frisbee Disc Golf love with this cozy hoodie, featuring an embroidered logo on the chest.",
  },
  {
    name: "Lacrosse Jersey",
    sizes: ["S", "M", "L", "XL"],
    category: "Jersey",
    stock: 20,
    price: 39.99,
    img: "https://picsum.photos/200/300",
    desc: "Stay cool and comfortable on the field with this Lacrosse Jersey, featuring breathable mesh panels and a stylish design.",
  },
  {
    name: "Custom Sports Shorts",
    sizes: ["S", "M", "L", "XL"],
    category: "Shorts",
    stock: 20,
    price: 24.99,
    img: "https://picsum.photos/200/300",
    desc: "Get the perfect fit and look with these Custom Sports Shorts, featuring a customizable design to match your team or personal style.",
  },
  {
    name: "Custom Polo Shirt",
    sizes: ["S", "M", "L", "XL"],
    category: "Polo",
    stock: 20,
    price: 34.99,
    img: "https://picsum.photos/200/300",
    desc: "Dress up or down with this Custom Polo Shirt, featuring an embroidered logo on the chest and a variety of colors to choose from.",
  },
  {
    name: "Blank T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    category: "T-Shirt",
    stock: 20,
    price: 9.99,
    img: "https://picsum.photos/200/300",
    desc: "Keep it simple and versatile with this Blank T-Shirt, available in a variety of colors and perfect for screen print transfers or vinyl transfers.",
  },
  {
    name: "Screen Print Transfer",
    sizes: ["N/A"],
    category: "Transfer",
    stock: 20,
    price: 1.99,
    img: "https://picsum.photos/200/300",
    desc: "Create your own custom designs and logos with these Screen Print Transfers, available in various sizes and suitable for a variety of fabrics.",
  },
  {
    name: "Direct-to-Fabric Transfer",
    sizes: ["N/A"],
    category: "Transfer",
    stock: 20,
    price: 2.99,
    img: "https://picsum.photos/200/300",
    desc: "Bring your designs to life with these Direct-to-Fabric Transfers, which use a special printing process to achieve a professional look on your chosen fabric.",
  },
  {
    name: "Custom Vinyl Transfers",
    sizes: ["S", "M", "L", "XL"],
    category: "Heat Transfer Vinyl",
    stock: 20,
    price: "$5.99 per sheet",
    img: "https://picsum.photos/200/300",
    desc: "Create your own custom designs with our high-quality heat transfer vinyl sheets. Simply cut your design with a vinyl cutter or scissors and apply using a heat press or iron. Available in a variety of colors and sizes.",
  },
];

const services = [
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
];