import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./components/App";
import "./main.css";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(
    <App />
);