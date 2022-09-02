import FrontPage from "./pages/Front-page";
import Dashboard from "./pages/dashboard";
import SecondFrontPage from "./pages/second-front-page";
import ThirdFrontPage from "./pages/third-front-page";
import FourthFrontPage from "./pages/fourth-front-page";
import FifthFrontPage from "./pages/fifth-front-page";
import SixthFrontPage from "./pages/sixth-front-page";
import ListingGrid from "./pages/listing-grid";
import { Routes, Route } from "react-router-dom";
import ListingMap from "./pages/listing-map";
import ListingDetails from "./pages/listing-details";
import ListingDetailsSecond from "./pages/listing-details-second";
import ListingDetailsThird from "./pages/listing-details-third";
import ListingDetailsFourth from "./pages/listing-details-fourth";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import ComingSoon from "./pages/comingsoon";
import HowItWork from "./pages/howitwork";
const App = () => {
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
        {/* Listing Pages end */}
        {/* Pages start */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/process" element={<HowItWork />} />
        {/* Pages end */}
      </Routes>
    </>
  );
};

export default App;
