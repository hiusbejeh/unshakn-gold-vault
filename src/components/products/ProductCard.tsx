
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: () => void;
}

const ProductCard = ({ product, onClick, onAddToCart }: ProductCardProps) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border-border h-full flex flex-col">
        <div
          className="relative h-80 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-2 right-2 bg-primary text-black px-2 py-1 rounded text-xs font-medium">
            {product.category}
          </div>
          
          {product.isSoldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="rotate-12 bg-destructive text-white px-4 py-2 font-bold text-xl uppercase">
                Sold Out
              </span>
            </div>
          )}
          
          {isHovered && !product.isSoldOut && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40"
            >
              <Button onClick={(e) => {
                e.stopPropagation();
                onClick();
              }} variant="default" size="sm" className="bg-white/90 text-black hover:bg-white">
                <Eye className="mr-1 h-4 w-4" />
                Quick View
              </Button>
              <Button onClick={handleAddToCart} size="sm" className="gold-gradient text-black">
                <ShoppingCart className="mr-1 h-4 w-4" />
                Add to Cart
              </Button>
            </motion.div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0 flex-1">
          <ul className="space-y-1 text-sm">
            {product.features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="border-t pt-4 flex justify-between items-center">
          <div className="font-bold text-xl gold-text">${product.price}</div>
          {!product.isSoldOut && (
            <Button 
              onClick={handleAddToCart} 
              size="sm" 
              className="gold-gradient text-black"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
