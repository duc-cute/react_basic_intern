/** @format */

import path from "./path";
import { Layout, Country, Home, NotFound } from "~/pages/public";
import App from "~/App";

export const router = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: path.LAYOUT,
        element: <Layout />,

        children: [
          { index: true, element: <Home /> },
          {
            path: path.COUNTRY,
            element: <Country />,
          },
        ],
      },
    ],
  },
];
