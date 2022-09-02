import React from "react";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="shop-table table">
                <thead>
                  <tr>
                    <th colSpan={2} className="product-name">
                      Product
                    </th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="shoping-cart-item">
                    <td className="product-thumbnail">
                      <a href="#">
                        <img
                          src="assets/images/product/small/1/1.jpg"
                          alt="Adventure"
                        />
                      </a>
                    </td>
                    <td className="product-info">
                      <h2>
                        <a href="single-shop.html">Blue Berry Jacket</a>
                      </h2>
                      <ul className="list choosen-list">
                        <li>
                          <span>Size</span>Small
                        </li>
                        <li>
                          <span>Color</span>Black
                        </li>
                      </ul>
                      <ul className="list tools">
                        <li>
                          <a href="#">
                            <span className="icon-pencil2" /> edit
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-cancel-circle" /> remove
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td className="product-price">
                      <span className="amount">$36.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="quantity">
                        <div className="input-spinner product-no">
                          <a href="javascript:void(0)" className="minus">
                            -
                          </a>
                          <input type="text" defaultValue={1} />
                          <a href="javascript:void(0)" className="plus">
                            +
                          </a>
                        </div>
                        {/*/.input-spinner*/}
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount-total">$36.00</span>
                    </td>
                  </tr>
                  {/*~./ shoping-cart-item ~*/}
                  <tr className="shoping-cart-item">
                    <td className="product-thumbnail">
                      <a href="#">
                        <img
                          src="assets/images/product/small/1/2.jpg"
                          alt="Adventure"
                        />
                      </a>
                    </td>
                    <td className="product-info">
                      <h2>
                        <a href="single-shop.html">BackPack Youth Less</a>
                      </h2>
                      <ul className="list choosen-list">
                        <li>
                          <span>Size</span>Small
                        </li>
                        <li>
                          <span>Color</span>Black
                        </li>
                      </ul>
                      <ul className="list tools">
                        <li>
                          <a href="#">
                            <span className="icon-pencil2" /> edit
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-cancel-circle" /> remove
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td className="product-price">
                      <span className="amount">$36.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="quantity">
                        <div className="input-spinner product-no">
                          <a href="javascript:void(0)" className="minus">
                            -
                          </a>
                          <input type="text" defaultValue={1} />
                          <a href="javascript:void(0)" className="plus">
                            +
                          </a>
                        </div>
                        {/*/.input-spinner*/}
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount-total">$36.00</span>
                    </td>
                  </tr>
                  {/*~./ shoping-cart-item ~*/}
                  <tr className="shoping-cart-item">
                    <td className="product-thumbnail">
                      <a href="#">
                        <img
                          src="assets/images/product/small/1/3.jpg"
                          alt="Adventure"
                        />
                      </a>
                    </td>
                    <td className="product-info">
                      <h2>
                        <a href="single-shop.html">Kapsalon Wrap</a>
                      </h2>
                      <ul className="list choosen-list">
                        <li>
                          <span>Size</span>Small
                        </li>
                        <li>
                          <span>Color</span>Black
                        </li>
                      </ul>
                      <ul className="list tools">
                        <li>
                          <a href="#">
                            <span className="icon-pencil2" /> edit
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-cancel-circle" /> remove
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td className="product-price">
                      <span className="amount">$36.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="quantity">
                        <div className="input-spinner product-no">
                          <a href="javascript:void(0)" className="minus">
                            -
                          </a>
                          <input type="text" defaultValue={1} />
                          <a href="javascript:void(0)" className="plus">
                            +
                          </a>
                        </div>
                        {/*/.input-spinner*/}
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount-total">$36.00</span>
                    </td>
                  </tr>
                  {/*~./ shoping-cart-item ~*/}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-5">
                <div className="cupon-code">
                  <input
                    type="text"
                    name="cupon"
                    defaultValue=""
                    className="form-controllar"
                    placeholder="Cupon Code"
                  />
                  <button type="submit" className="btn-cupon btn">
                    <span className="icon-arrow-right2" />
                  </button>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="refresh-shoping btn-group text-right">
                  <button type="button" className="btn btn-primary">
                    UPDATE
                  </button>
                  <button type="button" className="btn btn-default">
                    PROCCED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-95">
          <div className="col-lg-8">
            <div className="calculate-shipping-area">
              <div className="title-icon">
                <h3 className="title">
                  <span className="icon-payment" />
                  calculate shipping
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-6">
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
                </div>
                <div className="col-lg-6">
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
                </div>
                <div className="col-lg-6">
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
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="zip"
                      defaultValue=""
                      className="form-controllar"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-default">
                    UPDATE TOTAL
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart-total-area">
              <div className="cart-total-info">
                <ul className="list">
                  <li className="cart-subtotal">
                    <span>Sub Total</span> <strong>$36</strong>
                  </li>
                  <li className="order-shipping">
                    <span>Shipping &amp; Handling </span> <strong>$14</strong>
                  </li>
                  <li className="vat">
                    <span>VAT 12%</span> <strong>$10</strong>
                  </li>
                </ul>
                <h3 className="cart-total-amount">
                  <span>order total</span>{" "}
                  <span className="amount">$60.00</span>
                </h3>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-default">
                  PROCCED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
