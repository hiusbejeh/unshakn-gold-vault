
import { useState } from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, RotateCw } from "lucide-react";

interface SizeResult {
  size: string;
  bodyType: string;
  message: string;
}

// Size estimation logic
const estimateSize = (weight: number, height: number): SizeResult => {
  const bmi = weight / Math.pow(height / 100, 2);
  
  let size = "M";
  let bodyType = "Athletic";
  let message = "This size should fit you perfectly for an athletic build.";
  
  if (bmi < 18.5) {
    size = weight < 60 ? "XS" : "S";
    bodyType = "Slim";
    message = "This size will give you a fitted look for your slim frame.";
  } else if (bmi >= 18.5 && bmi < 25) {
    if (weight < 65) {
      size = "S";
    } else if (weight >= 65 && weight < 80) {
      size = "M";
    } else {
      size = "L";
    }
    bodyType = "Athletic";
    message = "This size will provide an ideal fit for your athletic build.";
  } else if (bmi >= 25 && bmi < 30) {
    if (weight < 85) {
      size = "L";
    } else {
      size = "XL";
    }
    bodyType = "Athletic";
    message = "This size offers comfort while maintaining a stylish fit.";
  } else {
    size = weight < 100 ? "XL" : "XXL";
    bodyType = "Bulky";
    message = "This size ensures comfort and a confident fit for your build.";
  }
  
  return { size, bodyType, message };
};

const AdminSizeEstimator = () => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<SizeResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    
    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      return;
    }
    
    setIsCalculating(true);
    setResult(null);
    
    // Simulate calculation delay
    setTimeout(() => {
      const sizeResult = estimateSize(weightValue, heightValue);
      setResult(sizeResult);
      setIsCalculating(false);
    }, 800);
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  return (
    <AdminLayout title="Size Estimator">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Size Estimation Tool</h2>
          <p className="text-muted-foreground">
            Help customers find their perfect size by entering their measurements below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>
                  Enter customer's weight and height to calculate their recommended size
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCalculate} className="space-y-4">
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      min="30"
                      max="200"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter weight in kg"
                      className="border-gold-dark/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      min="100"
                      max="220"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter height in cm"
                      className="border-gold-dark/30"
                      required
                    />
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-gold-DEFAULT to-gold-light text-black hover:opacity-90"
                      disabled={isCalculating}
                    >
                      {isCalculating ? (
                        <>
                          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                          Calculating...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-4 w-4" />
                          Calculate Size
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleReset}>
                      Reset
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {result ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-card to-card/80 border-gold-DEFAULT/20">
                  <CardHeader>
                    <CardTitle className="text-gold-light">Recommended Size</CardTitle>
                    <CardDescription>
                      Based on the provided weight ({weight} kg) and height ({height} cm)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gold-DEFAULT">
                          {result.size}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Body Type:</span>
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-gold-DEFAULT/10 text-gold-DEFAULT rounded-full text-sm font-medium">
                            {result.bodyType}
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Fit Notes:</span>
                        <p className="text-foreground mt-1">{result.message}</p>
                      </div>
                      
                      <div className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          This is an estimation. For the best fit, customers should refer to our 
                          detailed size charts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 border border-dashed border-muted-foreground/20 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-gold-DEFAULT/70" />
                </div>
                <h3 className="text-lg font-medium mb-2">Size Results</h3>
                <p className="text-muted-foreground text-sm">
                  Enter weight and height measurements to see the recommended size
                </p>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Size Chart Reference */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Size Reference Chart</CardTitle>
            <CardDescription>Standard sizing used for calculations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-muted-foreground text-sm border-b">
                    <th className="text-left py-2 px-4">Size</th>
                    <th className="text-left py-2 px-4">Weight Range (kg)</th>
                    <th className="text-left py-2 px-4">Height Range (cm)</th>
                    <th className="text-left py-2 px-4">Body Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">XS</td>
                    <td className="py-2 px-4">40-55</td>
                    <td className="py-2 px-4">150-165</td>
                    <td className="py-2 px-4">Slim</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">S</td>
                    <td className="py-2 px-4">55-65</td>
                    <td className="py-2 px-4">160-170</td>
                    <td className="py-2 px-4">Slim/Athletic</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">M</td>
                    <td className="py-2 px-4">65-80</td>
                    <td className="py-2 px-4">165-180</td>
                    <td className="py-2 px-4">Athletic</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">L</td>
                    <td className="py-2 px-4">75-90</td>
                    <td className="py-2 px-4">175-185</td>
                    <td className="py-2 px-4">Athletic/Bulky</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">XL</td>
                    <td className="py-2 px-4">85-100</td>
                    <td className="py-2 px-4">180-190</td>
                    <td className="py-2 px-4">Bulky</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">XXL</td>
                    <td className="py-2 px-4">95+</td>
                    <td className="py-2 px-4">185+</td>
                    <td className="py-2 px-4">Bulky</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSizeEstimator;
