
interface WhatsAppIconProps {
  size?: number;
}

export const WhatsAppIcon = ({ size = 20 }: WhatsAppIconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
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
