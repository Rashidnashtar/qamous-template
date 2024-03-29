import React from "react";
import DashboardMenu from "../components/dashboardpagecomponents/dashboardmenu";
import DashboardContent from "../components/dashboardpagecomponents/dashboardcontent";
const Dashboard = () => {
  return (
    <>
      <script src="/assets/js/main.js"></script>

      <div className="site-content">
        <div className="dashboard-site-content">
          <DashboardMenu />
          <DashboardContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
