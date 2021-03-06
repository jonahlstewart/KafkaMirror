import React from "react";
import ThroughputChart from "../components/charts/ThroughputChart.jsx";
import EventChart from "../components/charts/EventChart.jsx";
import Header from "../components/Header";
import Metric from "../components/Metric";
import "./Pages.scss";

const Dashboard = () => {
  return (
    <div className="grid-container dashboardContainer">
      <Header className="dashboardHeader" />
      <Metric className="metric1" />
      <Metric className="metric2" />
      <Metric className="metric3" />
      <ThroughputChart className="graph1" />
      <EventChart className="graph2" />
    </div>
  );
};

export default Dashboard;
