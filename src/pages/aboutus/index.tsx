import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About | MMCM CCIS";
  }, []);
  return (
    <div className="relative">
      <img
        className="opacity-20 w-auto h-1/2 absolute top-0 object-cover"
        src="aboutbanner.png"
        alt="aboutbanner"
      />
      <section className="flex-col gap-[5rem] h-auto sticky top-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem]">
          <img
            loading="lazy"
            src="logo.png"
            className="h-[174px] w-auto"
            alt="mainlogo"
          />
          <div className="max-w-[768px] text-center md:text-start">
            <h3 className="text-regular font-semibold">
              College of Computer and Information Science
            </h3>
            <p>
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
        <section className="h-auto justify-center flex-col gap-[1.5rem]">
          <h2 className="text-regular font-semibold">Meet the Team</h2>
          <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
            <img
              className="h-[345px] w-auto rounded-md"
              src="dean.jpeg"
              alt="dada"
            />
            <div>
              <p className="text-regular">
                Rhodessa <em>"Dada"</em> J. Cascaro
              </p>
              <p className="text-blue uppercase font-medium">Dean</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1rem] md:gap-[1.5rem]">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Neil P. Magloyuan</p>
              <p className="text-blue uppercase font-medium">CS Program Head</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Genevieve A. Pilongo</p>
              <p className="text-blue uppercase font-medium">IS Program Head</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Rogelio O. Badiang Jr. </p>
              <p className="text-blue uppercase font-medium">
                EMC Program Head
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Cherry B. Lisondra</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Martzel Baste</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Christopher Josh Dellosa</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Clyde Chester R. Balaman</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Patrick D. Cerna</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Daisy Ann M. Arzaga</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Christopher Rey A. Lungay</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Mary Grace Sandoval</p>
              <p className="text-blue uppercase font-medium">Faculty</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Robie Bryan Jacaban</p>
              <p className="text-blue uppercase font-medium">Technical Assistant</p>
            </div>
          </div>
        </section>
        <div className="bg-[#f9f9f9]">
          <section className="h-auto">
            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-start justify-center gap-[2rem] max-w-[968px]">
              <div className="flex flex-col justify-between items-center h-full gap-[2rem]">
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                  <h3 className="text-regular font-semibold">Vision</h3>
                  <p>
                    Mapúa Malayan Colleges Mindanao stands among the world's
                    leading educational institutions.
                  </p>
                </div>
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                  <h3 className="text-regular font-semibold">Motto</h3>
                  <p>Excellence and Relevance</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                <h3 className="text-regular font-semibold">Mission</h3>
                <p>
                  1. The institute shall provide a learning environment in order
                  for its students to acquire the attributes that will make them
                  globally competitive & locally in-demand. <br />
                  <br />
                  2. The institute shall engage in cutting edge and economically
                  viable research, development and innovation that is relevant
                  locally and beyond. <br />
                  <br />
                  3. The institute shall provide state-of-the-art solutions to
                  problems of industries and communities locally and beyond.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
