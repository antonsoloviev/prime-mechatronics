import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

// import i18n (needs to be bundled ;))
import "./i18n.js";

createRoot(document.getElementById("root")).render(
  //   <BrowserRouter basename={import.meta.env.BASE_URL}>
  //     <StrictMode>
  //       <App />
  //     </StrictMode>
  //   </BrowserRouter>

  <StrictMode>
    <App />
  </StrictMode>
);
