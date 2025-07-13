import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layouts/Home/Home"
import About from "../layouts/About/About";
import Price from "../layouts/pricing/Price";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
