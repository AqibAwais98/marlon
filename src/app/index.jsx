import React from "react";
import Home from "../pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routers from "../routes";

function App() {
  const router = createBrowserRouter(routers);
  return <RouterProvider router={router} />;
}

export default App;
