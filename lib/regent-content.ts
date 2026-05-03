import { siteConfig } from "@/lib/site-config";

export const navItems = [
  { label: "HOME", href: "/", hasChevron: false },
  { label: "SERVICES", href: "/services", hasChevron: false },
  { label: "PRODUCTS", href: "/products", hasChevron: false },
  { label: "INDUSTRIES", href: "/#industries", hasChevron: false },
  { label: "ABOUT US", href: "/#about", hasChevron: false },
  { label: "CONTACT", href: "/contact", hasChevron: false },
] as const;

export const aboutHighlights = [
  siteConfig.experienceLabel,
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
    title: "Arden Router Bits",
    image: "/regent/product-woodworking.png",
  },
  {
    title: "Power Tools",
    image: "/regent/product-power.png",
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
  siteConfig.experienceLabel,
  "Advanced Sharpening Technology",
  "Expertise in TCT & HSS Tools",
  "Extended Tool Lifespan",
  "Integrated Cooling System",
  "Reliable Pick-up & Delivery",
] as const;

export const quickLinks = [
  { label: "HOME", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/#about" },
  { label: "Contact us", href: "/contact" },
] as const;

export const footerIndustries = [
  "Woodworking Industry",
  "Furniture Manufacturing",
  "Packaging Industry",
  "Printing Industry",
  "Metal Fabrication",
  "Plastic Processing",
] as const;

export const contactEmail = siteConfig.email;

export const contactNumbers = siteConfig.phoneNumbers.map((phone) => phone.label);

export const contactAddress = siteConfig.address;

export const contactHighlights = [
  {
    title: "Call Our Team",
    body: "Reach our sharpening and logistics team directly for scheduling, pricing, and pickup coordination.",
  },
  {
    title: "Email Your Inquiry",
    body: "Send blade specifications, machine details, or pickup requests and we will route them to the correct team.",
  },
  {
    title: "Visit Our Facility",
    body: "Drop off tooling or discuss recurring sharpening needs with the Regent Technologies team in Moratuwa.",
  },
] as const;

export const contactSupportPoints = [
  "Pickup and delivery coordination for industrial blade sharpening",
  "Support for TCT and HSS blade maintenance requirements",
  "Product guidance for workshops, factories, and woodworking operations",
  "Direct guidance for workshops, factories, and production teams",
  "Fast response for repeat-service and ongoing operational needs",
] as const;

export const serviceBenefits = [
  "Exact grinding angles for consistent cutting performance",
  "Integrated cooling to protect blade hardness during sharpening",
  "Reliable pickup and delivery for industrial customers",
  "Support for repeat-service maintenance schedules",
] as const;

export const serviceProcess = [
  {
    title: "Blade Assessment",
    body: "We inspect wear patterns, edge condition, and blade geometry before selecting the correct sharpening path.",
  },
  {
    title: "Automated Precision Grinding",
    body: "Our sharpening machines restore the edge profile with repeatable accuracy for TCT and HSS tooling.",
  },
  {
    title: "Cooling And Finishing",
    body: "Integrated cooling and careful finishing reduce heat stress, surface damage, and premature tool failure.",
  },
  {
    title: "Return To Operation",
    body: "Blades are packed for return or coordinated for delivery so production teams can get back to work quickly.",
  },
] as const;

export const productCatalog = [
  {
    slug: "precision-blade-sharpening",
    title: "Precision Blade Sharpening",
    category: "Sharpening Services",
    image: "/regent/product-precision.png",
    summary: "Automated blade sharpening support for industrial cutting performance and edge recovery.",
  },
  {
    slug: "power-tools",
    title: "Power Tools",
    category: "Machines & Tools",
    image: "/regent/product-power.png",
    summary: "Professional-grade power tools selected for workshop and production-floor use.",
  },
  {
    slug: "arden-router-bits",
    title: "Arden Router Bits",
    category: "Featured Brand",
    image: "/regent/product-woodworking.png",
    summary: "Regent Technologies is the sole agent for Arden Router Bits, supporting precision woodworking and production applications.",
  },
  {
    slug: "tyre-rebuilding",
    title: "Tyre Rebuilding",
    category: "Industrial Equipment",
    image: "/regent/product-tyre.png",
    summary: "Specialized support solutions and related tooling for tyre rebuilding operations.",
  },
  {
    slug: "woodworking-tools",
    title: "Woodworking Tools",
    category: "Cutting Tools",
    image: "/regent/product-woodworking.png",
    summary: "Cutting tools and accessories designed for woodworking accuracy and durability.",
  },
  {
    slug: "power-tools-accessories",
    title: "Power Tools Accessories",
    category: "Accessories",
    image: "/regent/product-accessories.png",
    summary: "Consumables, fittings, and accessory products to keep tool systems running reliably.",
  },
  {
    slug: "hand-tools",
    title: "Hand Tools",
    category: "Workshop Essentials",
    image: "/regent/product-handtools.png",
    summary: "Workshop-ready hand tools for technicians, maintenance teams, and fabrication use.",
  },
  {
    slug: "tct-blades",
    title: "TCT Blades",
    category: "Cutting Tools",
    image: "/regent/product-woodworking.png",
    summary: "Tungsten carbide tipped blades suited for industrial cutting applications and repeat sharpening cycles.",
  },
  {
    slug: "hss-blades",
    title: "HSS Blades",
    category: "Cutting Tools",
    image: "/regent/product-precision.png",
    summary: "High-speed steel blade support for customers who need reliable sharpening turnaround and tool care.",
  },
  {
    slug: "industrial-drills",
    title: "Industrial Drills",
    category: "Machines & Tools",
    image: "/regent/product-power.png",
    summary: "Heavy-duty drill equipment and compatible systems for demanding workshop environments.",
  },
  {
    slug: "rebuild-wheel-systems",
    title: "Rebuild Wheel Systems",
    category: "Industrial Equipment",
    image: "/regent/product-tyre.png",
    summary: "Equipment support options and compatible tooling for rebuild and restoration workflows.",
  },
  {
    slug: "maintenance-kits",
    title: "Maintenance Kits",
    category: "Accessories",
    image: "/regent/product-accessories.png",
    summary: "Support kits and workshop consumables for routine maintenance and quick on-site servicing.",
  },
  {
    slug: "technician-toolkits",
    title: "Technician Toolkits",
    category: "Workshop Essentials",
    image: "/regent/product-handtools.png",
    summary: "Portable toolkits prepared for workshop technicians and field-ready service teams.",
  },
] as const;

export const faqItems = [
  {
    question: "What types of blades do you sharpen?",
    answer:
      "We focus on TCT (Tungsten Carbide Tipped) and HSS (High-Speed Steel) cutting tools used across industrial operations, workshops, and manufacturing environments.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer:
      "Yes. Regent Technologies provides pickup and delivery coordination so customers can keep maintenance moving without interrupting production unnecessarily.",
  },
  {
    question: "How do I request a sharpening service?",
    answer:
      "You can contact us by phone or email with your blade details, quantity, and preferred timing. We will confirm the right service flow and coordinate the next steps.",
  },
  {
    question: "Can you support repeat or scheduled sharpening work?",
    answer:
      "Yes. We can work with ongoing industrial customers who need recurring sharpening and predictable service coordination for operational continuity.",
  },
  {
    question: "Why use automated sharpening instead of manual grinding?",
    answer:
      "Automated sharpening provides more consistent geometry, repeatable grinding accuracy, and better control over edge recovery for production-critical tooling.",
  },
  {
    question: "Does cooling matter during sharpening?",
    answer:
      "Yes. Cooling helps reduce overheating, protects blade integrity, and supports a cleaner finish, which is especially important for extending tool life.",
  },
  {
    question: "Can I ask about products as well as services?",
    answer:
      "Absolutely. We can help with both sharpening-related services and the relevant tools, accessories, and workshop products shown in our catalog.",
  },
  {
    question: "Do you supply Arden Router Bits?",
    answer:
      "Yes. Regent Technologies is the sole agent for Arden Router Bits and can help you choose suitable options for woodworking and precision cutting applications.",
  },
  {
    question: "Where are you located?",
    answer:
      "Regent Technologies is located at No. 403, Bandaranayake Mawatha, Katubedda, Moratuwa 10400, Sri Lanka.",
  },
] as const;

export const privacySections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We collect information you provide when you contact Regent Technologies, request sharpening services, ask about products, or coordinate pickup and delivery.",
      "This may include your name, business details, contact numbers, email address, service requirements, and any operational information necessary to fulfill your request.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "We use your information to respond to inquiries, coordinate sharpening services, manage deliveries, provide support, and improve the way we serve industrial customers.",
      "We do not use your information for unrelated purposes that are inconsistent with the services you request from us.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain business and service records for as long as reasonably necessary to fulfill service obligations, maintain customer relationships, and meet operational or legal requirements.",
    ],
  },
  {
    title: "Data Sharing",
    paragraphs: [
      "We do not sell your personal information. We may share relevant operational information with service partners or logistics providers only when necessary to fulfill pickup, delivery, or related support requirements.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You can contact us at any time to update your information, request corrections, or ask questions about how your information is used in connection with Regent Technologies services.",
    ],
  },
] as const;

export const termsSections = [
  {
    title: "Service Scope",
    paragraphs: [
      "Regent Technologies provides industrial blade sharpening, pickup and delivery coordination, and related product support based on customer requirements and operational feasibility.",
    ],
  },
  {
    title: "Customer Responsibilities",
    paragraphs: [
      "Customers are responsible for providing accurate service details, blade information, contact information, and any operational constraints relevant to pickup, sharpening, or delivery.",
    ],
  },
  {
    title: "Quotations And Scheduling",
    paragraphs: [
      "Any timelines, quotations, and service expectations are subject to confirmation based on workload, blade condition, logistics requirements, and other operational factors.",
    ],
  },
  {
    title: "Products And Availability",
    paragraphs: [
      "Product availability, specifications, and recommendations may change. Regent Technologies may update product options or service availability without prior notice.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "Regent Technologies will take reasonable care in handling customer tooling and orders. To the fullest extent permitted by applicable law, liability is limited to the direct service relationship and confirmed work scope.",
    ],
  },
] as const;
