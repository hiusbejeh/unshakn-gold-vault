
import DashboardLayout from "@/layouts/DashboardLayout";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { motion } from "framer-motion";

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Track your website's performance and user engagement metrics.
        </p>
        
        <AnalyticsCards />
        <AnalyticsChart />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-card border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">Top Products</h3>
            <div className="space-y-4">
              {["Analytics Pro", "SecureVault", "IntegrationHub", "CollabSpace"].map(
                (product, index) => (
                  <div
                    key={product}
                    className="flex justify-between items-center"
                  >
                    <span>{product}</span>
                    <div className="w-1/2 bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{
                          width: `${100 - index * 15}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          
          <div className="bg-card border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">Visitor Demographics</h3>
            <div className="space-y-4">
              {[
                { label: "North America", value: "45%" },
                { label: "Europe", value: "30%" },
                { label: "Asia", value: "15%" },
                { label: "Other", value: "10%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
