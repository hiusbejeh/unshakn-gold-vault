
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { useToast } from "@/components/ui/use-toast";

interface ProductDetailsProps {
  productId: string;
  onAddToCart: (productId: string, size?: string) => void;
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductDetails = ({ productId, onAddToCart }: ProductDetailsProps) => {
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = products.find(p => p.id === productId);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(productId, selectedSize);
    toast({
      title: "Added to cart",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `UNSHAKN - ${product.name}`,
        text: `Check out this ${product.name} from UNSHAKN`,
        url: window.location.href
      });
    } else {
      toast({
        title: "Link copied",
        description: "Product link copied to clipboard!"
      });
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="image-zoom overflow-hidden rounded-xl bg-muted/30"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover aspect-square"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm font-medium px-2 py-1 rounded bg-primary/10 text-primary">
            {product.category}
          </span>
          <Button variant="ghost" size="icon" onClick={handleShare}>
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold">{product.name}</h2>
        <p className="text-xl gold-text font-bold my-2">${product.price}</p>
        
        <div className="mt-4 text-muted-foreground">
          <p>{product.description}</p>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-2">Select Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                className={selectedSize === size ? "gold-gradient text-black" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-2">Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-6">
          <Button 
            onClick={handleAddToCart}
            className="w-full gold-gradient text-black font-medium"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
