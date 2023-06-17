import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listview from "./components/ListView/Listview"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Listview />
    ),
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);