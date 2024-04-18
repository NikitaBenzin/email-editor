import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./Provider.jsx";
import "./index.module.scss";
import Home from "./pages/home/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Home />
    </Provider>
  </React.StrictMode>
);
