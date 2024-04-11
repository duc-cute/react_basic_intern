/** @format */

import ReactDOM from "react-dom/client";
import "./index.css";
import { router as routerPath } from "./ultils/router";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(routerPath);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
