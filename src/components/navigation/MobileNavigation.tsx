
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialIcons from "./SocialIcons";
import ThemeToggle from "@/components/ui/theme-toggle";

const MobileNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
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
              <div className="py-4">
                <SocialIcons size={24} className="justify-center space-x-8" />
              </div>
              
              {/* Theme Toggle for Mobile */}
              <div className="flex justify-center py-4 border-t border-gray-200 dark:border-gray-800">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
