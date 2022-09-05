import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import InfoSection from "../components/contactcomponents/infosection";
import ContactForm from "../components/contactcomponents/contactform";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const Contact = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Contact Us"
        path="Get In Touch"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <InfoSection />
        <ContactForm />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default Contact;
