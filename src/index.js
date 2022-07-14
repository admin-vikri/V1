/** @format */

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";

import RedindiesPdf from "./component/Pages/Product1/RedindiesPdf";
import LayoutPage from "./component/Pages/Product1/LayoutPage";

const TRACKING_ID = "UA-233414864-1";
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <>
        <div style={{ textAlign: "-webkit-center" }}>
          <LayoutPage block="none">
            <Routes>
              <Route path="/PDF-001067RIKN" element={<RedindiesPdf />} exact />
            </Routes>
          </LayoutPage>
        </div>
      </>
    </HashRouter>
  </React.StrictMode>
);
