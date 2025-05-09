
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import { categories, products } from "@/lib/data/products";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);
    
  const handleProductClick = (productId: string) => {
    // You could navigate to product page or open modal
    console.log("Product clicked:", productId);
  };

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        ...product,
        size: "M", // Default size
        quantity: 1
      });
    }
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-4">
              Explore Our <span className="gold-text">Products</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover innovative solutions designed to transform your business and drive growth.
            </p>
          </div>

          <ProductFilter
            categories={categories}
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
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductsPage;
