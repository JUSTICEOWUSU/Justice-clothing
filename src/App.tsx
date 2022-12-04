import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeScreenNavbar from "./components/Navbar/LargeScreenNavbar/LargeScreenNavbar";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import LoginPage from "./pages/login/LoginPage";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import ShopCategorized from "./pages/categorizedShop/ShopCategorized";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LargeScreenNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopCategorized />} />
          <Route path="login" element={<ShopPage />} />
          <Route path="cart" element={<CheckOutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
