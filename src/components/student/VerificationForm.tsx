
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Calendar, FormInput } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VerificationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    studentId: "",
    graduationDate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Verification Request Submitted",
        description: "We'll review your information and get back to you within 24-48 hours.",
      });
      setFormData({
        name: "",
        email: "",
        school: "",
        studentId: "",
        graduationDate: "",
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 rounded-xl max-w-md mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="heading-md mb-2">Student Verification</h3>
        <p className="text-muted-foreground">
          Complete this form to verify your student status and get 50% off all our products.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">School Email</Label>
          <div className="relative">
            <FormInput className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.name@university.edu"
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="school">School/University</Label>
          <Input
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Your school or university name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="studentId">Student ID</Label>
          <Input
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="Your student ID number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="graduationDate">Expected Graduation Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="graduationDate"
              name="graduationDate"
              type="date"
              value={formData.graduationDate}
              onChange={handleChange}
              required
              className="pl-10"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full gold-gradient hover:opacity-90 text-black font-medium mt-4"
        >
          {loading ? "Submitting..." : "Submit for Verification"}
        </Button>
      </form>
    </motion.div>
  );
};

export default VerificationForm;
