
import { motion } from "framer-motion";
import { BarChart3, Users, ShoppingCart, TrendingUp } from "lucide-react";

const analyticsData = [
  {
    title: "Total Revenue",
    value: "$12,345",
    increase: true,
    percentage: "12%",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-green-500",
  },
  {
    title: "Active Users",
    value: "1,234",
    increase: true,
    percentage: "8%",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-500",
  },
  {
    title: "Total Sales",
    value: "756",
    increase: false,
    percentage: "3%",
    icon: <ShoppingCart className="h-6 w-6" />,
    color: "text-amber-500",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    increase: true,
    percentage: "1.5%",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "text-indigo-500",
  },
];

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {analyticsData.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="glass-card p-6 rounded-xl"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">{data.title}</p>
              <h3 className="text-2xl font-bold mt-1">{data.value}</h3>
            </div>
            <div className={`${data.color} bg-background p-3 rounded-lg`}>
              {data.icon}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-xs font-medium ${
                data.increase ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.increase ? "↑" : "↓"} {data.percentage}
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              vs last month
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
