
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const correctPassword = "الله اكبر";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (password === correctPassword) {
        localStorage.setItem("unshakn-admin-auth", "true");
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard",
          duration: 3000,
        });
        navigate("/admin/products");
      } else {
        toast({
          title: "Invalid Password",
          description: "Please enter the correct password",
          duration: 3000,
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gold-light to-gold-DEFAULT bg-clip-text text-transparent">
              UNSHAKN ADMIN
            </h1>
            <p className="text-muted-foreground">Enter password to access the admin dashboard</p>
          </div>

          <Card className="border border-card bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>Enter your password to continue</CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="border-gold-dark/30 focus:border-gold-DEFAULT"
                    required
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    Password hint: الله اكبر
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-gold-DEFAULT to-gold-light text-black hover:opacity-90"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <div className="mt-6 text-center">
            <a 
              href="/"
              className="text-sm text-muted-foreground hover:text-gold-DEFAULT transition-colors"
            >
              Return to Homepage
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
