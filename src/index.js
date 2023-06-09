import "./index.css";
import "normalize.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);
