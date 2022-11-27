import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeScreenNavbar from "./components/Navbar/LargeScreenNavbar/LargeScreenNavbar";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = <LargeScreenNavbar/> >
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
