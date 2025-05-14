
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { TikTokIcon } from "@/components/icons/CustomIcons";

const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-whatsapp"
  >
    <path d="M21 12a9 9 0 0 1-16.519 4.913L3 21l4.087-1.481A9 9 0 1 1 21 12Z" />
    <path d="M9 10a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z" />
    <path d="M13 13a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0v-1Z" />
  </svg>
);

const SocialLinks = () => {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-md mb-4">
            Connect With <span className="gold-text">UNSHAKN</span>
          </h2>
          <p className="text-muted-foreground">
            Follow us on social media for exclusive content, training tips, and new product releases.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <a 
            href="https://instagram.com/unshaknwears" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-yellow-400 text-white group-hover:scale-110 transition-transform">
                <Instagram size={28} />
              </div>
              <span className="font-bold">Instagram</span>
              <span className="text-sm text-muted-foreground">@unshaknwears</span>
            </div>
          </a>
          
          <a 
            href="https://www.tiktok.com/@unshakn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-800 text-white group-hover:scale-110 transition-transform">
                <TikTokIcon />
              </div>
              <span className="font-bold">TikTok</span>
              <span className="text-sm text-muted-foreground">@unshakn</span>
            </div>
          </a>
          
          <a 
            href="https://wa.me/0697700205" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform">
                <WhatsAppIcon />
              </div>
              <span className="font-bold">WhatsApp</span>
              <span className="text-sm text-muted-foreground">Customer Support</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
