

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import ProductsPage from "./ProductsPage"

const myRouter= createBrowserRouter([{
    element:<App/>,
    path:"/"
  },{
    element:<ProductsPage/>,
    path:"/productos"
  }])