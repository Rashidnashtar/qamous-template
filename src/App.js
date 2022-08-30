import FrontPage from "./pages/Front-page";
import Dashboard from "./pages/dashboard";
import SecondFrontPage from "./pages/second-front-page";
import { Routes, Route } from "react-router-dom";
import ThirdFrontPage from "./pages/third-front-page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/second" element={<SecondFrontPage />} />
        <Route path="/third" element={<ThirdFrontPage />} />
      </Routes>
    </>
  );
};

export default App;
