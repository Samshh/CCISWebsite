import { useEffect } from "react";

export default function Emc() {
  useEffect(() => {
    document.title = "Entertainment and Multimedia Computing | MMCM CCIS";
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
        <h2 className="text-[#fff] text-center uppercase special-text">
          Entertainment and Multimedia Computing
        </h2>
      </section>
      <div className="h-auto sticky top-0 bg-[#fff]">
        <section className="h-auto justify-start flex-col gap-[1.5rem] max-w-[768px]">
          <h1 className="text-regular font-semibold uppercase special-text">
            About
          </h1>
          <div className="flex flex-col text-justify text-regular font-medium gap-[1rem]">
            <p className="indent-8">
              The Bachelor of Science in Entertainment and Multimedia Computing
              specialized in Game Development program prepares students to
              become game development professionals with specialized knowledge,
              competencies and values in designing, developing and producing
              digital games and tools, and in managing game development projects
              for various applications.
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
                for entertainment and multimedia computing profession.
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
                Graduates of the Bachelor of Science in Entertainment and
                Multimedia Computing program are expected to demonstrate:
              </p>
              <p>
                <span className="text-red">1.</span> Apply knowledge of
                mathematics, physical sciences, contemporary issues, and
                computer sciences to the practice of being an entertainment and
                multimedia computing professionals.
              </p>
              <p>
                <span className="text-red">2.</span> Specialized computing
                knowledge in each applicable field, and the ability to apply
                such knowledge to provide solutions to actual problems.
              </p>
              <p>
                <span className="text-red">3.</span> Recognize, formulate, and
                solve computing problems.
              </p>
              <p>
                <span className="text-red">4.</span> Analyze project
                requirements, design and implement project prototypes.
              </p>
              <p>
                <span className="text-red">5.</span> Design, build, improve, and
                deploy products that meets client needs within realistic
                constraints.
              </p>
              <p>
                <span className="text-red">6.</span> Use the appropriate
                techniques, skills and modern computing tools necessary for the
                practice of being a professional game developer or animator.
              </p>
              <p>
                <span className="text-red">7.</span> Function effectively as an
                individual or a member or leader in diverse teams and in
                multidisciplinary settings.
              </p>
              <p>
                <span className="text-red">8.</span> Communicate effectively
                with the computing community and write effective reports, design
                documentation, make effective presentation, and give and
                understand clear instructions.
              </p>
              <p>
                <span className="text-red">9.</span> Assess the local and global
                impacts of computing on society relevant to professional
                computing practice and subscription to accepted industry
                standards.
              </p>
              <p>
                <span className="text-red">10.</span> Recognize the legal,
                social, ethical, and professional issues involved in the
                utilization of entertainment and multimedia computing projects
                and be guided by the adoption of appropriate professional,
                ethical, and legal practices both in local and global community.
              </p>
              <p>
                <span className="text-red">11.</span> Create or use modified
                artifacts in considerations of intellectual property rights of
                the author.
              </p>
              <p>
                <span className="text-red">12.</span> Recognize the need for and
                engage in an independent and learning for continual development
                as an entertainment and multimedia computing professionals.
              </p>
              <p>
                <span className="text-red">13.</span> Demonstrate innovativeness
                in creating an original creative outputs.
              </p>
              <p>
                <span className="text-red">14.</span> Demonstrate client-centric
                service.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
