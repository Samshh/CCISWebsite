import { useEffect } from "react";
import MeetTheTeam from "./components/MeetTheTeam";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About | MMCM CCIS";
  }, []);
  return (
    <div className="md:relative">
      <img
        loading="lazy"
        className="object-cover w-full h-screen absolute"
        src="/redbg.png"
        alt="bg"
      />
      <section className="flex-col gap-[5rem] h-auto relative md:sticky md:top-0">
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
      <div className="md:sticky top-0 bg-[#fff]">
        <div>
          <section className="md:sticky top-0 h-auto flex-col gap-[2rem]">
            <h1 className="text-regular font-semibold special-text">MMCM</h1>
            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-start justify-center gap-[2rem] max-w-[968px]">
              <div className="flex flex-col justify-between items-center h-full gap-[1.25rem] text-start">
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1.25rem]">
                  <h3 className="text-regular font-semibold special-text">
                    Vision
                  </h3>
                  <p>
                    Mapúa Malayan Colleges Mindanao stands among the world's
                    leading educational institutions.
                  </p>
                </div>
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1.25rem]">
                  <h3 className="text-regular font-semibold special-text">
                    Motto
                  </h3>
                  <p>Excellence and Relevance</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-start text-start items-center gap-[1.25rem]">
                <h3 className="text-regular text-center font-semibold special-text">
                  Mission
                </h3>
                <p>
                  <span className="text-red">1.</span> The institute shall
                  provide a learning environment in order for its students to
                  acquire the attributes that will make them globally
                  competitive & locally in-demand.
                </p>
                <p>
                  <span className="text-red">2.</span> The institute shall
                  engage in cutting edge and economically viable research,
                  development and innovation that is relevant locally and
                  beyond.
                </p>
                <p>
                  <span className="text-red">3.</span> The institute shall
                  provide state-of-the-art solutions to problems of industries
                  and communities locally and beyond.
                </p>
              </div>
            </div>
          </section>
          <div className="md:sticky top-0 bg-[#f9f9f9]">
            <section className="sticky top-0 h-auto flex-col gap-[2rem]">
              <h1 className="text-regular font-semibold special-text">CCIS</h1>
              <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-start justify-center gap-[2rem] max-w-[968px]">
                <div className="flex flex-col justify-between items-center text-start h-full gap-[1.25rem]">
                  <div className="flex flex-col w-full h-full justify-start items-center gap-[1.25rem]">
                    <h3 className="text-regular font-semibold special-text">
                      Vision
                    </h3>
                    <p>
                      The College of Computer and Information Science (CCIS) of
                      Mapua MCM will pioneer new approaches to learning and
                      discovery, igniting a passion for knowledge and equipping
                      students with the skills to flourish in our dynamic world.
                    </p>
                  </div>
                  <div className="flex flex-col w-full h-full justify-start items-center gap-[1.25rem]">
                    <h3 className="text-regular font-semibold special-text">
                      GOALS
                    </h3>
                    <p>
                      The College of Computer and Information Science (CCIS)
                      aims to integrate/introduce new ideas and approaches
                      through flexible learning to enhance student learning
                      experience, acquire the latest tools and technology to
                      boost student skills and creativity responsive to the
                      needs of the industry, and leverage international linkages
                      and partnerships to stand among the globally competitive
                      professionals.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full h-full justify-start text-start items-center gap-[1.25rem]">
                  <h3 className="text-regular text-center font-semibold special-text">
                    Mission
                  </h3>
                  <p>
                    The College of Computer and Information Science (CCIS)
                    commits itself to the threefold mission in:
                  </p>
                  <p>
                    <span className="text-red">1.</span> promoting a culture of
                    innovation to enhance student learning experience;
                  </p>
                  <p>
                    <span className="text-red">2.</span> enabling student
                    knowledge, skill and character development that addresses
                    the 21st century challenges; and
                  </p>
                  <p>
                    <span className="text-red">3.</span> providing globalized
                    learning while ensuring continuous improvement and
                    measurement.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
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
              <p className="text-regular">Doctor of Information Technology</p>
              <p className="text-[#c7c7c7] select-text">rjcascaro@mcm.edu.ph</p>
              <p className="text-red uppercase font-medium">Dean</p>
            </div>
          </div>
          <MeetTheTeam />
        </section>
      </div>
    </div>
  );
}
