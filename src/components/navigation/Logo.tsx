
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
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
  );
};

export default Logo;
