import FrontPage from "./pages/Front-page";
import Dashboard from "./pages/dashboard";
import SecondFrontPage from "./pages/second-front-page";
import ThirdFrontPage from "./pages/third-front-page";
import FourthFrontPage from "./pages/fourth-front-page";
import FifthFrontPage from "./pages/fifth-front-page";
import SixthFrontPage from "./pages/sixth-front-page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/second" element={<SecondFrontPage />} />
        <Route path="/third" element={<ThirdFrontPage />} />
        <Route path="/fourth" element={<FourthFrontPage />} />
        <Route path="/fifth" element={<FifthFrontPage />} />
        <Route path="/sixth" element={<SixthFrontPage />} />
      </Routes>
    </>
  );
};

export default App;
