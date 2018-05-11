import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Bootstrap2 from 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import "./styles/main.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);