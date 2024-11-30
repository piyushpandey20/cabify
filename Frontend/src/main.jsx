import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import CabDriverContext from "./context/CabDriverContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CabDriverContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CabDriverContext>
  </StrictMode>
);
