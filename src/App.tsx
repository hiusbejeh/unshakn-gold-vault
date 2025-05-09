
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import StudentDiscountPage from "./pages/StudentDiscountPage";
import LoginPage from "./pages/LoginPage";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ProductsManagement from "./pages/dashboard/ProductsManagement";
import SettingsPage from "./pages/dashboard/SettingsPage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUpload from "./pages/admin/AdminUpload";
import AdminWishlist from "./pages/admin/AdminWishlist";
import AdminInventory from "./pages/admin/AdminInventory";
import AdminSizeEstimator from "./pages/admin/AdminSizeEstimator";
import AdminTheme from "./pages/admin/AdminTheme";
import AdminReviews from "./pages/admin/AdminReviews";
import AdminStats from "./pages/admin/AdminStats";
import AdminGuard from "./components/admin/AdminGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/student-discount" element={<StudentDiscountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/products" element={<ProductsManagement />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/products" element={<AdminGuard><AdminProducts /></AdminGuard>} />
            <Route path="/admin/upload" element={<AdminGuard><AdminUpload /></AdminGuard>} />
            <Route path="/admin/wishlist" element={<AdminGuard><AdminWishlist /></AdminGuard>} />
            <Route path="/admin/inventory" element={<AdminGuard><AdminInventory /></AdminGuard>} />
            <Route path="/admin/size-estimator" element={<AdminGuard><AdminSizeEstimator /></AdminGuard>} />
            <Route path="/admin/theme" element={<AdminGuard><AdminTheme /></AdminGuard>} />
            <Route path="/admin/reviews" element={<AdminGuard><AdminReviews /></AdminGuard>} />
            <Route path="/admin/stats" element={<AdminGuard><AdminStats /></AdminGuard>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
