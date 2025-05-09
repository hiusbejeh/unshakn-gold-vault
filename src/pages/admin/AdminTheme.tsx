
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/providers/ThemeProvider";
import { Check, Image, Palette, RotateCw, Upload } from "lucide-react";

const themeColors = [
  { name: "Gold", value: "#F0C05A", class: "bg-[#F0C05A]" },
  { name: "Black", value: "#111111", class: "bg-[#111111]" },
  { name: "White", value: "#FFFFFF", class: "bg-[#FFFFFF]" },
  { name: "Purple", value: "#8B5CF6", class: "bg-[#8B5CF6]" },
  { name: "Blue", value: "#3B82F6", class: "bg-[#3B82F6]" },
  { name: "Green", value: "#10B981", class: "bg-[#10B981]" },
];

const AdminTheme = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [selectedColor, setSelectedColor] = useState("#F0C05A");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSaveTheme = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      // Here you would typically save to a database or external storage
      toast({
        title: "Theme Settings Saved",
        description: "Your customizations have been applied successfully.",
      });
      setIsSaving(false);
    }, 1200);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <AdminLayout title="Theme Customizer">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Customize Brand Appearance</h2>
        <p className="text-muted-foreground">
          Adjust the visual elements of your brand with real-time preview
        </p>
      </div>

      <Tabs defaultValue="colors">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 lg:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>
                  Customize your brand's visual identity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="colors">
                    <Palette className="h-4 w-4 mr-2" />
                    Colors
                  </TabsTrigger>
                  <TabsTrigger value="logo">
                    <Image className="h-4 w-4 mr-2" />
                    Logo
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="colors" className="space-y-6">
                  <div>
                    <Label className="block mb-3">Color Theme</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant={theme === "light" ? "default" : "outline"}
                        onClick={() => setTheme("light")}
                        className={theme === "light" ? "bg-gradient-to-r from-white to-gray-100 text-black" : ""}
                      >
                        Light Mode
                      </Button>
                      <Button
                        variant={theme === "dark" ? "default" : "outline"}
                        onClick={() => setTheme("dark")}
                        className={theme === "dark" ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white" : ""}
                      >
                        Dark Mode
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block mb-3">Primary Brand Color</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {themeColors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => handleColorSelect(color.value)}
                          className={`h-12 rounded-md flex items-center justify-center ${color.class} border ${
                            selectedColor === color.value
                              ? "ring-2 ring-offset-2 ring-offset-background ring-primary"
                              : "ring-0"
                          }`}
                          style={{
                            color: color.value === "#FFFFFF" ? "#000000" : "#FFFFFF"
                          }}
                        >
                          {selectedColor === color.value && (
                            <Check className="h-4 w-4" />
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Selected: {themeColors.find(c => c.value === selectedColor)?.name}
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="logo" className="space-y-6">
                  <div>
                    <Label className="block mb-3">Brand Logo</Label>
                    <div 
                      className="border-2 border-dashed border-muted rounded-lg p-6 text-center cursor-pointer hover:bg-muted/5 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleLogoChange}
                        accept="image/png,image/jpeg,image/svg+xml"
                        className="hidden"
                      />
                      
                      <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm font-medium mb-1">
                        {logoPreview ? "Replace logo" : "Upload brand logo"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG or SVG (max. 2MB)
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <div className="mt-6 pt-4 border-t">
                  <Button
                    onClick={handleSaveTheme}
                    disabled={isSaving}
                    className="w-full bg-gradient-to-r from-gold-DEFAULT to-gold-light text-black hover:opacity-90"
                  >
                    {isSaving ? (
                      <>
                        <RotateCw className="h-4 w-4 mr-2 animate-spin" />
                        Saving Changes...
                      </>
                    ) : (
                      <>Save Theme Changes</>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-3/5 lg:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  See how your changes will look on your site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-background border-b p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {logoPreview ? (
                        <img
                          src={logoPreview}
                          alt="Brand Logo"
                          className="h-8"
                        />
                      ) : (
                        <span className="text-xl font-bold bg-gradient-to-r from-gold-light to-gold-DEFAULT bg-clip-text text-transparent">
                          UNSHAKN
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">Home</span>
                      <span className="text-sm">Products</span>
                      <span className="text-sm">About</span>
                      <Button 
                        size="sm" 
                        style={{ backgroundColor: selectedColor }}
                        className="text-black font-medium"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-8 min-h-[350px] relative">
                    <div className="max-w-2xl mx-auto text-center">
                      <h3 className="text-3xl font-bold mb-4">
                        UNSHAKN –{" "}
                        <span style={{ color: selectedColor }}>
                          From Athletes, For Athletes
                        </span>
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Experience the perfect blend of style and performance with our premium athletic wear collection.
                      </p>
                      <div className="flex justify-center gap-4">
                        <Button 
                          style={{ backgroundColor: selectedColor }} 
                          className="text-black font-medium"
                        >
                          Shop Collection
                        </Button>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                      {theme === "dark" ? "Dark Mode" : "Light Mode"} |{" "}
                      Primary: {themeColors.find(c => c.value === selectedColor)?.name}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-lg p-4 border">
                    <div 
                      className="w-full h-2 mb-2 rounded"
                      style={{ backgroundColor: selectedColor }}
                    ></div>
                    <h4 className="text-sm font-medium">Button</h4>
                  </div>
                  <div className="rounded-lg p-4 border">
                    <div className="w-full h-2 mb-2 rounded bg-foreground/20"></div>
                    <h4 className="text-sm font-medium">Text</h4>
                  </div>
                  <div className="rounded-lg p-4 border">
                    <div className="w-full h-2 mb-2 rounded bg-muted-foreground"></div>
                    <h4 className="text-sm font-medium">Secondary</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Tabs>
    </AdminLayout>
  );
};

export default AdminTheme;
