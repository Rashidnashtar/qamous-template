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
        {/* Listing Pages end */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
