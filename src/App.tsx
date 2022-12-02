import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeScreenNavbar from "./components/Navbar/LargeScreenNavbar/LargeScreenNavbar";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import LoginPage from "./pages/login/LoginPage";
import CheckOutPage from "./pages/checkout/CheckOutPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LargeScreenNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<CheckOutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
