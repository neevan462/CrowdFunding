import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
//import Home from "./pages/Home";
import About from "./components/About";
import Campaigns from "./components/Campaigns";
import Profile from "./components/Profile";
import Home from "./components/Home";
import StartCampaign from "./components/StartCampaign";
function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start-campaign" element={<StartCampaign />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
