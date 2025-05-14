import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { TikTokIcon } from "@/components/icons/CustomIcons";

const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-whatsapp"
  >
    <path d="M21 12a9 9 0 0 1-16.519 4.913L3 21l4.087-1.481A9 9 0 1 1 21 12Z" />
    <path d="M9 10a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z" />
    <path d="M13 13a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0v-1Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tighter gold-text">UNSHAKN</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Premium athletic wear designed for those who refuse to compromise on performance, 
              comfort, or style. FROM ATHLETES, FOR ATHLETES.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/unshaknwears" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://tiktok.com/@unshaknwears" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <TikTokIcon size={18} />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/products?category=Tracksuits" className="text-gray-400 hover:text-primary transition-colors">Tracksuits</Link></li>
              <li><Link to="/products?category=T-Shirts" className="text-gray-400 hover:text-primary transition-colors">T-Shirts</Link></li>
              <li><Link to="/products?category=Bottoms" className="text-gray-400 hover:text-primary transition-colors">Bottoms</Link></li>
              <li><Link to="/products?category=Accessories" className="text-gray-400 hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-400 hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} UNSHAKN. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
