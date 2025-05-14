
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80"
        >
          <source 
            src="https://player.vimeo.com/progressive_redirect/playback/697991322/rendition/540p/file.mp4?loc=external" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              className="inline-block uppercase tracking-wider text-sm font-bold mb-6 border border-primary/20 bg-primary/5 text-primary rounded-full px-4 py-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              FROM ATHLETES, FOR ATHLETES
            </motion.span>
            <h1 className="heading-xl mb-6">
              <span className="gold-text">UNSHAKN</span> – Luxury Performance <span className="gold-text">Redefined</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Premium athletic wear designed for those who refuse to compromise on 
              performance, comfort, or style. Join the movement.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link to="/products">
                <Button size="lg" className="gold-gradient text-black font-bold flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  SHOP NOW
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="font-bold">
                EXPLORE COLLECTION
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-10 p-4 bg-black/40 rounded-lg backdrop-blur-sm border border-white/10">
              <p className="text-white font-medium mb-2">Payment Methods:</p>
              <div className="flex items-center justify-center gap-3">
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Cash on Delivery</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Online Payment</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-6 justify-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${1515886657613 + i * 124}?auto=format&fit=crop&w=80&h=80&q=80)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="font-medium">Trusted by 2,000+ athletes</p>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
