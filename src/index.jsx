/**
 * Entry Point for the application.
 * This is where the routing is setup.
 */

import "./globals.css";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <App />
  </>
);
