export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const products: Product[] = [
  {
    id: "copper-bonded-chemical-earthing-electrodes",
    category: "IS 3043:2018",
    title: "Copper Bonded Chemical Earthing Electrodes",
    description:
      "High-tensile steel core with 250+ micron copper coating and crystalline backfill for low soil resistivity.",
    image: "/home/Copper_Earthing_Electrode.jpeg",
    href: "/contact",
  },
  {
    id: "pure-copper-gi-earthing-accessories",
    category: "HARDWARE & WELD",
    title: "Pure Copper & GI Earthing Accessories",
    description:
      "Precision-machined earthing clamps, U-bolts, busbars, and exothermic welding graphite moulds.",
    image: "/home/Copper_Earthing_Wire.jpeg",
    href: "/contact",
  },
  {
    id: "industrial-substation-grounding-grid",
    category: "UTILITY GRADE",
    title: "Industrial Substation Grounding Grid",
    description:
      "Heavy-duty earthing mats, flat copper strips, and inspection pits engineered for HT/LT substations.",
    image: "/home/Earthing_Inspection_Chamber.jpeg",
    href: "/contact",
  },
  {
    id: "commercial-earth-busbars-distribution",
    category: "COMMERCIAL SAFETY",
    title: "Commercial Earth Busbars & Distribution",
    description:
      "Architectural earthing distribution panels, clean busbar enclosures, and main earth terminal links.",
    image: "/home/Earthing_Electrode.jpeg",
    href: "/contact",
  },
  {
    id: "solar-pv-plant-grounding-systems",
    category: "RENEWABLE SIZING",
    title: "Solar PV Plant Grounding Systems",
    description:
      "Corrosion-resistant earthing solutions designed for large-scale utility and rooftop solar tracker arrays.",
    image: "/home/Lightning_Protection_Air_Terminal.jpeg",
    href: "/contact",
  },
  {
    id: "advanced-maintenance-free-backfill",
    category: "BACKFILL MATERIAL",
    title: "Advanced Maintenance-Free Backfill",
    description:
      "Eco-safe carbonaceous and bentonite earthing minerals ensuring permanent low soil impedance.",
    image: "/home/Earthing_Compound.jpeg",
    href: "/contact",
  },
];
