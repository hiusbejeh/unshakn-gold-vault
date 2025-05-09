
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products, Product, categories } from "@/lib/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Image, Save, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const AdminUpload = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productId = params.get("id");
  const isEditing = !!productId;

  // Default placeholder image
  const placeholderImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

  const [formData, setFormData] = useState<Omit<Product, "id"> & { id?: string }>({
    name: "",
    price: 0,
    description: "",
    category: categories[1] || "T-Shirts", // Default category
    image: placeholderImage,
    features: ["", "", ""],
    isSoldOut: false
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  useEffect(() => {
    if (productId) {
      const existingProduct = products.find(p => p.id === productId);
      
      if (existingProduct) {
        setFormData(existingProduct);
        setImagePreview(existingProduct.image);
      }
    }
  }, [productId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "price") {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    
    setFormData({
      ...formData,
      features: updatedFeatures,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImagePreview(event.target.result as string);
          
          setFormData({
            ...formData,
            image: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToggleStock = () => {
    setFormData({
      ...formData,
      isSoldOut: !formData.isSoldOut,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.description || formData.price <= 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // For demo purposes, just show a success message
    toast({
      title: isEditing ? "Product Updated" : "Product Added",
      description: `${formData.name} has been successfully ${isEditing ? "updated" : "added"}`,
    });

    setTimeout(() => {
      navigate("/admin/products");
    }, 1500);
  };

  return (
    <AdminLayout title={isEditing ? "Edit Product" : "Add New Product"}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product Name*</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gold-dark/30"
                      placeholder="Enter product name"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price ($)*</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={handleChange}
                        className="border-gold-dark/30"
                        placeholder="0.00"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Category*</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gold-dark/30 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        {categories.filter(cat => cat !== "All").map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description*</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="min-h-[120px] border-gold-dark/30"
                      placeholder="Enter product description"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Product Features</Label>
                    <div className="space-y-2">
                      {formData.features.map((feature, index) => (
                        <Input
                          key={index}
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          placeholder={`Feature ${index + 1}`}
                          className="border-gold-dark/30"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="image">Product Image</Label>
                    <div className="mt-1 flex items-center">
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gold-dark/30 rounded-lg cursor-pointer hover:border-gold-DEFAULT/50 transition-colors"
                      >
                        <div className="space-y-1 text-center">
                          <Image className="mx-auto h-12 w-12 text-muted-foreground" />
                          <div className="text-sm text-muted-foreground">
                            <span>Drag and drop or click to upload</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG up to 5MB
                          </p>
                        </div>
                        <input
                          id="image-upload"
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      type="button"
                      variant={formData.isSoldOut ? "outline" : "default"}
                      className={`${
                        formData.isSoldOut 
                          ? "border-red-500/30 text-red-500 hover:bg-red-500/10" 
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                      onClick={handleToggleStock}
                    >
                      {formData.isSoldOut ? (
                        <X className="h-4 w-4 mr-2" />
                      ) : (
                        <Check className="h-4 w-4 mr-2" />
                      )}
                      {formData.isSoldOut ? "Mark as In Stock" : "Mark as Sold Out"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/products")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-gold-DEFAULT to-gold-light text-black hover:opacity-90"
              >
                <Save className="h-4 w-4 mr-2" />
                {isEditing ? "Update Product" : "Save Product"}
              </Button>
            </div>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Product Preview</h3>
              
              <div className="rounded-lg overflow-hidden border mb-4">
                <img
                  src={imagePreview || formData.image || placeholderImage}
                  alt="Product preview"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">{formData.name || "Product Name"}</h4>
                <p className="text-xl font-bold text-gold-DEFAULT">
                  ${formData.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {formData.description || "Product description will appear here"}
                </p>
                
                <div className="mt-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${formData.isSoldOut ? "bg-red-500/20 text-red-500" : "bg-green-500/20 text-green-500"}`}>
                    {formData.isSoldOut ? "Sold Out" : "In Stock"}
                  </span>
                  <span className="ml-2 px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
                    {formData.category}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminUpload;
