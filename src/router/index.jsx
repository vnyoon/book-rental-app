import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import HotBooks from "../pages/hot-books";
import NewReleases from "../pages/new-releases";
import ComingSoon from "../pages/coming-soon";
import Favorites from "../pages/favorites";
import WatchLater from "../pages/watch-later";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/hot-books",
        element: <HotBooks />
      },
      {
        path: "/new-releases",
        element: <NewReleases />
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/watch-later",
        element: <WatchLater />
      }
    ]
  }
]);

export default router;
