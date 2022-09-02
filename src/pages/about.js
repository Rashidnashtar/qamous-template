import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import AboutSection from "../components/aboutcomponents/aboutsection";
import FanFact from "../components/aboutcomponents/fanfact";
import Process from "./../components/assetscomponents/process";
import Testimonaial from "../components/assetscomponents/testimonaial";
import PopularBarnds from "../components/aboutcomponents/popularbarnds";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const About = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Who Are We"
        path=" About us"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <AboutSection />
        <FanFact />
        <Process />
        <Testimonaial />
        <PopularBarnds />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default About;
