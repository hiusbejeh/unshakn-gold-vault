
import DashboardLayout from "@/layouts/DashboardLayout";
import ProductsTable from "@/components/dashboard/ProductsTable";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const ProductsManagement = () => {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Products Management</h1>

        <Tabs defaultValue="manage" className="mt-6">
          <TabsList>
            <TabsTrigger value="manage">Manage Products</TabsTrigger>
            <TabsTrigger value="upload">Upload Images</TabsTrigger>
          </TabsList>
          <TabsContent value="manage" className="mt-4">
            <ProductsTable />
          </TabsContent>
          <TabsContent value="upload" className="mt-4">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-6">Upload Product Images</h2>
              <ImageUploader />
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </DashboardLayout>
  );
};

export default ProductsManagement;
