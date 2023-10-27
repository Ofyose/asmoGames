import React from "react";
import ReactDOMClient from "react-dom/client";
import { PcX } from "./screens/PcX";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PcX />);
