
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import SocialIcons from "./SocialIcons";
import CartButton from "./CartButton";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Logo />

          {/* Desktop Navigation */}
          {!isMobile && <DesktopNavigation />}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            {/* Social media links - Only show on desktop */}
            {!isMobile && <SocialIcons className="mr-2" />}

            {/* Cart */}
            <CartButton />

            {/* Mobile menu button */}
            {isMobile && <MobileNavigation />}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
