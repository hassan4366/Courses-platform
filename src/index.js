import {createBrowserRouter,RouterProvider,} from "react-router";
import App from "./App";
import { AllData } from "./Data/AllData";
import { createRoot } from "react-dom/client";
import AllSignup from "./Signup/AllSignup";
import Register from "./Login/register";
import AllCatogory from "./Category/AllCatogory";
import Alldeatial from "./Deatials/Alldeatial";
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
  {
    path: "login",
    element: <Register />
  },
  {
    path: "category",
    element: <AllCatogory />
  },
  {
    path: "deatial/:id",
    element: <Alldeatial/>
  },
]);

createRoot(document.getElementById("root")).render(
  
  <AllData>
    <RouterProvider router={router} />
  </AllData>

);
