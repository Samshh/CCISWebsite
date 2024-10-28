import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import Card from "../../components/ui/cards";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "MMCM CCIS";
  }, []);

  return (
    <div className="relative">
      <img
        loading="lazy"
        className="object-cover h-screen w-full absolute"
        src="/redbg.png"
        alt="bg"
      />
      <section className="h-auto sticky top-0">
        <div className="w-full flex flex-col justify-center items-start h-full gap-[1.5rem]">
          <div className="flex flex-col pt-[2rem] text-start text-[#fff] special-text">
            <h3 className="font-medium uppercase">
              Mapúa MCM
            </h3>
            <h1>
              Shaping Tomorrow’s <br />
              Innovators in Technology
            </h1>
          </div>
          <div className="flex gap-[1rem]">
            <a
              href="https://mcm-edu.my.salesforce-sites.com/applynow"
              target="_blank"
              rel="noopener"
              title="apply"
            >
              <Button type="red">Apply now</Button>
            </a>
            <Button type="blue" onClick={() => navigate("/programs")}>
              Programs
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-[#fff] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex justify-between items-center gap-[1rem] max-w-[580px] w-full">
              <img
                loading="lazy"
                src="/MMCMmain.png"
                className="h-[160px] w-auto"
                alt="mainlogo"
              />
              <img
                loading="lazy"
                src="/logo.png"
                className="h-[150px] w-auto mr-[1rem]"
                alt="mainlogo"
              />
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <h3 className="text-regular font-semibold special-text">
                College of Computer and Information Science
              </h3>
              <p className="max-w-[768px]">
                The College of Computer and Information Science (CCIS) designed
                its curricula to produce IT professionals who embody creative,
                technical, and analytical faculties and shall utilize the same
                for nation-building.{" "}
                <span
                  className="text-red cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  {" "}
                  Read more...
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-[2rem]">
              <Card
                onClick={() => navigate("/programs/cs")}
                image="/programs/COMSCI.jpeg"
                title="Computer Science"
              >
                The Bachelor of Science in Computer Science program trains
                students in planning, researching, and developing algorithms and
                software for Windows, web, and mobile platforms.
              </Card>

              <Card
                onClick={() => navigate("/programs/emc")}
                image="/programs/EMC.jpeg"
                title="Entertainment & Multimedia Computing"
              >
                The Bachelor of Science in Entertainment and Multimedia
                Computing with a focus on Game Development equips students to
                design, develop, and manage digital games.
              </Card>

              <Card
                onClick={() => navigate("/programs/is")}
                image="/programs/IS.jpeg"
                title="Information Systems"
              >
                The Bachelor of Science in Information Systems program prepares
                students to be IT professionals and experts in designing and
                implementing Information Systems for business processes.
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
