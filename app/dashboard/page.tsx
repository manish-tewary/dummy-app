"use client"

import { AnalyticItem } from "@/components/dashboard/analytic-item";
import { DashboardSheet } from "@/components/dashboard/dashboard-sheet";

const Dashboard = () => {
  return (
    <div >
      <div className="flex flex-1">
        <AnalyticItem
          title="Total customers this month"
          value="1,250"
          prev="1,000"
          profit={true}
          percent="+25%"
        />
        <AnalyticItem
          title="High Intent leads"
          value="626"
          prev="578"
          profit={true}
          percent="+8%"
        />
        <AnalyticItem
          title="Low Intent leads"
          value="2022"
          prev="11.6K"
          profit={false}
          percent="-6%"
        />
        <AnalyticItem
          title="Order Booking"
          value="62"
          prev="55"
          profit={true}
          percent="+12.7%"
        />
      </div>

      <DashboardSheet />
    </div>
  );
};

export default Dashboard;
