import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Is() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Information Systems | MMCM CCIS";
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
        <h1 className="text-[#fff] text-center uppercase special-text">
          Information Systems
        </h1>
      </section>
      <div className="h-auto sticky top-0 bg-[#fff]">
        <section className="h-auto justify-start flex-col gap-[1.5rem] max-w-[768px]">
          <h1 className="text-regular font-semibold uppercase special-text">
            About
          </h1>
          <div className="flex flex-col text-justify indent-8 text-regular font-medium gap-[1rem]">
            <p>
              The Bachelor of Science in Information Systems program prepares
              students to be IT professionals and the expert on design and
              implementation of Information Systems for business processes.
            </p>
            <p>
              The focus of the program is on leveraging business technology for
              strategic advantage thus the program includes a significant
              business component that shall equipped students in the planning,
              developing or acquiring, implementing, and managing an
              infrastructure of information communications technology, internal
              data and external data, and enterprise-wide information processing
              systems.
            </p>
          </div>
        </section>
        <div className="bg-[#f1f1f1]">
          <section className="h-auto justify-start flex-col gap-[1.5rem] max-w-[768px]">
            <h1 className="text-regular font-semibold uppercase special-text">
              Educational Objectives
            </h1>
            <div className="flex flex-col text-start font-medium gap-[1rem]">
              <p>
                <span className="text-red">1.</span> Articulate expertise in
                understanding, analyzing, and applying current and emerging
                technologies in the design and development of IT-based solutions
                for business processes.
              </p>
              <p>
                <span className="text-red">2.</span> Perform tasks effectively
                as individuals and team members in the workplace growing into
                highly technical or project management and leadership roles.
              </p>
              <p>
                <span className="text-red">3.</span> Pursue life-long learning
                enabling them to adapt and grow as organizational
                responsibilities change.
              </p>
            </div>
            <h1 className="text-regular font-semibold uppercase special-text">
              Program Outcomes
            </h1>
            <div className="flex flex-col text-start font-medium gap-[1rem]">
              <p className="text-center text-[#737373]">
                Graduates of the Bachelor of Science in Information Systems
                program are expected to demonstrate:
              </p>
              <p>
                <span className="text-red">1.</span> Apply knowledge of business
                processes, computing, mathematics, and social sciences
                appropriate to Information Systems.
              </p>
              <p>
                <span className="text-red">2.</span> Analyze a problem, identify
                and define the computing requirements with respect to
                organizational factors to its solution and plan strategies for
                their solution.
              </p>
              <p>
                <span className="text-red">3.</span> Evaluate information
                systems in terms of general quality attributes and possible
                trade-offs presented within the given requirements.
              </p>
              <p>
                <span className="text-red">4.</span> Design, implement, and
                evaluate information systems, processes, components, or programs
                and to source cost-benefit efficient alternatives to meet desire
                needs, goals, and constraints.
              </p>
              <p>
                <span className="text-red">5.</span> Use knowledge and
                understanding of enterprises in modelling and design of
                information systems.
              </p>
              <p>
                <span className="text-red">6.</span> Deploy and use effectively
                skills, tools, and techniques necessary for information systems
                practices.
              </p>
              <p>
                <span className="text-red">7.</span> Function effectively on
                teams (recognizing the different roles within a team and
                different ways of organizing teams) to accomplish a common goal.
              </p>
              <p>
                <span className="text-red">8.</span> Communicate effectively
                with a range of audiences. Communication skill includes
                technical writing, presentation and negotiation, and numeracy.
              </p>
              <p>
                <span className="text-red">9.</span> Recognize the legal,
                social, ethical, and professional issues involved in the
                exploitation of computer technology and be guided by the
                adoption of appropriate professional, ethical, and legal
                practices both in local and global community.
              </p>
              <p>
                <span className="text-red">10.</span> Recognize the need for and
                engage in an independent and life-long learning, planning self
                learning, and improving performance as the foundation for
                on-going professional development.
              </p>
            </div>
            <div className="w-full flex items-center justify-between mt-[3rem] font-semibold text-regular gap-[2rem]">
              <div
                onClick={() => navigate("/programs/emc")}
                className="flex items-center cursor-pointer transition-all ease-linear hover:scale-110"
              >
                <Icon icon="mingcute:left-fill" className="text-red" />
                <p>EMC</p>
              </div>
              <div
                onClick={() => navigate("/programs/cs")}
                className="flex items-center cursor-pointer transition-all ease-linear hover:scale-110"
              >
                <p>CS</p>
                <Icon icon="mingcute:right-fill" className="text-red" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
