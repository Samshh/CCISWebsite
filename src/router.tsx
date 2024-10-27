import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Programs from "./pages/programs";
import Events from "./pages/mcmevents";

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
        element: <Programs />
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