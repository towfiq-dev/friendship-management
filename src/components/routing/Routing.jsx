import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../errorPages/ErrorPages";
import DashBoard from "../allNavButton/dashBoard/DashBoard";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../homePages/HomePages";
import Home from "../allNavButton/home/Home";
import Menu from "../allNavButton/menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
      {
        index: true,
        Component: HomePages
      },
      {
        path: '/home',
        Component: Home
      },
      {
        path: '/menu',
        Component: Menu
      },
      {
        path: '/dashBoard',
        Component: DashBoard
      }
    ]
  },
  {
    path: '*',
    Component: ErrorPages
  }
]);