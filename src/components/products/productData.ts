export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  badge?: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  href: string;
  features?: string[];
  specifications?: ProductSpecification[];
  applications?: string[];
  compliance?: string[];
}

export const products: Product[] = [
  {
    id: "copper-bonded-chemical-earthing-electrodes",
    slug: "earthing-electrodes",
    category: "IS 3043:2018",
    badge: "EARTHING ELECTRODES",
    title: "Copper Bonded Chemical Earthing Electrodes",
    description:
      "High-tensile steel core with 250+ micron copper coating and crystalline backfill for low soil resistivity.",
    longDescription:
      "Pratiksha Copper Bonded Chemical Earthing Electrodes are manufactured with molecularly bonded 99.9% pure electrolytic copper over a high-tensile low-carbon steel core. Engineered specifically for demanding industrial substations, telecom towers, and data centers, these electrodes deliver rapid fault-current dissipation, exceptional mechanical driving strength, and zero-maintenance longevity even in highly corrosive soils.",
    image: "/home/Copper_Earthing_Electrode.jpeg",
    href: "/contact",
    features: [
      "Molecular electrolytic copper bonding (> 250 microns uniform coating)",
      "High-tensile steel core prevents bending or cracking during deep soil driving",
      "Factory-filled with hygroscopic crystalline conductive compounds",
      "Tested for short-circuit fault current tolerance up to 40 kA",
      "Over 30+ years expected maintenance-free operational service life",
      "Exceeds IS 3043, IEEE-80, and IEC 62561-2 standards",
    ],
    specifications: [
      { label: "Core Material", value: "High-Tensile Low-Carbon Steel (Grade En8D)" },
      { label: "Copper Coating", value: "99.9% Pure Electrolytic Copper (≥ 250 Microns)" },
      { label: "Standard Lengths", value: "1.0m, 2.0m, 3.0m (Custom up to 6m available)" },
      { label: "Outer Diameter", value: "14.2mm, 17.2mm, 19mm, 25mm, 32mm" },
      { label: "Current Capacity", value: "Up to 40 kA for 1 second" },
      { label: "Tensile Strength", value: "> 600 N/mm²" },
    ],
    applications: [
      "Thermal & Hydro Power Transmission Sub-stations",
      "Solar PV Farms & Wind Turbine Grounding Grids",
      "Heavy Manufacturing & Petrochemical Processing Facilities",
      "Data Centers, Telecommunications & IT Parks",
      "Commercial High-Rise Lightning Protection Systems",
    ],
    compliance: ["IS 3043:2018", "IEEE 80", "IEC 62561-2", "UL 467 Listed Standards"],
  },
  {
    id: "pure-copper-gi-earthing-accessories",
    slug: "copper-gi-accessories",
    category: "HARDWARE & WELD",
    badge: "HARDWARE & WELD",
    title: "Pure Copper & GI Earthing Accessories",
    description:
      "Precision-machined earthing clamps, U-bolts, busbars, and exothermic welding graphite moulds.",
    longDescription:
      "A complete range of precision-manufactured earthing installation hardware, heavy-duty hot-dip galvanized (GI) clamps, copper tape clips, rod-to-tape couplers, and graphite exothermic welding systems. Built to withstand high mechanical stress and thermal shock from severe electrical faults without loosening, sparking, or corroding.",
    image: "/home/Copper_Earthing_Wire.jpeg",
    href: "/contact",
    features: [
      "Heavy-duty forged naval brass, pure copper, and hot-dip GI construction",
      "Precision CNC threaded couplers for seamless deep-driven rod extension",
      "High-conductivity molecular exothermic welding graphite moulds & powders",
      "Corrosion-resistant stainless steel 316 and brass hardware fasteners",
      "Zero contact resistance degradation over decades of buried service",
      "Compatible with all standard flat tapes, round conductors, and busbars",
    ],
    specifications: [
      { label: "Clamp Materials", value: "Naval Brass / Gunmetal / Hot Dip Galvanized Steel" },
      { label: "Fasteners", value: "SS 304 / SS 316 / High-Grade Phosphor Bronze" },
      { label: "Conductive Wire", value: "99.97% Pure Electrolytic Oxygen-Free Copper" },
      { label: "GI Coating Thickness", value: "≥ 86 Microns (Hot-Dip Galvanized as per IS 2629)" },
      { label: "Weld Joint Integrity", value: "Molecular Fusion (Permanent, non-loosening)" },
    ],
    applications: [
      "Substation Earth Mat Conductor Interconnections",
      "Industrial Plant Main Earthing Ring Installations",
      "Lightning Down-Conductor Mechanical Clamping",
      "Switchgear & Transformer Frame Grounding Points",
    ],
    compliance: ["IS 2629", "IS 2633", "BS 7430", "IEC 62305"],
  },
  {
    id: "industrial-substation-grounding-grid",
    slug: "substation-grounding",
    category: "UTILITY GRADE",
    badge: "UTILITY GRADE",
    title: "Industrial Substation Grounding Grid",
    description:
      "Heavy-duty earthing mats, flat copper strips, and inspection pits engineered for HT/LT substations.",
    longDescription:
      "Comprehensive utility-grade substation grounding systems engineered to minimize step and touch potential voltages in high-voltage switchyards, step-up transformers, and power distribution grids. Includes heavy-gauge earth mats, FRP inspection test chambers with lockable covers, and copper flat tape network arrays.",
    image: "/home/Earthing_Inspection_Chamber.jpeg",
    href: "/contact",
    features: [
      "Heavy-duty heavy-gauge poly-plastic & heavy concrete test pits (Inspection Chambers)",
      "High load-bearing capacity (> 5 Tonnes) suitable for driveways and industrial yards",
      "Includes integral removable copper testing terminal bar for periodic resistance audits",
      "Engineered to control step and touch potential in accordance with IEEE 80 guidelines",
      "Resistant to UV degradation, chemical attacks, and environmental weathering",
    ],
    specifications: [
      { label: "Chamber Material", value: "Heavy-Duty Polypropylene (PP) / Reinforced Concrete" },
      { label: "Load Rating", value: "Class A15 to C250 (Up to 25 Tonnes test load)" },
      { label: "Internal Terminal", value: "Tinned Electrolytic Copper Disconnecting Link Bar" },
      { label: "Top Dimensions", value: "Top Diameter 250mm / Base 310mm / Height 260mm" },
      { label: "Locking System", value: "Tamper-proof stainless steel hex bolt mechanism" },
    ],
    applications: [
      "66kV / 132kV / 220kV / 400kV Power Substations",
      "Railway Traction & Metro Rail Feeder Grounding",
      "Heavy Industrial Plant Step-Up & Step-Down Yards",
      "Refineries & Chemical Petrochemical Facilities",
    ],
    compliance: ["IEEE 80", "IS 3043", "IEC 61936-1", "EN 124"],
  },
  {
    id: "commercial-earth-busbars-distribution",
    slug: "earth-busbars",
    category: "COMMERCIAL SAFETY",
    badge: "COMMERCIAL SAFETY",
    title: "Commercial Earth Busbars & Distribution",
    description:
      "Architectural earthing distribution panels, clean busbar enclosures, and main earth terminal links.",
    longDescription:
      "Precision-machined electrolytic tinned copper earth busbars, main earthing terminals (MET), and clean earth distribution enclosures designed for commercial complexes, hospitals, data centers, and IT server rooms requiring noise-free, low-impedance grounding paths.",
    image: "/home/Earthing_Electrode.jpeg",
    href: "/contact",
    features: [
      "100% Electrolytic ETP copper bars with 99.9% electrical conductivity",
      "Uniform electro-tin plating to prevent oxidation and galvanic corrosion",
      "Pre-drilled precision M8/M10/M12 connection holes for quick multi-cable termination",
      "Mounted on heavy-duty fire-retardant polyamide/DMC standoff insulators",
      "Available with custom powder-coated IP65 lockable galvanized enclosures",
    ],
    specifications: [
      { label: "Busbar Material", value: "C101 / ETP Grade Copper (Hard Drawn)" },
      { label: "Surface Plating", value: "Electro-Tinned (10–15 Microns) or Bare Copper" },
      { label: "Common Sizes", value: "25x3mm, 25x6mm, 50x6mm, 50x10mm, 75x10mm" },
      { label: "Insulator Rating", value: "1kV – 11kV Dielectric Standoff Insulators" },
      { label: "Temperature Rise", value: "Under 35°C at full rated continuous fault current" },
    ],
    applications: [
      "Commercial Malls, Multiplexes & Smart Buildings",
      "Hospital & Medical ICU Isolated Power Grounding",
      "Data Center Server Racks & Telecom Central Offices",
      "Control Room Instrumentation & PLC Grounding",
    ],
    compliance: ["IS 3043", "BS 7430", "TIA-942 (Data Center Grounding)", "UL 467"],
  },
  {
    id: "solar-pv-plant-grounding-systems",
    slug: "solar-pv-grounding",
    category: "RENEWABLE SIZING",
    badge: "SOLAR & RENEWABLES",
    title: "Solar PV Plant Grounding Systems",
    description:
      "Corrosion-resistant earthing solutions designed for large-scale utility and rooftop solar tracker arrays.",
    longDescription:
      "Specialized earthing conductors, module mounting structure (MMS) bonding jumpers, and lightning protection systems custom-engineered for solar photovoltaic farms and rooftop solar arrays. Designed to endure harsh outdoor exposure, high thermal cycling, and sandy or desert soil conditions.",
    image: "/home/Lightning_Protection_Air_Terminal.jpeg",
    href: "/contact",
    features: [
      "Ultra-low resistance grounding for central inverters and string combiner boxes (SCBs)",
      "High UV, ozone, and atmospheric corrosion resistance for outdoor desert/arid environments",
      "Direct bonding jumpers for galvanized steel solar module mounting structures (MMS)",
      "Protects expensive PV inverters, micro-inverters, and transformers from indirect lightning surges",
      "Tested for low earth resistance stabilization in dry and sandy topsoils",
    ],
    specifications: [
      { label: "Electrode Type", value: "Heavy Dual-Tube Chemical Bonded Rod" },
      { label: "Bonding Jumpers", value: "Tinned Flexible Braided Copper Straps (16-35 mm²)" },
      { label: "Air Terminal", value: "Early Streamer Emission (ESE) or Multi-Point Copper Rod" },
      { label: "Life Expectancy", value: "25+ Years (Aligned with Solar PV module lifecycle)" },
    ],
    applications: [
      "Utility-Scale Megawatt Solar Parks (Ground-Mounted)",
      "Industrial & Commercial Rooftop Solar PV Systems",
      "Floating Solar (FPV) Grounding Networks",
      "Battery Energy Storage Systems (BESS) Enclosures",
    ],
    compliance: ["MNRE Guidelines", "IEC 62548", "IEC 62305", "IS 3043:2018"],
  },
  {
    id: "advanced-maintenance-free-backfill",
    slug: "maintenance-free-backfill",
    category: "BACKFILL MATERIAL",
    badge: "BACKFILL COMPOUND",
    title: "Advanced Maintenance-Free Backfill",
    description:
      "Eco-safe carbonaceous and bentonite earthing minerals ensuring permanent low soil impedance.",
    longDescription:
      "Pratiksha SRIP Super Conductive Earth Enhancement Compound is a specially formulated, non-corrosive, moisture-retaining chemical backfill compound. When mixed with water and poured around the earthing electrode, it sets into an unshrinking conductive gel-matrix that permanently lowers contact resistance and stabilizes earthing values even in dry, rocky, and gravel-rich soils.",
    image: "/home/Earthing_Compound.jpeg",
    href: "/contact",
    features: [
      "Permanently lowers ground pit resistance by up to 60-80% compared to native soil",
      "Retains moisture through seasonal dry cycles without needing periodic water recharging",
      "Non-corrosive formulation extends copper electrode lifespan significantly",
      "Eco-friendly, chemically inert minerals that will not contaminate underground aquifers",
      "Zero maintenance required: once installed, it never needs salt or charcoal replenishment",
    ],
    specifications: [
      { label: "Compound Type", value: "High-Grade Carbonaceous & Bentonite Mineral Matrix" },
      { label: "Resistivity", value: "Ultra-low (< 0.12 Ω·m wet resistivity)" },
      { label: "Packaging", value: "15 kg / 25 kg Heavy-Duty Moisture-Proof HDPE Bags" },
      { label: "Leaching & Toxicity", value: "Non-toxic, heavy metal-free, non-polluting" },
      { label: "pH Range", value: "Neutral to mildly alkaline (7.0 – 8.5) to inhibit corrosion" },
    ],
    applications: [
      "High Soil Resistivity Areas (Rocky, Sandy, Granite Terrains)",
      "Substation & Transmission Tower Earthing Pits",
      "Wind Mill Foundation & Generator Grounding",
      "Highway Toll Plazas & Remote Telecommunication Towers",
    ],
    compliance: ["IEC 62561-7 (Earth Enhancement Compounds)", "IS 3043:2018", "RoHS Compliant"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return products.find(
    (p) => p.slug === normalized || p.id === normalized
  );
}
