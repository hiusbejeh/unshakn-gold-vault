
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/components/ui/use-toast";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Get featured products (limit to 4)
  const featuredProducts = products.slice(0, 4);
  
  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        ...product,
        size: "M", // Default size
        quantity: 1
      });
      
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">
            Featured <span className="gold-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our most popular performance gear designed for athletes who demand excellence.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800/50 shadow-lg"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold uppercase px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
              </Link>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-xl gold-text font-bold">${product.price}</p>
                
                <div className="mt-3 flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {}}
                  >
                    View Details
                  </Button>
                  
                  <Button 
                    className="gold-gradient text-black font-semibold text-xs"
                    size="sm"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <ShoppingCart className="mr-1 h-3 w-3" /> Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="outline" className="font-bold">
              VIEW ALL PRODUCTS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
