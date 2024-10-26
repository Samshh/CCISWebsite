import img from "../../public/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 bg-[#ffffffed] select-none z-50 shadow-md">
      <div className="flex gap-[1rem] justify-between items-center max-w-[1280px] mx-auto p-[1.5rem]">
        <img
          src={img}
          alt="logo"
          className="w-[60px] h-auto transition-all cursor-pointer ease-linear hover:scale-110"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center justify-center gap-[2rem] font-medium">
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
