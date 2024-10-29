import { useEffect } from "react";
import Button from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Programs() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Programs | MMCM CCIS";
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
        <h1 className="text-[#fff] uppercase special-text">Programs</h1>
      </section>
      <div className="sticky top-0 bg-[#fff]">
        <section className="h-auto">
          <div className="grid grid-rows-3 grid-cols-1 gap-[3rem]">
            <div className="flex flex-col md:flex-row justify-start items-center gap-[1rem]">
              <img
                className="w-[350px] shadow-lg"
                src="/programs/COMSCI.jpeg"
                alt="cs"
              />
              <div className="flex flex-col items-center md:items-start gap-[1rem]">
                <div>
                  <h4 className="text-regular text-center md:text-start uppercase font-semibold">
                    BS Computer Science
                  </h4>
                  <p className="max-w-[600px] text-start">
                    The Bachelor of Science in Computer Science program prepares
                    students to become computer scholars equipped with the
                    complete tools in planning, organizing, researching,
                    analyzing, and developing algorithms, computer systems and
                    software applications for windows, web, and mobile
                    platforms.
                  </p>
                </div>
                <Button onClick={() => navigate("cs")} type="red">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center gap-[1rem]">
              <img
                className="w-[350px] shadow-lg"
                src="/programs/EMC.jpeg"
                alt="cs"
              />
              <div className="flex flex-col items-center md:items-start gap-[1rem]">
                <div>
                  <h4 className="text-regular text-center md:text-start uppercase font-semibold">
                    BS Entertainment & Multimedia Computing
                  </h4>
                  <p className="max-w-[600px] text-start">
                    The Bachelor of Science in Entertainment and Multimedia
                    Computing specialized in Game Development program prepares
                    students to become game development professionals with
                    specialized knowledge, competencies and values in designing,
                    developing and producing digital games and tools, and in
                    managing game development projects for various applications.
                  </p>
                </div>
                <Button onClick={() => navigate("emc")} type="red">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center gap-[1rem]">
              <img
                className="w-[350px] shadow-lg"
                src="/programs/IS.jpeg"
                alt="cs"
              />
              <div className="flex flex-col items-center md:items-start gap-[1rem]">
                <div>
                  <h4 className="text-regular text-center md:text-start uppercase font-semibold">
                    BS Information Systems
                  </h4>
                  <p className="max-w-[600px] text-start">
                    The Bachelor of Science in Information Systems program
                    prepares students to be IT professionals and the expert on
                    design and implementation of Information Systems for
                    business processes
                  </p>
                </div>
                <Button onClick={() => navigate("is")} type="red">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
