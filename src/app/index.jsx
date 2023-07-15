import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routers from "../routes";

function App() {
  const router = createBrowserRouter(routers);
  return <RouterProvider router={router} />;
}

export default App;
