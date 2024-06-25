import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import AddCraftItem from "./Pages/AddCraftItem";

import MyArtCraftList from "./Pages/MyArtCraftList";
import UpdateCraftItem from "./Pages/UpdateCraftItem";
import AllCraftItems from "./Pages/AllCraftItems";
import ViewDetails from "./Pages/ViewDetails";
import SubCategoryDetails from "./Pages/SubCategoryDetails";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/arts-craft"),
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/updateCraftItem/:id",
        element: <UpdateCraftItem></UpdateCraftItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/arts-craft/${params.id}`),
      },

      {
        path: "/myArtCraftList",
        element: <MyArtCraftList></MyArtCraftList>,
        loader: () => fetch("http://localhost:5000/arts-craft"),
      },
      {
        path: "/allCraftItem",
        element: <AllCraftItems></AllCraftItems>,
        loader: () => fetch("http://localhost:5000/arts-craft"),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/arts-craft/${params.id}`),
      },
      {
        path: "/subCategoryDetails/:id",
        element: <SubCategoryDetails></SubCategoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/subcategory/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
