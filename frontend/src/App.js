import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ImpressumPage from "./pages/legal/ImpressumPage";
import DatenschutzPage from "./pages/legal/DatenschutzPage";
import AGBPage from "./pages/legal/AGBPage";
import DisclaimerPage from "./pages/legal/DisclaimerPage";
import WiderrufsbelehrungPage from "./pages/legal/WiderrufsbelehrungPage";
import CookieRichtliniePage from "./pages/legal/CookieRichtliniePage";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/widerrufsbelehrung" element={<WiderrufsbelehrungPage />} />
          <Route path="/cookie-richtlinie" element={<CookieRichtliniePage />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
