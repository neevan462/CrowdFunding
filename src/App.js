import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
//import Home from "./pages/Home";
import About from "./components/About";
import Campaigns from "./components/Campaigns";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
