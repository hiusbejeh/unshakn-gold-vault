
import { Instagram } from "lucide-react";
import { TikTokIcon } from "@/components/icons/CustomIcons";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface SocialIconsProps {
  size?: number;
  className?: string;
}

const SocialIcons = ({ size = 20, className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <a
        href="https://instagram.com/unshaknwears"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram size={size} />
      </a>
      <a
        href="https://www.tiktok.com/@unshakn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <TikTokIcon size={size} />
      </a>
      <a
        href="https://wa.me/0697700205"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <WhatsAppIcon size={size} />
      </a>
    </div>
  );
};

export default SocialIcons;
