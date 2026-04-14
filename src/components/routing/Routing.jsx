import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../errorPages/ErrorPages";
import MainLayouts from "../layouts/MainLayouts";
import HomePages from "../homePages/HomePages"
import Timeline from "../allNavButton/timeline/Timeline";
import Stats from "../allNavButton/stats/Stats";
import FriendsDetails from "../all friends details/friendsDetails";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
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
        loader: async () => {
          await delay(1000);
          return null
        }
      },
      {
        path: "/stats",
        Component: Stats,
        loader: async () => {
          await delay(1000);
          return null
        }
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
