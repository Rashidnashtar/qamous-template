import { Link } from "react-router-dom";

const HeaderCartList = () => {
  return (
    <div className="header-card-area">
      <a href="#">
        <span className="icon-paper-bag" />
        <sup>2</sup>
      </a>
      <div className="cart-list">
        <div className="cart-item">
          <div className="product-thumb">
            <img
              alt="Single product"
              src="/assets/images/product/small/1.jpg"
            />
          </div>
          {/*~./ product-thumb ~*/}
          <div className="product-info">
            <h4 className="title">Blue Berry Jacket</h4>
            <div className="price">
              $15.00 <span>X2</span>
            </div>
            <div className="icon-closed">
              <a href="#">
                <i className="fa fa-close" />
              </a>
            </div>
          </div>
          {/*~./ product-info ~*/}
        </div>
        {/*~./ cart-item ~*/}
        <div className="cart-item">
          <div className="product-thumb">
            <img
              alt="Single product"
              src="/assets/images/product/small/2.jpg"
            />
          </div>
          {/*~./ product-thumb ~*/}
          <div className="product-info">
            <h4 className="title">Back Pack Youth Less</h4>
            <div className="price">
              $15.00 <span>X3</span>
            </div>
            <div className="icon-closed">
              <a href="#">
                <i className="fa fa-close" />
              </a>
            </div>
          </div>
          {/*~./ product-info ~*/}
        </div>
        {/*~./ cart-item ~*/}
        <div className="order-total">
          <h4 className="order">
            Sub Total<span className="amount">$166</span>
          </h4>
        </div>
        <div className="cart-btn-group">
          <Link to="/cart" className="btn btn-default btn-default2">
            view card
          </Link>
          <Link to="/checkout" className="btn btn-default">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderCartList;
