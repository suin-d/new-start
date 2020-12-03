import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* Router가 App을 감쌈 */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
