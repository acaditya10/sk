export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'kitchen' | 'living' | 'bedroom' | 'commercial';
  location: string;
  sqft: string;
  completionTime: string;
  description: string;
  highlights: string[];
  materials: string[];
  image: string;
  accentColor: string;
  elevationIcon: 'home' | 'utensils' | 'sofa' | 'bed' | 'briefcase';
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  category: string;
  description: string;
  scope: string[];
  timeline: string;
  iconName: 'home' | 'chef-hat' | 'layout' | 'sparkles' | 'building' | 'layers' | 'sofa' | 'bed';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  property: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  date: string;
}

export const BUSINESS_DATA = {
  name: "SK Interior Design",
  tagline: "Turnkey Luxury Interiors Crafted for Mumbai Living",
  phone: "+91 9082443145",
  rawPhone: "9082443145",
  email: "skinteriordesign067@gmail.com",
  instagramUrl: "https://instagram.com/sk.interior_desing",
  instagramHandle: "@sk.interior_desing",
  facebookUrl: "https://www.facebook.com/share/1SRqfUeAJm/",
  facebookPageName: "sk interior design | Mumbai",
  googleMapsUrl: "https://maps.app.goo.gl/Vz8frsayVNMQgoaN8",
  coordinates: {
    lat: 19.1044481,
    lng: 72.8974054,
  },
  address: {
    complex: "Nahar Amrit Shakti",
    locality: "Chandivali, Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400072",
    country: "India",
    fullAddress: "Nahar Amrit Shakti, Chandivali, Powai / Andheri East, Mumbai, Maharashtra 400072",
  },
  serviceAreas: [
    "Powai",
    "Chandivali",
    "Andheri East & West",
    "Bandra & BKC",
    "Juhu",
    "Goregaon",
    "Malad",
    "Lower Parel & Worli",
    "Chembur",
    "Thane West",
    "Navi Mumbai",
  ],
  workingHours: "Monday to Sunday · 9:30 AM – 8:30 PM IST",
  stats: [
    { value: "140+", label: "Turnkey Projects Handed Over" },
    { value: "45 Days", label: "Guaranteed Move-In Timeline" },
    { value: "10 Years", label: "Hardware & Cabinetry Warranty" },
    { value: "100%", label: "Fixed-Price Guarantee (0 Hidden Costs)" },
  ],
  whatsappMessage: (message: string) =>
    `https://wa.me/919082443145?text=${encodeURIComponent(message)}`,
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Turnkey Residential Interiors",
    category: "Full Home Transformation",
    description:
      "End-to-end interior execution for 1BHK, 2BHK, 3BHK, 4BHK apartments and penthouses across Mumbai. From civil modifications and electrical layout to custom modular furniture and final styling.",
    scope: [
      "Civil alterations & structural space planning",
      "Concealed electrical, HVAC & copper piping",
      "False ceiling with warm architectural lighting",
      "Factory-finished modular carpentry & wardrobes",
      "Italian marble polishing & premium tiling",
      "Wall panelling, fluted louvers & texture painting",
    ],
    timeline: "45 to 60 Days",
    iconName: "home",
  },
  {
    number: "02",
    title: "Modular Kitchens & Pantries",
    category: "Ergonomic Culinary Design",
    description:
      "State-of-the-art modular kitchens engineered with marine-grade boiling waterproof (BWP) ply, soft-close German hardware, and heat-resistant quartz stone worktops.",
    scope: [
      "BWP Grade 710 Marine Ply carcass",
      "Acrylic, PU lacquer or anti-fingerprint laminate shutters",
      "Hettich / Blum soft-close tandem boxes and pull-outs",
      "Seamless Calacatta / composite quartz countertops",
      "Integrated microwave, oven, chimney & hob planning",
      "Under-cabinet sensor illumination & pantry tall units",
    ],
    timeline: "20 to 25 Days",
    iconName: "chef-hat",
  },
  {
    number: "03",
    title: "Living & Dining Architecture",
    category: "Signature Social Spaces",
    description:
      "Creating open-concept living rooms that maximize Mumbai apartment floorplates. Bespoke TV backdrops, concealed wiring, ambient cove lights, and custom dining credenzas.",
    scope: [
      "Floating TV media consoles with acoustic fluted panelling",
      "Concealed LED strip coves & magnetic track lights",
      "Italian marble accent walls & CNC metal partition screens",
      "Custom upholstered seating & designer dining tables",
      "Balcony deck integration with weather-proof louvers",
    ],
    timeline: "25 to 35 Days",
    iconName: "sofa",
  },
  {
    number: "04",
    title: "Master Suites & Custom Wardrobes",
    category: "Private Luxury Retreats",
    description:
      "Serene master bedroom retreats featuring floor-to-ceiling floor-to-ceiling lacquered glass wardrobes, acoustic headboard panels, integrated dressers, and study corners.",
    scope: [
      "Floor-to-ceiling profile sliding & hinged wardrobes",
      "Soft-motion internal drawer organizers & jewellery trays",
      "Plush fabric headboard walls with brushed brass sconces",
      "Integrated study alcove & floating vanity mirror",
      "Blackout curtain tracks & acoustic wall treatments",
    ],
    timeline: "20 to 30 Days",
    iconName: "bed",
  },
  {
    number: "05",
    title: "Boutique Commercial & Offices",
    category: "Corporate & Retail Fit-Outs",
    description:
      "Modern, productive workspaces, executive suites, doctor clinics, and boutique retail showrooms in Mumbai's commercial hubs.",
    scope: [
      "Glass acoustic partition systems & aluminum framing",
      "Modular ergonomic work stations with wire management",
      "Executive director cabins with rich veneer credenzas",
      "Reception lounge & brand display backdrops",
      "Fire-rated false ceilings & commercial grade lighting",
    ],
    timeline: "30 to 50 Days",
    iconName: "building",
  },
  {
    number: "06",
    title: "3D Visualization & VR Walkthroughs",
    category: "Pre-Execution Precision",
    description:
      "Before a single hammer strikes, see your exact home in photorealistic 3D renders with real material swatches, lighting simulations, and precise floor plans.",
    scope: [
      "Precision 2D CAD furniture & electrical layouts",
      "High-resolution 3D interior perspective renders",
      "Physical material palette selection box",
      "Detailed bill of quantities (BOQ) with zero hidden items",
    ],
    timeline: "7 to 10 Days",
    iconName: "layers",
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "nahar-amrit-luxury-3bhk",
    title: "The Nahar Pavilion 3BHK",
    category: "residential",
    location: "Chandivali, Powai, Mumbai",
    sqft: "1,450 sq.ft",
    completionTime: "48 Days",
    description:
      "Turnkey transformation of a 3BHK apartment in Nahar Amrit Shakti. Warm minimalist aesthetic blending fluted oak panelling, muted beige upholstery, and seamless Italian botticino marble floors.",
    highlights: [
      "Open living-dining with floating fluted console",
      "Island modular kitchen with matte slate acrylic finish",
      "Master bedroom with tinted glass walk-in wardrobe",
      "Concealed magnetic architectural track lighting",
    ],
    materials: ["Italian Botticino Marble", "Natural Oak Fluted Panels", "Hettich InnoTech Drawers", "Asian Paints Royale Matte"],
    image: "/images/living-curved-sofa.jpg",
    accentColor: "#D4AF37",
    elevationIcon: "home",
  },
  {
    id: "powai-hiranandani-penthouse",
    title: "Skyline Suite at Hiranandani",
    category: "residential",
    location: "Powai, Mumbai",
    sqft: "2,200 sq.ft",
    completionTime: "55 Days",
    description:
      "High-end turnkey penthouse featuring bespoke brass divider screens, double-height acoustic panelling, and a concealed bar lounge overlooking the Powai lake skyline.",
    highlights: [
      "Double-height feature wall with brass inlay",
      "Custom 8-seater statuario marble dining table",
      "Smart-home automation for motorized blinds & lighting",
    ],
    materials: ["Statuario Quartz", "Brushed PVD Brass", "Greenply Marine BWP", "PU Satin Charcoal"],
    image: "/images/living-balcony-night.jpg",
    accentColor: "#D4AF37",
    elevationIcon: "home",
  },
  {
    id: "bandra-contemporary-kitchen",
    title: "The Nordic Gourmet Kitchen",
    category: "kitchen",
    location: "Pali Hill, Bandra West, Mumbai",
    sqft: "280 sq.ft",
    completionTime: "21 Days",
    description:
      "Ergonomic modular kitchen with custom reeded glass tall units, integrated breakfast bar, and anti-scratch matte porcelain work surfaces.",
    highlights: [
      "Handleless Gola profile soft-close cabinetry",
      "Under-counter LED sensor illumination",
      "Built-in microwave, air-fryer, and pantry pull-outs",
    ],
    materials: ["Anti-scratch Matte Acrylic", "Calacatta Quartz 20mm", "Blum Tandembox Antaro", "Toughened Fluted Glass"],
    image: "/images/kitchen-cream.jpg",
    accentColor: "#E0A96D",
    elevationIcon: "utensils",
  },
  {
    id: "andheri-master-suite",
    title: "The Serene Oak Master Suite",
    category: "bedroom",
    location: "Lokhandwala, Andheri West, Mumbai",
    sqft: "420 sq.ft",
    completionTime: "24 Days",
    description:
      "Restful sanctuary designed with warm acoustic wood slats, integrated study console, and a 9-foot profile wardrobe with champagne gold aluminum framing.",
    highlights: [
      "Acoustic slat panelling with indirect warm 3000K LED",
      "Custom velvet upholstered king bed with storage",
      "Concealed vanity bureau with illuminated smart mirror",
    ],
    materials: ["Acoustic Oak Slats", "Champagne Gold Aluminum Profiles", "Grey Tinted Float Glass", "Century Club Prime Ply"],
    image: "/images/bedroom-city-view.jpg",
    accentColor: "#C5A880",
    elevationIcon: "bed",
  },
  {
    id: "chandivali-living-dining",
    title: "Fluid Modern Living & Dining",
    category: "living",
    location: "Chandivali, Mumbai",
    sqft: "680 sq.ft",
    completionTime: "30 Days",
    description:
      "Seamless integration of dining and drawing spaces for a modern nuclear family, prioritizing natural light, concealed cable management, and durable surfaces.",
    highlights: [
      "Fluted charcoal wall with 75-inch flush TV mount",
      "Curved bouclé seating with custom brass nest tables",
      "Floating shoe credenza with indirect step light",
    ],
    materials: ["Charcoal Charcoal Louvers", "Dyna Italian Marble", "Kravet Bouclé Fabric", "Powder-coated Matte Black Steel"],
    image: "/images/dining-grey.jpg",
    accentColor: "#D4AF37",
    elevationIcon: "sofa",
  },
  {
    id: "bkc-corporate-studio",
    title: "Venture Capital Partner Office",
    category: "commercial",
    location: "Bandra Kurla Complex (BKC), Mumbai",
    sqft: "1,100 sq.ft",
    completionTime: "38 Days",
    description:
      "Sleek executive boutique office with double-glazed acoustic glass partitions, customized conference table with motorized cable ports, and warm walnut accents.",
    highlights: [
      "Double glazed acoustic partitions (STC 44)",
      "Book-matched American walnut executive desk",
      "Low-glare micro-prismatic LED linear fixtures",
    ],
    materials: ["American Walnut Natural Veneer", "Soundproof Double Glazing", "Desso Commercial Carpet", "Black Anodized Aluminum"],
    image: "/images/office-workstations.jpg",
    accentColor: "#A38258",
    elevationIcon: "briefcase",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    clientName: "Rajesh & Meera Sharma",
    property: "Nahar Amrit Shakti, 3BHK",
    location: "Chandivali, Powai",
    projectType: "Full Turnkey Residential",
    quote:
      "We handed over our bare 3BHK flat to SK Interior Design and got the keys back in exactly 47 days. The finish of the modular kitchen and the living room fluted panelling is hotel-standard. No sudden cost escalations or contractor excuses. Highly recommended for Powai residents!",
    rating: 5,
    date: "August 2024",
  },
  {
    id: "2",
    clientName: "Ananya Deshmukh",
    property: "Hiranandani Gardens, 2BHK",
    location: "Powai, Mumbai",
    projectType: "Living Room & Modular Kitchen",
    quote:
      "The modular kitchen layout designed by SK Interior is a dream. Every inch was calculated for storage, and the soft-close Blum fittings feel so premium. They gave us daily WhatsApp photo updates while we were at work.",
    rating: 5,
    date: "October 2024",
  },
  {
    id: "3",
    clientName: "Vikram Khurana",
    property: "Boutique Financial Advisory Office",
    location: "Andheri East, Mumbai",
    projectType: "Commercial Office Fit-Out",
    quote:
      "Delivered our 1,200 sq.ft office within our strict 35-day deadline before our launch event. The glass acoustic partitions and director cabin walnut finish impressed all our international clients.",
    rating: 5,
    date: "December 2024",
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Site Inspection & Concept Meet",
    timeframe: "Day 1 – 3",
    description:
      "We visit your property in Mumbai (or meet at our Chandivali studio), measure all dimensions precisely, understand your lifestyle requirements, and establish your budget bounds.",
  },
  {
    step: "02",
    title: "3D Visualization & Material Approval",
    timeframe: "Day 4 – 10",
    description:
      "Detailed 3D renders showing your actual rooms with lighting and furniture. Touch and select real acrylic, veneer, quartz, and hardware samples at our studio before sign-off.",
  },
  {
    step: "03",
    title: "Factory Fabrication & Civil Prep",
    timeframe: "Day 11 – 35",
    description:
      "Carpentry is cut and edge-banded on precision German CNC machinery to avoid on-site dust and noise, while our on-site team executes false ceiling, electrical, and plumbing.",
  },
  {
    step: "04",
    title: "Assembly, Deep Cleaning & Handover",
    timeframe: "Day 36 – 45",
    description:
      "Factory-finished modules arrive for clean, rapid installation. We run a 50-point quality audit, complete industrial deep cleaning, and hand over the keys with your 10-year warranty certificate.",
  },
];

export const MATERIAL_GUARANTEES = [
  {
    title: "BWP Marine-Grade 710 Plywood",
    desc: "100% boiling waterproof, calibrated marine ply resistant to Mumbai's coastal humidity, moisture, and borer attacks.",
  },
  {
    title: "Certified German Hardware",
    desc: "Blum and Hettich soft-close hinges, channels, and hydraulic lift-ups tested for 200,000+ open-close cycles.",
  },
  {
    title: "Zero Delays or Penalty Guarantee",
    desc: "Committed 45-day handover for standard 2BHK/3BHK residential turnkey scopes, with scheduled milestones.",
  },
  {
    title: "Fixed Price & Zero Hidden Costs",
    desc: "Itemized BOQ upfront. No unexpected mid-project billing surprises or hidden transport/labor charges.",
  },
];

export const INSTAGRAM_GALLERY: GalleryImage[] = [
  { src: "/images/living-chandelier-tv.jpg", alt: "Living room with chandelier and back-lit TV wall" },
  { src: "/images/kitchen-green.jpg", alt: "Modular kitchen with deep green cabinetry" },
  { src: "/images/bath-vanity-luxury.jpg", alt: "Luxury bathroom vanity with vessel sink" },
  { src: "/images/wardrobe-glass-sliding.jpg", alt: "Sliding glass wardrobe with internal lighting" },
  { src: "/images/bedroom-chandelier-arch.jpg", alt: "Bedroom with arched feature wall and chandelier" },
  { src: "/images/commercial-optical.jpg", alt: "Optical store retail fit-out" },
  { src: "/images/study-city-view.jpg", alt: "Study desk overlooking the Mumbai skyline" },
  { src: "/images/terrace-garden.jpg", alt: "Landscaped terrace garden seating" },
];
