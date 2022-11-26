import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeScreenNavbar from "./components/Navbar/LargeScreenNavbar/LargeScreenNavbar";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = <LargeScreenNavbar/> >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
