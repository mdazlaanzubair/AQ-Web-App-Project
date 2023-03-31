import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContentProvider from "./context/content/ContentContext";
import ThemeProvider from "./context/theme/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ContentProvider>
  </React.StrictMode>
);
