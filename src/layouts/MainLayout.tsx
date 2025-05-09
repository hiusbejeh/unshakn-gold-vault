
import { useState, useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { useToast } from "@/components/ui/use-toast";

interface MainLayoutProps {
  children: React.ReactNode;
  showToast?: boolean;
}

const MainLayout = ({ children, showToast = false }: MainLayoutProps) => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Show welcome toast if needed
    if (showToast) {
      setTimeout(() => {
        toast({
          title: "Welcome to Unshakn",
          description: "Experience the future of digital innovation.",
        });
      }, 1000);
    }
  }, [showToast, toast]);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
