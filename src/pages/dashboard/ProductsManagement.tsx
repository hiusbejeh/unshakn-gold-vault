
import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProductsTable from "@/components/dashboard/ProductsTable";
import ProductForm from "@/components/dashboard/ProductForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Product } from "@/lib/data/products";

const ProductsManagement = () => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Products Management</h1>

        <Tabs defaultValue={editingProduct ? "add" : "manage"} className="mt-6">
          <TabsList>
            <TabsTrigger value="manage">Manage Products</TabsTrigger>
            <TabsTrigger value="add">{editingProduct ? "Edit Product" : "Add Product"}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manage" className="mt-4">
            <ProductsTable onEditProduct={handleEditProduct} />
          </TabsContent>
          
          <TabsContent value="add" className="mt-4">
            <div className="bg-card rounded-lg border p-6">
              <ProductForm 
                product={editingProduct} 
                onCancel={() => setEditingProduct(null)} 
              />
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </DashboardLayout>
  );
};

export default ProductsManagement;
