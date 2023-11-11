import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeScreenNavbar from "./components/Navbar/LargeScreenNavbar/LargeScreenNavbar";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import LoginPage from "./pages/login/LoginPage";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import SearchOutput from "./components/SearchOutput/SearchOutput";
import {
  useGetHomeDataQuery,
  useGetStoreDataQuery,
} from "./REDUX/API_Queries/E_CommerceAPI";

import ShopCategorized from "./pages/categorizedShop/ShopCategorized";
function App() {
        useGetStoreDataQuery("shopData");
        useGetHomeDataQuery("categories");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LargeScreenNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="shop/search" element={<SearchOutput />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CheckOutPage />} />
          <Route path="shop/:category" element={<ShopCategorized />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
