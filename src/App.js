import { Routes, Route } from "react-router-dom";
import FrontPage from "./pages/Front-page";
import Dashboard from "./pages/dashboard";
import SecondFrontPage from "./pages/second-front-page";
import ThirdFrontPage from "./pages/third-front-page";
import FourthFrontPage from "./pages/fourth-front-page";
import FifthFrontPage from "./pages/fifth-front-page";
import SixthFrontPage from "./pages/sixth-front-page";
import ListingGrid from "./pages/listing-grid";
import ListingMap from "./pages/listing-map";
import ListingDetails from "./pages/listing-details";
import ListingDetailsSecond from "./pages/listing-details-second";
import ListingDetailsThird from "./pages/listing-details-third";
import ListingDetailsFourth from "./pages/listing-details-fourth";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import ComingSoon from "./pages/comingsoon";
import HowItWork from "./pages/howitwork";
import Blog from "./pages/blog";
import BlogList from "./pages/bloggird";
import BlogDirecteSlider from "./pages/blogdirectedslider";
import PostDetails from "./pages/postdetails";
import ProductDetails from "./pages/productdetails";
import ErrorPage from "./pages/404";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import AddListing from "./pages/add-listing";
import SignIn from "./pages/sign-in";
import { useSelector } from "react-redux/es/exports";
import { selectUserState } from "./redux/user/user-selectors";
import Checkout from "./pages/checkout";
import SignUp from "./pages/sign-up";
import Confirmation from "./pages/confirmation";
const App = () => {
  const userState = useSelector(selectUserState);
  console.log(userState);

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        {/* Home Pages start*/}
        <Route path="/second" element={<SecondFrontPage />} />
        <Route path="/third" element={<ThirdFrontPage />} />
        <Route path="/fourth" element={<FourthFrontPage />} />
        <Route path="/fifth" element={<FifthFrontPage />} />
        <Route path="/sixth" element={<SixthFrontPage />} />
        {/* Home Pages end*/}
        {/* Listing Pages start */}
        <Route path="/listing-grid" element={<ListingGrid />} />
        <Route path="/listing-map" element={<ListingMap />} />
        <Route path="/listing-details" element={<ListingDetails />} />
        <Route path="/listing-details-two" element={<ListingDetailsSecond />} />
        <Route
          path="/listing-details-three"
          element={<ListingDetailsThird />}
        />
        <Route
          path="/listing-details-four"
          element={<ListingDetailsFourth />}
        />
        <Route path="/add-listing" element={<AddListing />} />
        {/* Listing Pages end */}
        {/* Pages start */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/process" element={<HowItWork />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route
          path="/blog-left-sidebar"
          element={<BlogDirecteSlider isLeft />}
        />
        <Route path="/blog-right-sidebar" element={<BlogDirecteSlider />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/single-shop" element={<ProductDetails />} />
        <Route path="/404" element={<ErrorPage />} />
        {/* Pages end */}
        {/* main pages start */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {/* main pages End*/}
        {/* shop pages start*/}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* shop pages end*/}
        {/*register pages start */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/confirmation" element={<Confirmation />} />
        {/*register pages end */}
      </Routes>
    </>
  );
};

export default App;
