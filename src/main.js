import { jsx as _jsx } from "react/jsx-runtime";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(_jsx(App, {}));
