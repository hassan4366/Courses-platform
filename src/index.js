import {createBrowserRouter,RouterProvider,} from "react-router";
import App from "./App";
import { AllData } from "./Data/AllData";
import { createRoot } from "react-dom/client";
import AllSignup from "./Signup/AllSignup";
// import ScrollToTop from "react-scroll-to-top";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <AllSignup />,
  },
]);

createRoot(document.getElementById("root")).render(
  
  <AllData>
    <RouterProvider router={router} />
  </AllData>

);
