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
import AuthProvider from "./providers/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://painting-server-six.vercel.app/arts-craft"),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoutes>
            <AddCraftItem></AddCraftItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateCraftItem/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraftItem></UpdateCraftItem>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://painting-server-six.vercel.app/arts-craft/${params.id}`
          ),
      },

      {
        path: "/myArtCraftList",
        element: (
          <PrivateRoutes>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://painting-server-six.vercel.app/arts-craft"),
      },
      {
        path: "/allCraftItem",
        element: <AllCraftItems></AllCraftItems>,
        loader: () =>
          fetch("https://painting-server-six.vercel.app/arts-craft"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://painting-server-six.vercel.app/arts-craft/${params.id}`
          ),
      },
      {
        path: "/subCategoryDetails/:id",
        element: <SubCategoryDetails></SubCategoryDetails>,
        loader: ({ params }) =>
          fetch(
            `https://painting-server-six.vercel.app/subcategory/${params.id}`
          ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
