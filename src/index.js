import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SocialLinks from "./components/SocialLinks";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SocialLinks />
  </React.StrictMode>
);
