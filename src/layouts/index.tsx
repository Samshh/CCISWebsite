import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function MainLayout() {
  return (
    <main>
      <ReactLenis root>
        <Navbar />
        <Outlet />
        <Footer />
      </ReactLenis>
    </main>
  );
}
