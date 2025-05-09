
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  features: string[];
  isSoldOut?: boolean;
}

export const categories = [
  "All",
  "Tracksuits",
  "T-Shirts",
  "Bottoms",
  "Accessories"
];

export const products: Product[] = [
  {
    id: "1",
    name: "Elite Performance Tracksuit",
    price: 189.99,
    description: "Premium athletic tracksuit designed for maximum performance and comfort during intense training sessions.",
    category: "Tracksuits",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Moisture-wicking fabric",
      "4-way stretch material",
      "Reflective details for visibility",
      "Secure zippered pockets"
    ]
  },
  {
    id: "2",
    name: "Pro Compression T-Shirt",
    price: 59.99,
    description: "High-performance compression t-shirt that supports muscles and improves blood circulation during workouts.",
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Compression fit",
      "Anti-odor technology",
      "UPF 30+ sun protection",
      "Seamless construction"
    ]
  },
  {
    id: "3",
    name: "Ultra Flex Training Bottoms",
    price: 79.99,
    description: "Versatile training pants with unmatched flexibility and durability for all types of workouts.",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Elastic waistband with drawcord",
      "Quick-dry technology",
      "Zippered ankle cuffs",
      "Hidden pocket for valuables"
    ]
  },
  {
    id: "4",
    name: "Performance Sports Bra",
    price: 49.99,
    description: "High-impact sports bra offering maximum support and comfort for intense training sessions.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Racerback design",
      "Removable cups",
      "Breathable mesh panels",
      "Wide elastic band for support"
    ]
  },
  {
    id: "5",
    name: "Limited Edition Gold Tracksuit",
    price: 249.99,
    description: "Our signature tracksuit with gold accents, crafted from premium materials for the athlete who demands the best.",
    category: "Tracksuits",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Premium gold hardware",
      "Water-resistant outer shell",
      "Temperature regulating lining",
      "Custom embroidered logo"
    ],
    isSoldOut: true
  },
  {
    id: "6",
    name: "Power Lift Compression Shorts",
    price: 54.99,
    description: "Designed specifically for weightlifting with reinforced seams and compression support for major muscle groups.",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "High-compression fabric",
      "Silicone grip thigh bands",
      "Reinforced stitching",
      "Squat-proof design"
    ]
  },
  {
    id: "7",
    name: "Breathe Tech Training Vest",
    price: 44.99,
    description: "Lightweight training vest with enhanced ventilation for maximum cooling during high-intensity workouts.",
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f63d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Mesh back panel",
      "Ergonomic armholes",
      "Reflective logo",
      "Extended length for coverage"
    ]
  },
  {
    id: "8",
    name: "Performance Headband",
    price: 24.99,
    description: "Stay focused with our non-slip headband that wicks away sweat and keeps hair out of your face during workouts.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1616266481594-a1a82b55755f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Silicone grip strip",
      "Quick-drying fabric",
      "Lightweight and packable",
      "One size fits most"
    ]
  }
];
