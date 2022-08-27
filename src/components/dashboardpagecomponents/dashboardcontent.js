import React from "react";
import DashboardHeader from "./dashboardheader";
import OverviewTab from "./overviewtab";
import SettingTab from "./settingtab";
import MylistingsTab from "./mylistingstab";
import WhiteListTab from "./whitelisttab";
const DashboardContent = () => {
  return (
    <div className="dashborad-contant-area">
      <DashboardHeader />
      <div className="dashborad-contant tab-content">
        <OverviewTab />
        <SettingTab />
        <MylistingsTab />
        <WhiteListTab />
      </div>
    </div>
  );
};

export default DashboardContent;
