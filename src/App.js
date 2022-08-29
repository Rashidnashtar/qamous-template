import FrontPage from "./pages/Front-page";
import Dashboard from "./pages/dashboard";
import SecondFrontPage from "./pages/second-front-page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/second" element={<SecondFrontPage />} />
      </Routes>
    </>
  );
};

export default App;
