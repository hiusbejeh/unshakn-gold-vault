
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Animated background effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl opacity-20">
        <div className="w-full h-full hero-gradient" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 md:p-12 rounded-2xl text-center"
          >
            <div className="h-32 relative mb-8 mx-auto w-full max-w-xs">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            <h2 className="heading-lg mb-6">
              Ready to <span className="gold-text">Transform</span> Your Workouts?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who have elevated their performance with
              Unshakn's premium athletic wear.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products">
                <Button size="lg" className="gold-gradient text-black font-medium px-8">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn About Our Materials
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
