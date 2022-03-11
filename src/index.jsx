import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/index.css";
import Home from "./Home";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
