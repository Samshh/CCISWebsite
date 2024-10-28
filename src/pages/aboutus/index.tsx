import { useEffect } from "react";
import MeetTheTeam from "./components/MeetTheTeam";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About | MMCM CCIS";
  }, []);
  return (
    <div className="relative">
      <img
        loading="lazy"
        className="object-cover w-full h-screen absolute"
        src="/redbg.png"
        alt="bg"
      />
      <section className="flex-col gap-[5rem] h-auto sticky top-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem]">
          <img
            loading="lazy"
            src="/logo.png"
            className="h-[174px] w-auto"
            alt="mainlogo"
          />
          <div className="text-[#fff] text-center md:text-start">
            <h3 className="font-semibold special-text">
              College of Computer and Information Science
            </h3>
            <p className="max-w-[768px]">
              The College of Computer and Information Science (CCIS) designed
              its curricula to produce IT professionals who embody creative,
              technical, and analytical faculties and shall utilize the same for
              nation-building. CCIS provides a holistic hands-on-training
              through a balance of arts and science and technology and at the
              same time guides the students in their quest for modern and humane
              society.
            </p>
          </div>
        </div>
      </section>
      <div className="sticky top-0 bg-[#fff]">
        <section className="h-auto justify-center flex-col gap-[1.75rem]">
          <h1 className="text-regular font-semibold special-text">
            Meet the Team
          </h1>
          <div className="flex flex-col text-center justify-center items-center py-[3rem] gap-[1rem] ">
            <img
              className="h-[260px] w-auto rounded-full shadow-lg"
              src="/dean.png"
              alt="dada"
            />
            <div>
              <h4 className="text-regular">
                Dr. Rhodessa <em>"Dada"</em> J. Cascaro
              </h4>
              <p className="text-red">Doctor of Information Technology</p>
              <p className="text-[#c7c7c7] select-text">rjcascaro@mcm.edu.ph</p>
              <p className="text-blue uppercase font-medium">Dean</p>
            </div>
          </div>
          <MeetTheTeam />
        </section>
        <div className="bg-[#f9f9f9]">
          <section className="h-auto">
            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-start justify-center gap-[2rem] max-w-[968px]">
              <div className="flex flex-col justify-between items-center h-full gap-[2rem]">
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                  <h3 className="text-regular font-semibold special-text">
                    Vision
                  </h3>
                  <p>
                    Mapúa Malayan Colleges Mindanao stands among the world's
                    leading educational institutions.
                  </p>
                </div>
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                  <h3 className="text-regular font-semibold special-text">
                    Motto
                  </h3>
                  <p>Excellence and Relevance</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-start text-justify items-center gap-[1rem]">
                <h3 className="text-regular text-center font-semibold special-text">
                  Mission
                </h3>
                <p>
                  <span className="text-red">1.</span> The institute shall
                  provide a learning environment in order for its students to
                  acquire the attributes that will make them globally
                  competitive & locally in-demand. <br />
                  <br />
                  <span className="text-red">2.</span> The institute shall
                  engage in cutting edge and economically viable research,
                  development and innovation that is relevant locally and
                  beyond. <br />
                  <br />
                  <span className="text-red">3.</span> The institute shall
                  provide state-of-the-art solutions to problems of industries
                  and communities locally and beyond.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
