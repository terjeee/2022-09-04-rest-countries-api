import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./context/themeContext";

import App from "./App";

import "./css/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
