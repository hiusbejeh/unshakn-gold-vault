
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import HeroScene from "@/components/3d/HeroScene";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden hero-gradient pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-block uppercase tracking-wider text-sm font-medium mb-6 border border-primary/20 bg-primary/5 text-primary rounded-full px-4 py-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Innovate Fearlessly
            </motion.span>
            <h1 className="heading-xl mb-6">
              <span className="gold-text">Next-Gen</span> Digital Solutions for{" "}
              <span className="gold-text">Unshakeable</span> Growth
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Transform your digital presence with cutting-edge technology, AI-powered insights, 
              and seamless integrations that drive real business results.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/products">
                <Button size="lg" className="gold-gradient text-black font-medium">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Book A Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                  />
                ))}
              </div>
              <div>
                <p className="font-medium">Trusted by 2,000+ businesses</p>
                <div className="flex items-center text-amber-400 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    4.9/5 (500+ reviews)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block h-[500px] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {mounted && (
              <Suspense fallback={<div className="h-full flex items-center justify-center">Loading 3D scene...</div>}>
                <HeroScene />
              </Suspense>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
