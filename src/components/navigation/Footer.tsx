
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Newsletter",
        description: "Thanks for subscribing!",
      });
      setEmail("");
    }
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", path: "#" },
        { name: "Careers", path: "#" },
        { name: "Blog", path: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "All Products", path: "/products" },
        { name: "Pricing", path: "#" },
        { name: "Student Discount", path: "/student-discount" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
        { name: "Cookies", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" /> },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" /> },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" /> },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-muted/30 pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold gold-text">UNSHAKN</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8">
              Empowering digital innovation with cutting-edge solutions that transform
              how businesses operate and succeed in today's fast-paced environment.
            </p>
            <form onSubmit={handleSubmit} className="flex max-w-sm gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="gold-gradient text-black">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>

          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Unshakn. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href="#"
                aria-label={social.name}
                whileHover={{ y: -2 }}
                className="hover:text-primary transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
