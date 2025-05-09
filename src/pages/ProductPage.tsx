
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { products } from "@/lib/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import InstagramFeed from "@/components/social/InstagramFeed";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProductDetails from "@/components/products/ProductDetails";
import { useCart } from "@/hooks/useCart";

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleAddToCart = (productId: string, size?: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        ...product,
        size: size || "M", // Default size if none selected
        quantity: 1
      });
    }
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-lg mb-4"
            >
              <span className="gold-text">Premium</span> Collection
            </motion.h1>
            <p className="text-lg text-muted-foreground">
              Discover athletic wear designed for peak performance and unmatched style.
              From the gym to the street, UNSHAKN has you covered.
            </p>
          </div>

          <ProductFilter
            categories={["All", "Tracksuits", "T-Shirts", "Bottoms", "Accessories"]}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => handleProductClick(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </motion.div>
          
          <div className="mt-24">
            <h2 className="heading-md text-center mb-12">
              <span className="gold-text">#UNSHAKN</span> On Instagram
            </h2>
            <InstagramFeed />
            
            <div className="mt-12 text-center">
              <Button asChild className="gold-gradient text-black">
                <a href="https://instagram.com/unshaknwears" target="_blank" rel="noopener noreferrer">
                  Follow Us On Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <ProductDetails 
              productId={selectedProduct} 
              onAddToCart={handleAddToCart}
            />
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default ProductPage;
