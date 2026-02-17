import {createBrowserRouter,RouterProvider,} from "react-router";
import App from "./App";
// import AllData from "./Data/AllData";
import { createRoot } from "react-dom/client";
// import ScrollToTop from "react-scroll-to-top";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  
  
    <RouterProvider router={router} />

);
