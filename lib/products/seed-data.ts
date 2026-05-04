import { faqItems } from "@/lib/regent-content";

export const initialProducts = [
  {
    name: "Precision Blade Sharpening",
    slug: "precision-blade-sharpening",
    description:
      "Automated sharpening for TCT and HSS blades with controlled grinding angles, cooling, and finishing for cleaner cuts and longer tool life.",
    metaTitle: "Precision Blade Sharpening in Sri Lanka",
    metaDescription:
      "Regent Technologies provides automated TCT and HSS blade sharpening with cooling, finishing, pickup, and delivery support.",
    images: ["/regent/product-precision.png"],
    sortOrder: 10,
  },
  {
    name: "Arden Router Bits",
    slug: "arden-router-bits",
    description:
      "Original Arden Router Bits for woodworking, cabinet making, profiling, trimming, and precision production work. Regent Technologies is the sole agent for Arden Router Bits.",
    metaTitle: "Arden Router Bits Sri Lanka",
    metaDescription:
      "Buy Arden Router Bits from Regent Technologies, sole agent for Arden Router Bits in Sri Lanka.",
    images: ["/regent/product-woodworking.png"],
    sortOrder: 20,
  },
  {
    name: "Power Tools",
    slug: "power-tools",
    description:
      "Professional power tools for workshops, factories, and maintenance teams that need reliable equipment for daily production and service work.",
    metaTitle: "Professional Power Tools",
    metaDescription:
      "Professional power tools for Sri Lankan workshops, factories, maintenance teams, and production environments.",
    images: ["/regent/product-power.png"],
    sortOrder: 30,
  },
  {
    name: "Tyre Rebuilding Tools",
    slug: "tyre-rebuilding-tools",
    description:
      "Tools and equipment support for tyre rebuilding operations, including practical product guidance for workshop workflows and repeat service needs.",
    metaTitle: "Tyre Rebuilding Tools",
    metaDescription:
      "Tyre rebuilding tools and workshop support products from Regent Technologies in Sri Lanka.",
    images: ["/regent/product-tyre.png"],
    sortOrder: 40,
  },
  {
    name: "Woodworking Tools",
    slug: "woodworking-tools",
    description:
      "Cutting tools and accessories for woodworking shops, furniture production, trimming, shaping, routing, and clean repeatable finishes.",
    metaTitle: "Woodworking Tools Sri Lanka",
    metaDescription:
      "Woodworking tools, router bits, cutting tools, and workshop accessories from Regent Technologies.",
    images: ["/regent/product-woodworking.png"],
    sortOrder: 50,
  },
  {
    name: "Power Tool Accessories",
    slug: "power-tool-accessories",
    description:
      "Accessories, fittings, and consumables selected to keep power tools and workshop systems ready for daily industrial use.",
    metaTitle: "Power Tool Accessories",
    metaDescription:
      "Power tool accessories and workshop consumables for reliable daily industrial use.",
    images: ["/regent/product-accessories.png"],
    sortOrder: 60,
  },
  {
    name: "Hand Tools",
    slug: "hand-tools",
    description:
      "Durable hand tools for technicians, service teams, fabrication work, maintenance jobs, and general workshop use.",
    metaTitle: "Workshop Hand Tools",
    metaDescription:
      "Hand tools for technicians, fabrication, maintenance, and workshop teams from Regent Technologies.",
    images: ["/regent/product-handtools.png"],
    sortOrder: 70,
  },
  {
    name: "TCT Blades",
    slug: "tct-blades",
    description:
      "Tungsten carbide tipped blades for industrial cutting applications, supported by Regent Technologies sharpening and service expertise.",
    metaTitle: "TCT Blades and Sharpening",
    metaDescription:
      "TCT blades and sharpening support for industrial cutting applications in Sri Lanka.",
    images: ["/regent/product-woodworking.png"],
    sortOrder: 80,
  },
  {
    name: "HSS Blades",
    slug: "hss-blades",
    description:
      "High-speed steel blade support for workshops that need dependable cutting performance, practical tool care, and reliable sharpening turnaround.",
    metaTitle: "HSS Blades and Sharpening",
    metaDescription:
      "HSS blade support and sharpening service for workshops and production teams.",
    images: ["/regent/product-precision.png"],
    sortOrder: 90,
  },
  {
    name: "Industrial Drills",
    slug: "industrial-drills",
    description:
      "Heavy-duty drilling tools and compatible workshop systems for demanding production, maintenance, and fabrication environments.",
    metaTitle: "Industrial Drills",
    metaDescription:
      "Industrial drills and workshop tool support for demanding production and maintenance teams.",
    images: ["/regent/product-power.png"],
    sortOrder: 100,
  },
  {
    name: "Rebuild Wheel Systems",
    slug: "rebuild-wheel-systems",
    description:
      "Equipment support and compatible tooling for rebuild, restoration, and workshop workflows that need consistent operational uptime.",
    metaTitle: "Rebuild Wheel Systems",
    metaDescription:
      "Rebuild wheel systems and compatible tooling support for workshop operations.",
    images: ["/regent/product-tyre.png"],
    sortOrder: 110,
  },
  {
    name: "Maintenance Kits",
    slug: "maintenance-kits",
    description:
      "Workshop maintenance kits, consumables, and support items for routine servicing, tool care, and quick on-site work.",
    metaTitle: "Workshop Maintenance Kits",
    metaDescription:
      "Maintenance kits and workshop consumables for routine servicing and tool care.",
    images: ["/regent/product-accessories.png"],
    sortOrder: 120,
  },
  {
    name: "Technician Toolkits",
    slug: "technician-toolkits",
    description:
      "Portable technician toolkits for service work, maintenance teams, and field-ready workshop support.",
    metaTitle: "Technician Toolkits",
    metaDescription:
      "Portable technician toolkits for service work, maintenance, and field-ready workshop support.",
    images: ["/regent/product-handtools.png"],
    sortOrder: 130,
  },
] as const;

export const initialFaqs = faqItems.map((item, index) => ({
  question: item.question,
  answer: item.answer,
  isPublished: true,
  sortOrder: (index + 1) * 10,
}));
