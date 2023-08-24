import React from "react";
import ReactDOM from "react-dom/client";
import "../src/i18n/i18n.ts";
import App from "./App.tsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
