
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Settings,
  Package,
  BarChart,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Home className="w-5 h-5" />,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: <Package className="w-5 h-5" />,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: <BarChart className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

const DashboardSidebar = ({ open, setOpen }: DashboardSidebarProps) => {
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem("unshakn-admin");
    window.location.href = "/login";
  };

  return (
    <motion.div
      animate={{ width: open ? 240 : 70 }}
      className="h-screen bg-muted/40 border-r border-border relative"
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
            <span className="text-xl font-bold gold-text">UNSHAKN</span>
          ) : (
            <span className="text-xl font-bold gold-text">U</span>
          )}
        </div>

        <nav className="mt-8 flex-1">
          <ul className="space-y-1 px-2">
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
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground"
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
            className="w-full justify-start text-muted-foreground"
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

export default DashboardSidebar;
