import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../errorPages/ErrorPages";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../homePages/HomePages"
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
