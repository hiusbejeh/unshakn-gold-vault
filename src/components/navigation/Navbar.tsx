
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Instagram, TikTok } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useIsMobile } from "@/hooks/use-mobile";

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

const Navbar = () => {
  const { theme } = useTheme();
  const { totalItems } = useCart();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-extrabold tracking-tighter"
              >
                <span className="gold-text">UNSHAKN</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden md:flex items-center space-x-8"
              >
                <Link to="/" className="font-bold hover:text-primary transition-colors">
                  HOME
                </Link>
                <Link to="/products" className="font-bold hover:text-primary transition-colors">
                  SHOP
                </Link>
                <Link to="/about" className="font-bold hover:text-primary transition-colors">
                  ABOUT
                </Link>
                <Link to="/contact" className="font-bold hover:text-primary transition-colors">
                  CONTACT
                </Link>
              </motion.nav>
            )}

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              {/* Social media links - Only show on desktop */}
              {!isMobile && (
                <div className="flex items-center space-x-3 mr-2">
                  <a
                    href="https://instagram.com/unshaknwears"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://tiktok.com/@unshaknwears"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <TikTok size={20} />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              )}

              {/* Cart */}
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Mobile menu button */}
              {isMobile && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="font-bold py-3 border-b border-gray-200 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/products"
                className="font-bold py-3 border-b border-gray-200 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link
                to="/about"
                className="font-bold py-3 border-b border-gray-200 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="font-bold py-3 border-b border-gray-200 dark:border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              
              {/* Social Media Icons for Mobile */}
              <div className="flex justify-center space-x-8 py-4">
                <a
                  href="https://instagram.com/unshaknwears"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://tiktok.com/@unshaknwears"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <TikTok size={24} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
