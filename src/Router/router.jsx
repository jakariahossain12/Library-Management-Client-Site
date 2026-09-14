import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {index:true,Component:Home}
    ]
  },
  {
    path:"/login",
    Component:Login
  },
  {
    path:"/singUp",
    Component:SignUp
  },
]);

export default router