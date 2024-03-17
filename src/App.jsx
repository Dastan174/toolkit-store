import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import All from "./components/pages/All";
import Care from "./components/pages/Care";
import Decorative from "./components/pages/Decorative";
import Protective from "./components/pages/Protective";
import Basket from "./components/pages/Basket";
import Header from "./components/header";
import ProductCard from "./components/pages/ProductCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <All />
      </>
    ),
  },
  {
    path: "/product-card",
    element: <ProductCard />,
  },
  {
    path: "/care/cosmetics",
    element: (
      <>
        <Care />
      </>
    ),
  },
  {
    path: "/decortaive/cosmetics",
    element: (
      <>
        <Decorative />
      </>
    ),
  },
  {
    path: "/protect/cosmetics",
    element: (
      <>
        <Protective />
      </>
    ),
  },
  {
    path: "/in/basket",
    element: (
      <>
        <Basket />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
