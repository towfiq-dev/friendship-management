import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../errorPages/ErrorPages";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../homePages/HomePages";
import Home from "../allNavButton/home/Home";
import Timeline from "../allNavButton/timeline/Timeline";
import Stats from "../allNavButton/stats/Stats";

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
        path: '/timeline',
        Component: Timeline
      },
      {
        path: '/stats',
        Component: Stats
      }
    ]
  },
  {
    path: '*',
    Component: ErrorPages
  }
]);