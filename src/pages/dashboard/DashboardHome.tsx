
import DashboardLayout from "@/layouts/DashboardLayout";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
        <AnalyticsCards />
        <AnalyticsChart />
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
