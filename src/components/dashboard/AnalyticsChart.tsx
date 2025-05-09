
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/providers/ThemeProvider";

const data = [
  { name: "Jan", visits: 4000, sales: 2400 },
  { name: "Feb", visits: 3000, sales: 1398 },
  { name: "Mar", visits: 2000, sales: 9800 },
  { name: "Apr", visits: 2780, sales: 3908 },
  { name: "May", visits: 1890, sales: 4800 },
  { name: "Jun", visits: 2390, sales: 3800 },
  { name: "Jul", visits: 3490, sales: 4300 },
];

const AnalyticsChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const textColor = isDark ? "#e0e0e0" : "#333333";
  const gridColor = isDark ? "#333333" : "#e0e0e0";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border rounded-xl p-6 mt-8"
    >
      <h3 className="text-lg font-medium mb-6">Visitor and Sales Statistics</h3>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1a1a1a" : "#fff",
                border: "none",
                borderRadius: "8px",
                color: textColor,
              }}
            />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#F0C05A"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex justify-center gap-8">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#F0C05A] rounded-full mr-2"></div>
          <span className="text-sm">Visitors</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#8884d8] rounded-full mr-2"></div>
          <span className="text-sm">Sales</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsChart;
