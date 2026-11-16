export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Living Architecture' | 'Spatial Lighting' | 'Dining & Millwork' | 'Acoustic & Surfaces' | 'Penthouse Suites';
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'NEW' | 'HOT' | 'SALE' | 'BEST SELLER';
  primaryImage: string;
  secondaryImage: string;
  description: string;
  materials: string[];
  inStock: boolean;
  metals: string[];
  sku: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'el-01',
    slug: 'monolithic-fluted-brass-chandelier',
    title: 'Monolithic Fluted Brass Chandelier',
    subtitle: 'Architectural Ceiling Suspension in Brushed Patinated Brass',
    category: 'Spatial Lighting',
    price: 1420.00,
    compareAtPrice: 1680.00,
    rating: 5.0,
    reviewsCount: 38,
    badge: 'BEST SELLER',
    primaryImage: '/images/ladiya-gallery/interior-02.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-12.jpg',
    description: 'A sculptural luminaire defined by cylindrical fluted brass housings and integrated warm circadian LED diffusers. Engineered to anchor double-height living pavilions and refined dining halls.',
    materials: ['Hand-Spun Solid Architectural Brass', 'Frosted Optical Acrylic Diffusers', '2700K Warm Circadian Array', 'Adjustable Braided Suspension Cabling'],
    inStock: true,
    metals: ['Brushed Satin Brass', 'Blackened Architectural Bronze', 'Honed Silver Nickel'],
    sku: 'LAD-LGT-001'
  },
  {
    id: 'el-02',
    slug: 'monolithic-roman-travertine-coffee-table',
    title: 'Monolithic Roman Travertine Coffee Table',
    subtitle: 'Honed Italian Travertine with Chamfered Cantilever Base',
    category: 'Living Architecture',
    price: 2490.00,
    compareAtPrice: 2860.00,
    rating: 4.9,
    reviewsCount: 64,
    badge: 'HOT',
    primaryImage: '/images/ladiya-gallery/interior-01.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-06.jpg',
    description: 'Hewn from single blocks of Tivoli Roman travertine, this low-profile plinth table celebrates tactile geological veining with precision waterjet-cut planar geometries.',
    materials: ['Quarried Roman Travertine', 'Matte Penetrating Protective Sealant', 'Concealed Steel Structural Core', 'Felt Acoustic Floor Glides'],
    inStock: true,
    metals: ['Honed Roman Travertine', 'Nero Marquina Marble', 'Silver Travertine'],
    sku: 'LAD-LIV-002'
  },
  {
    id: 'el-03',
    slug: 'sculptural-glass-droplet-pendant',
    title: 'Sculptural Hand-Blown Glass Droplet Pendant',
    subtitle: 'Cascading Murano Glass with Hand-Turned Walnut Mount',
    category: 'Spatial Lighting',
    price: 845.00,
    rating: 4.8,
    reviewsCount: 22,
    badge: 'NEW',
    primaryImage: '/images/ladiya-gallery/interior-14.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-07.jpg',
    description: 'Organic droplet-form glass pendants cast a soft, diffused ambient aura reminiscent of natural morning light filtered through water. Ideal for bedside drop clusters or linear kitchen islands.',
    materials: ['Hand-Blown Borosilicate Glass', 'Solid American Walnut Mount', 'Low-Voltage Dim-to-Warm Driver'],
    inStock: true,
    metals: ['Smoked Glass & Walnut', 'Clear Glass & Brass', 'Frosted Glass & Black Oak'],
    sku: 'LAD-LGT-003'
  },
  {
    id: 'el-04',
    slug: 'brushed-nickel-architectural-sconce',
    title: 'Brushed Nickel Architectural Sconce',
    subtitle: 'Minimalist Radial Wall Luminaire with Bi-Directional Wash',
    category: 'Spatial Lighting',
    price: 685.00,
    compareAtPrice: 790.00,
    rating: 4.9,
    reviewsCount: 19,
    badge: 'SALE',
    primaryImage: '/images/ladiya-gallery/interior-12.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-08.jpg',
    description: 'A low-profile circular wall sconce providing glare-free indirect lighting. Casts an ethereal halo across textured lime-wash plaster and fluted acoustic wall paneling.',
    materials: ['Machined Architectural Aluminum', 'Frosted Prismatic Lens', 'Integrated 95+ CRI Lumileds'],
    inStock: true,
    metals: ['Brushed Nickel', 'Matte Black Anodized', 'Aged Warm Brass'],
    sku: 'LAD-LGT-004'
  },
  {
    id: 'el-05',
    slug: 'linear-brass-suspension-luminaire',
    title: 'Linear Brass Suspension Luminaire',
    subtitle: 'Continuous 2400mm Architectural Light Bar with Fluted Baffles',
    category: 'Dining & Millwork',
    price: 2680.00,
    compareAtPrice: 3100.00,
    rating: 5.0,
    reviewsCount: 41,
    badge: 'BEST SELLER',
    primaryImage: '/images/ladiya-gallery/interior-11.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-04.jpg',
    description: 'Engineered for generous dining tables and boardroom executive islands. Combines architectural glare-baffle louvers with precision 0-10V dimming integration.',
    materials: ['Solid Extruded Architectural Brass', 'Micro-Louver Acoustic Baffles', 'UL-Listed Class 2 Driver'],
    inStock: true,
    metals: ['Brushed Natural Brass', 'Blackened Bronze', 'Raw Stainless Steel'],
    sku: 'LAD-DIN-005'
  },
  {
    id: 'el-06',
    slug: 'cobalt-glazed-ceramic-plinth',
    title: 'Cobalt Glazed Ceramic Spatial Plinth',
    subtitle: 'Sculptural Architectural Pedestal with Hand-Burnished Glaze',
    category: 'Living Architecture',
    price: 1395.00,
    rating: 4.9,
    reviewsCount: 29,
    badge: 'NEW',
    primaryImage: '/images/ladiya-gallery/interior-09.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-15.jpg',
    description: 'A bold monolithic pedestal vessel that introduces rich mineral pigment and tactile depth into minimalist residential lounges and gallery entryways.',
    materials: ['High-Fire Terracotta Ceramic', 'Reactive Deep Cobalt Glaze', 'Reinforced Weighted Base'],
    inStock: true,
    metals: ['Deep Cobalt Glaze', 'Umber Matte Glaze', 'Chalk White Mineral'],
    sku: 'LAD-LIV-006'
  },
  {
    id: 'el-07',
    slug: 'solid-white-oak-dining-table',
    title: 'Solid White Oak Architectural Dining Table',
    subtitle: 'Monumental 2800mm Trestle Table with Chamfered Edge Profiles',
    category: 'Dining & Millwork',
    price: 4540.00,
    compareAtPrice: 5200.00,
    rating: 4.8,
    reviewsCount: 33,
    badge: 'HOT',
    primaryImage: '/images/ladiya-gallery/interior-04.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-17.jpg',
    description: 'Hand-selected European white oak planks joined with traditional mortise-and-tenon craftsmanship. Finished with non-toxic matte hardwax oil to preserve natural tactile grain.',
    materials: ['FSC-Certified French White Oak', 'Concealed Steel Expansion Bracing', 'Zero-VOC Organic Hardwax Oil'],
    inStock: true,
    metals: ['Natural White Oak', 'Smoked European Oak', 'Bleached Nordic Oak'],
    sku: 'LAD-DIN-007'
  },
  {
    id: 'el-08',
    slug: 'organic-travertine-brass-floor-luminaire',
    title: 'Organic Travertine & Brass Floor Luminaire',
    subtitle: 'Turned Travertine Stem with Hand-Spun Opaline Glass Dome',
    category: 'Spatial Lighting',
    price: 1210.00,
    rating: 5.0,
    reviewsCount: 15,
    badge: 'NEW',
    primaryImage: '/images/ladiya-gallery/interior-07.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-02.jpg',
    description: 'A monolithic floor fixture pairing weight and grace. The hand-honed travertine column grounds the fixture, while the hand-blown opaline orb floods the corner in serene ambient warmth.',
    materials: ['Honed Roman Travertine Plinth', 'Hand-Spun Opal Glass', 'Foot-Operated Solid Brass Dimmer'],
    inStock: true,
    metals: ['Honed Travertine & Brass', 'Nero Marquina & Bronze'],
    sku: 'LAD-LGT-008'
  },
  {
    id: 'el-09',
    slug: 'fluted-white-oak-acoustic-wall-system',
    title: 'Fluted White Oak Acoustic Wall System',
    subtitle: 'Modular Slat Panels with Recycled PET Acoustic Felt Backing',
    category: 'Acoustic & Surfaces',
    price: 1430.00,
    compareAtPrice: 1750.00,
    rating: 4.9,
    reviewsCount: 27,
    badge: 'SALE',
    primaryImage: '/images/ladiya-gallery/interior-03.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-16.jpg',
    description: 'High-performance architectural slat paneling that eliminates room reverberation while infusing spaces with linear rhythmic texture and Scandinavian warmth.',
    materials: ['Real White Oak Veneer over Engineered Core', 'Class A Fire-Rated PET Acoustic Felt (NRC 0.85)'],
    inStock: true,
    metals: ['Natural White Oak', 'Charcoal Blackened Oak', 'Warm Walnut'],
    sku: 'LAD-ACS-009'
  },
  {
    id: 'el-10',
    slug: 'monolithic-nero-marquina-marble-plinth',
    title: 'Monolithic Nero Marquina Marble Plinth',
    subtitle: 'Geometric Solid Marble Cube with Beveled Mitred Edges',
    category: 'Living Architecture',
    price: 1360.00,
    rating: 4.9,
    reviewsCount: 52,
    badge: 'BEST SELLER',
    primaryImage: '/images/ladiya-gallery/interior-15.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-01.jpg',
    description: 'Sculptural Spanish Nero Marquina marble block featuring dramatic white calcified veining. Seamless mitred joins create an illusion of single-quarry solidity.',
    materials: ['Genuine Spanish Nero Marquina Marble', 'Honed Satin Sealant', 'Recessed Concealed Base'],
    inStock: true,
    metals: ['Nero Marquina Marble', 'Calacatta Viola', 'Roman Travertine'],
    sku: 'LAD-LIV-010'
  },
  {
    id: 'el-11',
    slug: 'architectural-track-luminaire-system',
    title: 'Architectural Track Luminaire System',
    subtitle: 'Surface-Mount Micro-Magnetic Track with Adjustable Projectors',
    category: 'Spatial Lighting',
    price: 2720.00,
    rating: 5.0,
    reviewsCount: 18,
    badge: 'HOT',
    primaryImage: '/images/ladiya-gallery/interior-08.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-11.jpg',
    description: 'A 48V low-profile magnetic track delivering museum-grade precision lighting for artwork and living spaces. Tool-free repositioning with integrated DALI dimming.',
    materials: ['Extruded Architectural Aluminum', '48V Magnetic Power Bus', '97 CRI Precision Optical Projectors'],
    inStock: true,
    metals: ['Matte Black Anodized', 'Architectural White'],
    sku: 'LAD-LGT-011'
  },
  {
    id: 'el-12',
    slug: 'curved-boucle-lounge-chair',
    title: 'Ergonomic Curved Bouclé Lounge Chair',
    subtitle: 'Sculptural Organic Silhouette Upholstered in Italian Wool Bouclé',
    category: 'Living Architecture',
    price: 2280.00,
    compareAtPrice: 2640.00,
    rating: 4.8,
    reviewsCount: 24,
    badge: 'SALE',
    primaryImage: '/images/ladiya-gallery/interior-06.jpg',
    secondaryImage: '/images/ladiya-gallery/interior-18.jpg',
    description: 'Embracing contours engineered for prolonged ergonomic repose. The sculptural curvilinear profile floats gracefully within open-plan living rooms and executive suites.',
    materials: ['Heavyweight Italian Wool Bouclé', 'Kiln-Dried Hardwood Internal Frame', 'Multi-Density High-Resilience Foam'],
    inStock: true,
    metals: ['Oatmeal Ivory Bouclé', 'Charcoal Wool', 'Warm Sand Linen'],
    sku: 'LAD-LIV-012'
  }
];

export const CATEGORIES = [
  {
    id: 'living',
    name: 'Living Architecture',
    count: 24,
    image: '/images/ladiya-gallery/interior-01.jpg',
    description: 'Monolithic travertine tables, sculptural bouclé lounges, and bespoke living room suites.'
  },
  {
    id: 'lighting',
    name: 'Spatial Lighting',
    count: 36,
    image: '/images/ladiya-gallery/interior-02.jpg',
    description: 'Circadian pendant rings, brushed brass linear tracks, and hand-blown opaline sconces.'
  },
  {
    id: 'dining',
    name: 'Dining & Millwork',
    count: 18,
    image: '/images/ladiya-gallery/interior-04.jpg',
    description: 'Solid European oak dining tables, custom credenzas, and integrated spatial cabinetry.'
  },
  {
    id: 'acoustic',
    name: 'Acoustic & Surfaces',
    count: 15,
    image: '/images/ladiya-gallery/interior-03.jpg',
    description: 'Fluted timber slat panels, acoustic felt systems, and natural architectural stone cladding.'
  },
  {
    id: 'suites',
    name: 'Penthouse Suites',
    count: 8,
    image: '/images/ladiya-gallery/interior-05.jpg',
    description: 'Complete turnkey residential architecture and luxury penthouse spatial packages.'
  }
];

export const BRAND_SERVICES = [
  {
    id: 'craft',
    icon: 'Sparkles',
    title: 'Architectural Craftsmanship',
    description: 'Every spatial element is custom-engineered and precision-milled by master European craftsmen.'
  },
  {
    id: 'warranty',
    icon: 'ShieldCheck',
    title: 'Generational Guarantee',
    description: 'Comprehensive structural warranties and lifetime architectural stone & joinery support.'
  },
  {
    id: 'shipping',
    icon: 'Truck',
    title: 'White-Glove Delivery & Installation',
    description: 'Complimentary insured freight, custom crating, and professional on-site white-glove assembly.'
  },
  {
    id: 'returns',
    icon: 'RotateCcw',
    title: '30-Day Spatial Exchange',
    description: 'Total satisfaction guaranteed with seamless spatial adjustments and dedicated concierge support.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Genevieve Laurent',
    location: 'Paris, France',
    rating: 5,
    text: '“The tactile presence and monolithic proportion of our custom dining suite and travertine plinths completely transformed our apartment into a serene architectural sanctuary. Ladiya Interior sets a global benchmark.”',
    product: 'Solid White Oak Architectural Dining Table'
  },
  {
    id: '2',
    author: 'Alexandra Vance',
    location: 'Tribeca, New York',
    rating: 5,
    text: '“Ladiya Interior executed our Tribeca penthouse renovation with surgical precision. The fluted timber acoustic paneling and integrated circadian lighting created an acoustic warmth unlike anything we’ve experienced.”',
    product: 'Monolithic Roman Travertine Coffee Table'
  },
  {
    id: '3',
    author: 'Sophia Chen',
    location: 'Kyoto, Japan',
    rating: 5,
    text: '“Every millimeter of millwork and natural stone alignment was flawless. The seamless harmony between natural materials and minimalist architectural discipline is breathtaking.”',
    product: 'Monolithic Fluted Brass Chandelier'
  }
];

export const BLOG_POSTS = [
  {
    id: 'b1',
    title: 'The Philosophy of Spatial Minimalism: Modern Architecture for Living Well',
    excerpt: 'Exploring how restrained proportions, natural illumination, and raw tectonic materiality create residential spaces of profound psychological restoration.',
    date: 'November 12, 2026',
    author: 'David Sterling, Principal Architect',
    image: '/images/ladiya-gallery/interior-24.jpg',
    readTime: '4 min read'
  },
  {
    id: 'b2',
    title: 'Sustainable Tectonic Materials: Natural Stone, Oak, and Cast Bronze in Modern Interiors',
    excerpt: 'Why natural Roman travertine, rift-sawn European white oak, and patinated architectural bronze define the permanence of contemporary living spaces.',
    date: 'November 08, 2026',
    author: 'Elena Vance, Materials & Spatial Director',
    image: '/images/ladiya-gallery/interior-25.jpg',
    readTime: '6 min read'
  },
  {
    id: 'b3',
    title: 'Circadian Lighting & Spatial Acoustics: Designing Quiet Residential Sanctuaries',
    excerpt: 'Mastering acoustic dampening through fluted timber millwork and indirect circadian luminaire systems for modern urban living.',
    date: 'November 02, 2026',
    author: 'Marcus Thorne, Spatial Acoustics Lead',
    image: '/images/ladiya-gallery/interior-19.jpg',
    readTime: '5 min read'
  }
];
