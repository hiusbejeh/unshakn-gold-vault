
import { useState } from "react";
import { toast } from "sonner";
import { Copy, UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { v4 as uuidv4 } from "uuid";
import { Product } from "@/lib/data/products";

interface ProductFormProps {
  product?: Product | null;
  onCancel?: () => void;
  onSuccess?: () => void;
}

const categories = ["Tracksuits", "T-Shirts", "Bottoms", "Accessories"];

const ProductForm = ({ product, onCancel, onSuccess }: ProductFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>(
    product ?? {
      name: "",
      description: "",
      price: 0,
      category: "T-Shirts",
      image: "",
      features: [""],
      isSoldOut: false,
    }
  );

  const [imagePreview, setImagePreview] = useState<string | null>(
    formData.image || null
  );
  const [instagramLink, setInstagramLink] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgUrl = event.target?.result as string;
        setImagePreview(imgUrl);
        setFormData({ ...formData, image: imgUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...(formData.features || [])];
    updatedFeatures[index] = value;
    setFormData({ ...formData, features: updatedFeatures });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...(formData.features || []), ""],
    });
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = [...(formData.features || [])];
    updatedFeatures.splice(index, 1);
    setFormData({ ...formData, features: updatedFeatures });
  };

  const copyInstagramLink = () => {
    navigator.clipboard.writeText(instagramLink);
    toast.success("Link copied to clipboard!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, this would call an API to save the product
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success(
        product ? "Product updated successfully!" : "Product added successfully!"
      );
      
      if (onSuccess) {
        onSuccess();
      }
      
      if (!product) {
        // Reset form if adding a new product
        setFormData({
          name: "",
          description: "",
          price: 0,
          category: "T-Shirts",
          image: "",
          features: [""],
          isSoldOut: false,
        });
        setImagePreview(null);
        setInstagramLink("");
      }
    } catch (error) {
      toast.error("Error saving product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
                required
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: parseFloat(e.target.value) || 0,
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Label htmlFor="soldout">Sold Out</Label>
              <Switch
                id="soldout"
                checked={formData.isSoldOut || false}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isSoldOut: checked })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Instagram Post Link</Label>
              <div className="flex space-x-2">
                <Input
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                  placeholder="https://instagram.com/p/..."
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={copyInstagramLink}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Product Image *</Label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors">
                <input
                  type="file"
                  id="product-image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview ? (
                  <div className="relative aspect-square mx-auto overflow-hidden rounded-lg">
                    <img
                      src={imagePreview}
                      alt="Product preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData({ ...formData, image: "" });
                      }}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="product-image"
                    className="flex flex-col items-center gap-2 cursor-pointer p-8"
                  >
                    <UploadCloud className="h-10 w-10 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-muted-foreground">
                      PNG, JPG or WEBP (max 5MB)
                    </span>
                  </label>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Product Features</Label>
              {formData.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder={`Feature ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFeature(index)}
                    disabled={formData.features?.length === 1}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addFeature}
                className="mt-2"
              >
                Add Feature
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" className="gold-gradient text-black" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : product ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
