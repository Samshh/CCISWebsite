import { useEffect } from "react";
import Button from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Events | MMCM CCIS";
  }, []);
  return (
    <div className="relative">
      <img
        loading="lazy"
        className="object-cover w-full h-screen absolute"
        src="/redbg.png"
        alt="bg"
      />
      <section className="h-auto sticky top-0">
        <h1 className="text-[#fff] uppercase">Events</h1>
      </section>
      <div className="sticky top-0 bg-[#fff]">
        <section className="justify-center flex-col gap-[1.5rem]">
          <h2>
            <em className="text-regular">No events currently</em>
          </h2>
          <Button onClick={() => navigate("/")} type="red">
            Back to Home
          </Button>
        </section>
      </div>
    </div>
  );
}
