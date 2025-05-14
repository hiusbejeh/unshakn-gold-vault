
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DesktopNavigation = () => {
  return (
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
  );
};

export default DesktopNavigation;
