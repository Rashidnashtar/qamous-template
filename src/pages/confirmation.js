import React from "react";
import "./confirm.css";
const Confirmation = () => {
  return (
    <div className="con-container">
      <div className="confirm">
        <img
          className="confirm-img"
          src="/assets/images/confirm.png"
          alt="confirm"
        />
        <h3 className="confrim-head"> Confirm Email Address</h3>
        <p className="confirm-p">
          We emailed a confrimation link to (email) check your email to confirm
          your account
        </p>
        <p className="re-p">Didn't get a confirmation email?</p>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className=" re-btn btn btn-default"
          type="button"
        >
          <i class="pr-2 fa fa-repeat"></i>resend
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
