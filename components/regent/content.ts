export const navItems = [
  { label: "HOME", href: "#home", hasChevron: false },
  { label: "SERVICES", href: "#services", hasChevron: false },
  { label: "PRODUCTS", href: "#products", hasChevron: true },
  { label: "INDUSTRIES", href: "#industries", hasChevron: false },
  { label: "ABOUT US", href: "#about", hasChevron: false },
  { label: "CONTACTS", href: "#contact", hasChevron: false },
] as const;

export const aboutHighlights = [
  "Advanced Sharpening Technology",
  "Specialized TCT & HSS Expertise",
  "Extended Tool Lifespan",
  "Convenient Pick-Up & Delivery",
] as const;

export const industries = [
  {
    title: "Woodworking Industry",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-woodworking.png",
  },
  {
    title: "Furniture Manufacturing",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-furniture.png",
  },
  {
    title: "Packaging Industry",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-packaging.png",
  },
  {
    title: "Printing Industry",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-printing.png",
  },
  {
    title: "Metal Fabrication",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-metal.png",
  },
  {
    title: "Plastic Processing",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-plastic.png",
  },
] as const;

export const services = [
  {
    title: "Precision Blade Sharpening",
    description:
      "Our advanced sharpening process restores cutting tools to optimal performance using automated grinding machines designed for TCT (Tungsten Carbide Tipped) and HSS (High-Speed Steel) blades. The process ensures accurate grinding angles while maintaining the structural strength of the blade. With integrated cooling technology, we remove scratches, wear, and minor cracks without overheating the metal, extending the lifespan of your tools and ensuring consistent cutting performance.",
    image: "/regent/service-sharpening.png",
    cta: "View Sharpening Process",
  },
  {
    title: "Pick-Up & Delivery Service",
    description:
      "To make blade maintenance simple and convenient, we offer a reliable door-step pickup and delivery service. Our team collects your worn tools directly from your workshop or factory, processes them using our precision sharpening technology, and delivers them back ready for use. This service helps businesses save time, reduce operational interruptions, and maintain production efficiency without leaving the workplace.",
    image: "/regent/service-delivery.png",
    cta: "Contact for More Details",
  },
] as const;

export const productFeatures = [
  {
    title: "Precision Blade Sharpening",
    image: "/regent/product-precision.png",
  },
  {
    title: "Power Tools",
    image: "/regent/product-power.png",
  },
  {
    title: "Tyre Rebuilding",
    image: "/regent/product-tyre.png",
  },
  {
    title: "Woodworking Tools",
    image: "/regent/product-woodworking.png",
  },
  {
    title: "Power Tools Accessories",
    image: "/regent/product-accessories.png",
  },
  {
    title: "Hand Tools",
    image: "/regent/product-handtools.png",
  },
] as const;

export const whyChoosePoints = [
  "Advanced Sharpening Technology",
  "Expertise in TCT & HSS Tools",
  "Extended Tool Lifespan",
  "Integrated Cooling System",
  "Reliable Pick-up & Delivery",
] as const;

export const quickLinks = ["HOME", "Products", "Services", "About us", "Contact us"] as const;

export const footerIndustries = [
  "Woodworking Industry",
  "Furniture Manufacturing",
  "Packaging Industry",
  "Printing Industry",
  "Metal Fabrication",
  "Plastic Processing",
] as const;
