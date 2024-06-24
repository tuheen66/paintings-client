import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import AddCraftItem from "./Pages/AddCraftItem";
import UpdateCrafts from "./Pages/UpdateCrafts";
import MyArtCraftList from "./Pages/MyArtCraftList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/arts-craft"),
      },
      {
        path: "/add-craft-item",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/update-craft-item/:id",
        element: <UpdateCrafts></UpdateCrafts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/arts-craft/${params.id}`),
      },
      {
        path: "/my-art-craft-list",
        element: <MyArtCraftList></MyArtCraftList>,
        loader: () => fetch("http://localhost:5000/arts-craft"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
