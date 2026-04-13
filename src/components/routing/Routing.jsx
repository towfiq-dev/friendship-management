import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../errorPages/ErrorPages";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../homePages/HomePages";
import Home from "../allNavButton/home/Home";
import Timeline from "../allNavButton/timeline/Timeline";
import Stats from "../allNavButton/stats/Stats";
import FriendsDetails from "../all friends details/friendsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: HomePages,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: '/friendsDetails/:friendsDetailsId',
        Component: FriendsDetails
      }
    ],
  },
  {
    path: "*",
    Component: ErrorPages,
  },
]);
