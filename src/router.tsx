import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Programs from "./pages/programs";
import Events from "./pages/mcmevents";
import Cs from "./pages/programs/nested/cs";
import Emc from "./pages/programs/nested/emc";
import Is from "./pages/programs/nested/is";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "programs",
        children: [
          {
            index: true,
            element: <Programs />
          },
          {
            path: "cs",
            element: <Cs />,
          },
          {
            path: "emc",
            element: <Emc />,
          },
          {
            path: "is",
            element: <Is />,
          }
        ]
      },
      {
        path: "events",
        element: <Events />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>
  }
]);

export default router;