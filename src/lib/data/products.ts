
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Analytics Pro",
    description: "Advanced analytics solution with AI-powered insights.",
    price: 199,
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    features: ["Real-time data processing", "Custom dashboards", "Predictive modeling", "API access"]
  },
  {
    id: "2",
    name: "IntegrationHub",
    description: "Connect all your tools and platforms seamlessly.",
    price: 149,
    category: "Integration",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    features: ["200+ app connections", "Visual workflow builder", "Automated syncing", "Custom webhooks"]
  },
  {
    id: "3",
    name: "SecureVault",
    description: "Enterprise-grade security for all your sensitive data.",
    price: 299,
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    features: ["End-to-end encryption", "Access controls", "Compliance monitoring", "Threat detection"]
  },
  {
    id: "4",
    name: "CollabSpace",
    description: "Real-time collaboration platform for distributed teams.",
    price: 99,
    category: "Collaboration",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    features: ["Document sharing", "Video meetings", "Task management", "Team chat"]
  },
  {
    id: "5",
    name: "CloudScale",
    description: "Scalable cloud infrastructure that grows with your needs.",
    price: 249,
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    features: ["Auto-scaling", "Load balancing", "Global CDN", "99.9% uptime guarantee"]
  },
  {
    id: "6",
    name: "CustomerInsight",
    description: "Understand your customers better with advanced analysis.",
    price: 179,
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    features: ["Behavior tracking", "Sentiment analysis", "Customer segmentation", "ROI reporting"]
  },
  {
    id: "7",
    name: "DevOpsFlow",
    description: "Streamline your development and operations workflow.",
    price: 219,
    category: "Development",
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=800&q=80",
    features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Incident management"]
  },
  {
    id: "8",
    name: "MarketingAutomation",
    description: "Automate your marketing campaigns for better results.",
    price: 159,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
    features: ["Email campaigns", "Social media scheduling", "Landing page builder", "A/B testing"]
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(products.map(product => product.category))).sort()
];
