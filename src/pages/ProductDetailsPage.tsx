
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { products } from "@/lib/data/products";
import ProductDetails from "@/components/products/ProductDetails";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (productId: string, size?: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        ...product,
        size: size || "M",
        quantity: 1
      });
    }
  };

  const product = products.find(p => p.id === id);

  if (!product && !loading) {
    return (
      <MainLayout>
        <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 text-center">
          <h1 className="heading-lg mb-6">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button className="gold-gradient text-black" onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {loading ? (
            <div className="w-full h-[400px] bg-muted animate-pulse rounded-lg"></div>
          ) : (
            product && <ProductDetails productId={product.id} onAddToCart={handleAddToCart} />
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetailsPage;
