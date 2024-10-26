import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 bg-[#ffffffed] select-none z-50 shadow-md">
      <div className="flex flex-col md:flex-row gap-[1rem] justify-between items-center max-w-[1280px] mx-auto p-[1rem]">
        <img
          src="banner.png"
          loading="lazy"
          alt="logo"
          className="w-auto h-[70px] transition-all cursor-pointer ease-linear hover:scale-105"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center justify-center gap-[1rem] md:gap-[2rem] font-medium text-regular">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer p-[0.5rem] transition-colors ease-linear hover:text-red hover:border-b-[1px] hover:border-red"
          >
            Home
          </p>
          <p
            onClick={() => navigate("about")}
            className="cursor-pointer p-[0.5rem] transition-colors ease-linear hover:text-red hover:border-b-[1px] hover:border-red"
          >
            About
          </p>
          <p
            onClick={() => navigate("programs")}
            className="cursor-pointer p-[0.5rem] transition-colors ease-linear hover:text-red hover:border-b-[1px] hover:border-red"
          >
            Programs
          </p>
          <p
            onClick={() => navigate("contact")}
            className="cursor-pointer p-[0.5rem] transition-colors ease-linear hover:text-red hover:border-b-[1px] hover:border-red"
          >
            Contact
          </p>
        </div>
      </div>
    </nav>
  );
}
