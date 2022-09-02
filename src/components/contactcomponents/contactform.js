import React from "react";
import SectionHeader from "../assetscomponents/sectionHeader";
const ContactForm = () => {
  return (
    <div className="contact-form-section bg-gray2 ptb-100">
      <div className="container">
        <SectionHeader
          header="Send Us "
          boldHeader="Message"
          paragrah="Get In Touch"
        />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="contact-form">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-controller"
                      id="form_name"
                      name="name"
                      placeholder="Full Name"
                      type="text"
                    />
                  </div>
                </div>
                {/*./ col-lg-6 */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-controller"
                      id="form_email"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                </div>
                {/*./ col-lg-6 */}
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-controller"
                      id="form_subject"
                      name="subject"
                      placeholder="Subject Title"
                      type="text"
                    />
                  </div>
                </div>
                {/*./ col-lg-6 */}
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-controller"
                      id="form_message"
                      name="message"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/*./ col-lg-6 */}
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-default btn-sumbit">
                    <span>submit message</span>
                  </button>
                </div>
                {/*./ col-lg-6 */}
              </div>
            </form>
            {/*./ contact-form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
