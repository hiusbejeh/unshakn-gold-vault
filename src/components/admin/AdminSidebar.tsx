
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Package, 
  Upload, 
  Heart, 
  Layers, 
  Ruler, 
  Palette, 
  Star, 
  BarChart3,
  ChevronLeft, 
  ChevronRight,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems = [
  {
    name: "Products",
    path: "/admin/products",
    icon: <Package className="w-5 h-5" />,
  },
  {
    name: "Upload Product",
    path: "/admin/upload",
    icon: <Upload className="w-5 h-5" />,
  },
  {
    name: "Wishlist Viewer",
    path: "/admin/wishlist",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    name: "Inventory Manager",
    path: "/admin/inventory",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    name: "Size Estimator",
    path: "/admin/size-estimator",
    icon: <Ruler className="w-5 h-5" />,
  },
  {
    name: "Theme Customizer",
    path: "/admin/theme",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: "Reviews & Ratings",
    path: "/admin/reviews",
    icon: <Star className="w-5 h-5" />,
  },
  {
    name: "Stats Overview",
    path: "/admin/stats",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

const AdminSidebar = ({ open, setOpen }: AdminSidebarProps) => {
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem("unshakn-admin-auth");
    window.location.href = "/admin";
  };

  return (
    <motion.div
      animate={{ width: open ? 240 : 70 }}
      className="h-screen bg-card border-r relative"
    >
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-3 top-6 z-50 rounded-full border h-6 w-6"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <ChevronLeft className="h-3 w-3" />
        ) : (
          <ChevronRight className="h-3 w-3" />
        )}
      </Button>

      <div className="flex flex-col h-full">
        <div className="p-4 h-16 flex items-center">
          {open ? (
            <span className="text-xl font-bold bg-gradient-to-r from-gold-light to-gold-DEFAULT bg-clip-text text-transparent">
              UNSHAKN ADMIN
            </span>
          ) : (
            <span className="text-xl font-bold bg-gradient-to-r from-gold-light to-gold-DEFAULT bg-clip-text text-transparent">
              U
            </span>
          )}
        </div>

        <nav className="mt-8 flex-1">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.name}>
                  <Link to={item.path}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start",
                        isActive
                          ? "bg-gold-DEFAULT/10 text-gold-DEFAULT font-medium"
                          : "text-muted-foreground hover:text-gold-DEFAULT/80"
                      )}
                    >
                      {item.icon}
                      {open && <span className="ml-3">{item.name}</span>}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 mt-auto border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-gold-DEFAULT/80"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            {open && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;
