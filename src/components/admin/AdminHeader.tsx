
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useTheme } from "@/providers/ThemeProvider";

interface AdminHeaderProps {
  title: string;
  toggleSidebar: () => void;
}

const AdminHeader = ({ title, toggleSidebar }: AdminHeaderProps) => {
  const { theme } = useTheme();

  return (
    <header className="bg-card border-b h-16 flex items-center px-4 md:px-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
      
      <div className="flex-1 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-medium ml-4 md:ml-0">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-sm text-muted-foreground mr-2">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
