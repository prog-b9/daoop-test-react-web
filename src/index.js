import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { store } from "./redux/store/Stores";
import { Provider } from "react-redux";
// import { ProSidebarProvider } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
/*

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
