
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (password === "admin") {
        // Store auth in localStorage
        localStorage.setItem("unshakn-admin", "true");
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Incorrect password. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 rounded-xl max-w-md mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="heading-md mb-2">Admin Login</h3>
        <p className="text-muted-foreground">
          Enter the admin password to access the dashboard.
          <br />
          <span className="text-xs">(Password: "admin")</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full gold-gradient hover:opacity-90 text-black font-medium mt-4"
        >
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
