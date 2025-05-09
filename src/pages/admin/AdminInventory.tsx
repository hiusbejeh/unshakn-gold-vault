
import { useState } from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Search, Filter, RotateCw, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { products as initialProducts, Product } from "@/lib/data/products";

// Create mock product inventory data
interface InventoryItem extends Product {
  stock: number;
}

const createInventoryData = (): InventoryItem[] => {
  return initialProducts.map(product => ({
    ...product,
    stock: product.isSoldOut ? 0 : Math.floor(Math.random() * 25) + 1 // Random stock from 1-25
  }));
};

const AdminInventory = () => {
  const { toast } = useToast();
  const [inventory, setInventory] = useState<InventoryItem[]>(createInventoryData());
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "low" | "out">("all");
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const filteredInventory = inventory
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => {
      if (filter === "all") return true;
      if (filter === "low") return item.stock > 0 && item.stock < 5;
      if (filter === "out") return item.stock === 0;
      return true;
    });

  const handleUpdateStock = (id: string, change: number) => {
    setIsUpdating(id);
    
    // Simulate API call
    setTimeout(() => {
      setInventory(prev => 
        prev.map(item => {
          if (item.id === id) {
            const newStock = Math.max(0, item.stock + change);
            return {
              ...item,
              stock: newStock,
              isSoldOut: newStock === 0
            };
          }
          return item;
        })
      );
      
      toast({
        title: "Inventory Updated",
        description: change > 0 ? "Stock has been added." : "Stock has been reduced.",
      });
      
      setIsUpdating(null);
    }, 600);
  };

  const handleRestock = (id: string, amount: number = 10) => {
    handleUpdateStock(id, amount);
  };

  const getTotalProducts = () => inventory.length;
  const getTotalStock = () => inventory.reduce((sum, item) => sum + item.stock, 0);
  const getLowStockCount = () => inventory.filter(item => item.stock > 0 && item.stock < 5).length;
  const getOutOfStockCount = () => inventory.filter(item => item.stock === 0).length;

  return (
    <AdminLayout title="Inventory Manager">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Stock Management</h2>
        <p className="text-muted-foreground">
          Monitor and update your product inventory levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-card rounded-lg border p-4"
        >
          <p className="text-sm text-muted-foreground">Total Products</p>
          <h3 className="text-2xl font-bold mt-1">{getTotalProducts()}</h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="bg-card rounded-lg border p-4"
        >
          <p className="text-sm text-muted-foreground">Total Stock</p>
          <h3 className="text-2xl font-bold mt-1">{getTotalStock()}</h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="bg-card rounded-lg border p-4"
        >
          <p className="text-sm text-muted-foreground">Low Stock Items</p>
          <h3 className="text-2xl font-bold mt-1 text-amber-500">{getLowStockCount()}</h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="bg-card rounded-lg border p-4"
        >
          <p className="text-sm text-muted-foreground">Out of Stock</p>
          <h3 className="text-2xl font-bold mt-1 text-red-500">{getOutOfStockCount()}</h3>
        </motion.div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gold-dark/30 w-full"
            />
          </div>
        </div>
        
        <div className="flex space-x-2 w-full md:w-auto">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-gradient-to-r from-gold-DEFAULT to-gold-light text-black" : ""}
          >
            All
          </Button>
          <Button
            variant={filter === "low" ? "default" : "outline"}
            onClick={() => setFilter("low")}
            className={filter === "low" ? "bg-amber-500 text-black" : ""}
          >
            <Filter className="h-4 w-4 mr-2" />
            Low Stock
          </Button>
          <Button
            variant={filter === "out" ? "default" : "outline"}
            onClick={() => setFilter("out")}
            className={filter === "out" ? "bg-red-500 text-white" : ""}
          >
            <Filter className="h-4 w-4 mr-2" />
            Out of Stock
          </Button>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-card rounded-lg border"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-center py-3 px-4">Current Stock</th>
                <th className="text-center py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.length > 0 ? (
                filteredInventory.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">{item.category}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleUpdateStock(item.id, -1)}
                          disabled={item.stock === 0 || isUpdating === item.id}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-3 w-10 text-center">
                          {isUpdating === item.id ? (
                            <RotateCw className="h-4 w-4 animate-spin mx-auto" />
                          ) : (
                            item.stock
                          )}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleUpdateStock(item.id, 1)}
                          disabled={isUpdating === item.id}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div>
                        {item.stock === 0 ? (
                          <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs">
                            Out of Stock
                          </span>
                        ) : item.stock < 5 ? (
                          <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-xs">
                            Low Stock
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                            In Stock
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      {item.stock === 0 ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT/10"
                          onClick={() => handleRestock(item.id)}
                          disabled={isUpdating === item.id}
                        >
                          {isUpdating === item.id ? (
                            <RotateCw className="h-3 w-3 mr-1 animate-spin" />
                          ) : (
                            <Check className="h-3 w-3 mr-1" />
                          )}
                          Restock
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-muted-foreground"
                          onClick={() => handleUpdateStock(item.id, -item.stock)}
                          disabled={isUpdating === item.id}
                        >
                          Mark Sold Out
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-muted-foreground">
                    No products found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminInventory;
