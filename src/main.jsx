import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./i18n"; // Import language config
import ConsentBanner from "./components/ConsentBanner.jsx";
import CookieBanner from "./components/CookieBanner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ConsentBanner />
      <CookieBanner />
    </BrowserRouter>
  </React.StrictMode>
);
