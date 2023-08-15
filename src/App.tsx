import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout";

import { About } from "./pages/About";
import { NotFound } from "./pages/404";

const router = createBrowserRouter([
  { path: "/", Component: Layout, 
    children: [ 
      { index: true, Component: About},
      { path: "*", Component: NotFound},
  ]},
])
export default function App() {
  return <RouterProvider router={router} />;
};
