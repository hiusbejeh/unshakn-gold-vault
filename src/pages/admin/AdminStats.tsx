
import { motion } from "framer-motion";
import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ShoppingBag, Users, CreditCard, TrendingUp, Calendar } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

// Mock data for sales chart
const salesData = [
  { name: "Jan", sales: 4000, visitors: 2400 },
  { name: "Feb", sales: 3000, visitors: 1398 },
  { name: "Mar", sales: 9800, visitors: 2800 },
  { name: "Apr", sales: 3908, visitors: 2908 },
  { name: "May", sales: 4800, visitors: 2800 },
  { name: "Jun", sales: 3800, visitors: 2800 },
  { name: "Jul", sales: 4300, visitors: 3200 },
];

// Mock data for product categories
const categoryData = [
  { name: "Tracksuits", value: 40 },
  { name: "T-Shirts", value: 30 },
  { name: "Bottoms", value: 20 },
  { name: "Accessories", value: 10 },
];

// Mock stats data
const statsData = {
  totalProducts: 24,
  totalVisitors: 12384,
  totalWishlists: 742,
  totalStock: 867,
  revenue: "$34,567",
  conversion: "3.8%"
};

const AdminStats = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Chart colors
  const textColor = isDark ? "#e0e0e0" : "#333333";
  const gridColor = isDark ? "#333333" : "#e0e0e0";
  const goldColor = "#F0C05A";
  const purpleColor = "#8884d8";
  
  return (
    <AdminLayout title="Stats Overview">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Dashboard Analytics</h2>
        <p className="text-muted-foreground">
          Overview of store performance and customer engagement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-lg border p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Total Products</p>
              <h3 className="text-2xl font-bold mt-1">{statsData.totalProducts}</h3>
              <p className="text-xs text-green-500 mt-1">+4 this month</p>
            </div>
            <div className="bg-blue-500/20 p-2 rounded-full">
              <ShoppingBag className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-card rounded-lg border p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Total Visitors</p>
              <h3 className="text-2xl font-bold mt-1">{statsData.totalVisitors.toLocaleString()}</h3>
              <p className="text-xs text-green-500 mt-1">+23% vs last month</p>
            </div>
            <div className="bg-green-500/20 p-2 rounded-full">
              <Users className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-card rounded-lg border p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">{statsData.revenue}</h3>
              <p className="text-xs text-green-500 mt-1">+12% vs last month</p>
            </div>
            <div className="bg-purple-500/20 p-2 rounded-full">
              <CreditCard className="h-5 w-5 text-purple-500" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-card rounded-lg border p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <h3 className="text-2xl font-bold mt-1">{statsData.conversion}</h3>
              <p className="text-xs text-amber-500 mt-1">+0.5% vs last month</p>
            </div>
            <div className="bg-amber-500/20 p-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-muted-foreground" />
                Sales Overview
              </CardTitle>
              <CardDescription>Monthly sales and visitors data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={textColor} />
                    <YAxis stroke={textColor} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#1a1a1a" : "#fff",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke={goldColor}
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke={purpleColor}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5 text-muted-foreground" />
                Product Categories
              </CardTitle>
              <CardDescription>Sales distribution by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={textColor} />
                    <YAxis stroke={textColor} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#1a1a1a" : "#fff",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    />
                    <Bar dataKey="value" fill={goldColor} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest store activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gold-DEFAULT mr-3"></div>
                    <div className="flex-1">
                      <p className="text-sm">
                        {index === 0 && "New order placed for Elite Performance Tracksuit"}
                        {index === 1 && "Product restocked: Pro Compression T-Shirt"}
                        {index === 2 && "User review added for Performance Sports Bra"}
                        {index === 3 && "Ultra Flex Training Bottoms is low on stock"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {index === 0 && "2 hours ago"}
                        {index === 1 && "5 hours ago"}
                        {index === 2 && "Yesterday at 15:30"}
                        {index === 3 && "Yesterday at 12:15"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                Top Customers
              </CardTitle>
              <CardDescription>Most valuable customers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                        index === 0 ? "bg-gold-DEFAULT text-black" :
                        index === 1 ? "bg-gray-300 text-black" :
                        index === 2 ? "bg-amber-700 text-white" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {index === 0 && "Alex Johnson"}
                          {index === 1 && "Maria Garcia"}
                          {index === 2 && "James Smith"}
                          {index === 3 && "Sarah Williams"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {index === 0 && "6 orders this month"}
                          {index === 1 && "4 orders this month"}
                          {index === 2 && "3 orders this month"}
                          {index === 3 && "3 orders this month"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {index === 0 && "$1,245"}
                        {index === 1 && "$890"}
                        {index === 2 && "$720"}
                        {index === 3 && "$645"}
                      </p>
                      <p className="text-xs text-green-500">
                        {index === 0 && "Loyal Customer"}
                        {index === 1 && "Regular"}
                        {index === 2 && "Regular"}
                        {index === 3 && "New Customer"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminStats;
