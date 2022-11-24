import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LargeScreenNavbar from "./components/Navbar/LargeScreenNavbar/LargeScreenNavbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
        path="/"
        element = <LargeScreenNavbar/>
        />
      </Routes>
    </Router>
  );
}

export default App;
