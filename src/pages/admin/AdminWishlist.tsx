
import { useState } from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { products } from "@/lib/data/products";
import { Button } from "@/components/ui/button";

// Mock wishlist data
const mockWishlistData = products.map(product => ({
  productId: product.id,
  count: Math.floor(Math.random() * 15) + 1 // Random number between 1-15
})).sort((a, b) => b.count - a.count); // Sort by count descending

const AdminWishlist = () => {
  const [sortOrder, setSortOrder] = useState<"most" | "least">("most");
  
  const sortedData = [...mockWishlistData].sort((a, b) => 
    sortOrder === "most" ? b.count - a.count : a.count - b.count
  );
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "most" ? "least" : "most");
  };

  return (
    <AdminLayout title="Wishlist Viewer">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Product Wishlist Data</h2>
        <p className="text-muted-foreground">
          Track which products are grabbing the most attention from customers
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-sm text-muted-foreground">
            Showing {mockWishlistData.length} products
          </span>
        </div>
        <Button variant="outline" onClick={toggleSortOrder}>
          Sort by: {sortOrder === "most" ? "Most Popular" : "Least Popular"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedData.map(data => {
          const product = products.find(p => p.id === data.productId);
          
          if (!product) return null;
          
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm opacity-80">{product.category}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-500 fill-red-500 mr-2" />
                      <span className="font-medium">{data.count}</span>
                      <span className="text-sm text-muted-foreground ml-1">wishlist adds</span>
                    </div>
                    <div>
                      <span className="text-sm">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Wishlist Analytics</CardTitle>
          <CardDescription>Overall wishlist statistics and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card/50 p-4 rounded-lg border">
              <h4 className="text-sm text-muted-foreground mb-1">Total Wishlist Adds</h4>
              <p className="text-3xl font-bold">
                {mockWishlistData.reduce((sum, item) => sum + item.count, 0)}
              </p>
            </div>
            <div className="bg-card/50 p-4 rounded-lg border">
              <h4 className="text-sm text-muted-foreground mb-1">Most Popular Category</h4>
              <p className="text-xl font-medium">T-Shirts</p>
            </div>
            <div className="bg-card/50 p-4 rounded-lg border">
              <h4 className="text-sm text-muted-foreground mb-1">Average Adds per Product</h4>
              <p className="text-3xl font-bold">
                {(mockWishlistData.reduce((sum, item) => sum + item.count, 0) / mockWishlistData.length).toFixed(1)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminWishlist;
