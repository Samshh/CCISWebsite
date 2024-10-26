import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Programs from "./pages/programs";
import ContactUs from "./pages/contactus";

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
        path: "contact",
        element: <ContactUs />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>
  }
]);

export default router;