import React from "react";

const ShopingCheckout = () => {
  return (
    <div className="shopping-checkout-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="checkout-form-row">
              <div className="title-icon">
                <h3 className="title">
                  <span className="icon-card" />
                  Billing Details
                </h3>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-controllar"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-controllar"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-controllar"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-controllar"
                  placeholder="E-mail Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-controllar"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-controllar"
                  placeholder="Address"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/*~~./ end checkout form row ~~*/}
          <div className="col-lg-4 col-md-6">
            <div className="checkout-form-row">
              <div className="title-icon">
                <h3 className="title">
                  <span className="icon-card" />
                  Billing Details
                </h3>
              </div>
              <div className="form-group">
                <select name="country" className="country custom-select">
                  <option>Country</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>American Samoa</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Anguilla</option>
                  <option>Antarctica</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Aruba</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bermuda</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Bouvet Island</option>
                  <option>Brazil</option>
                  <option>British Indian Ocean Territory</option>
                  <option>Brunei Darussalam</option>
                  <option>Bulgaria</option>
                </select>
              </div>
              <div className="form-group">
                <select name="state" className="country custom-select">
                  <option value="">State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                </select>
              </div>
              <div className="form-group">
                <select name="city" className="city custom-select">
                  <option value="">City</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-controllar"
                  placeholder="Zip Code"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-controllar"
                  placeholder="Postal Code"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-controllar"
                  placeholder="Order Note"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/*~~./ end checkout form row ~~*/}
          <div className="col-lg-4">
            <div className="checkout-form-row">
              <div className="title-icon">
                <h3 className="title">
                  <span className="icon-card" />
                  Billing Details
                </h3>
              </div>
              <div className="cart-total-area">
                <div className="cart-total-info">
                  <ul className="list">
                    <li className="cart-subtotal">
                      <span>Sub Total</span> <strong>$36.00</strong>
                    </li>
                    <li className="order-shipping">
                      <span>Shipping &amp; Handling </span>{" "}
                      <strong>$14.00</strong>
                    </li>
                    <li className="vat">
                      <span>VAT 12%</span> <strong>$10.00</strong>
                    </li>
                  </ul>
                  <h3 className="cart-total-amount">
                    <span>order total</span>{" "}
                    <span className="amount">$60.00</span>
                  </h3>
                </div>
                <div className="payment-method">
                  <div className="form-group">
                    <input
                      defaultChecked=""
                      name="payment-method"
                      id="paypal"
                      type="radio"
                    />
                    <label className="payment-radio" htmlFor="paypal">
                      Credit Card
                    </label>
                  </div>
                  <div className="form-group">
                    <input name="payment-method" id="visa" type="radio" />
                    <label className="payment-radio" htmlFor="visa">
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="form-group">
                    <input name="payment-method" id="mastercard" type="radio" />
                    <label className="payment-radio" htmlFor="mastercard">
                      Paypal
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      name="payment-method"
                      id="direct-bank"
                      type="radio"
                    />
                    <label className="payment-radio" htmlFor="direct-bank">
                      Bank Transfer
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-default">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*~~./ end checkout form row ~~*/}
        </div>
      </div>
    </div>
  );
};

export default ShopingCheckout;
