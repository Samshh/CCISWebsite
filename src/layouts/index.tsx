import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function MainLayout() {
  const mainRef = useRef(null);
  const loadingRef = useRef(null);
  const spinnerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const messageRef = useRef(null);
  const { pathname } = useLocation();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(spinnerRef.current, {
      rotate: 360,
      duration: 0.5,
      repeat: -1,
      ease: "linear",
    })
      .from(imageRef.current, {
        opacity: 0,
        delay: 0.5,
        y: -50,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .from(messageRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(contentRef.current, {
        delay: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .set(loadingRef.current, { display: "none" });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <div
        ref={loadingRef}
        className="h-screen w-full fixed bg-[#fff] flex items-center justify-center z-50"
      >
        <div ref={contentRef} className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img
              ref={imageRef}
              src="/MMCMmain.png"
              alt="logo"
              className="w-auto h-[180px] mb-4"
            />
          </div>
          <h4
            ref={messageRef}
            className="text-regular special-text font-semibold"
          >
            Exellence & Relevance
          </h4>
          <div
            ref={spinnerRef}
            className="w-12 h-12 border-4 border-solid border-[#f8f8f8] border-t-red rounded-full absolute bottom-16"
          />
        </div>
      </div>
      <div ref={mainRef}>
        <ReactLenis root key={pathname}>
          <Navbar />
          <Outlet />
          <Footer />
        </ReactLenis>
      </div>
    </main>
  );
}
