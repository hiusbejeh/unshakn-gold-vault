
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const ProductFilter = ({
  categories,
  activeCategory,
  onChange,
}: ProductFilterProps) => {
  return (
    <div className="pb-8 overflow-x-auto">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <div key={category} className="relative">
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              className={`${
                activeCategory === category
                  ? "gold-gradient text-black"
                  : ""
              } relative z-10`}
              onClick={() => onChange(category)}
            >
              {category}
            </Button>
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 rounded-md bg-primary"
                initial={false}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
