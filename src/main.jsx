import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { InputValueProvider } from "./Context/InputValueContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InputValueProvider>
      <App />
    </InputValueProvider>
  </StrictMode>
);
