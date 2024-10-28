import { useEffect } from "react";

export default function Cs() {
  useEffect(() => {
    document.title = "Computer Science | MMCM CCIS";
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
          Computer Science
        </h1>
      </section>
      <div className="h-auto sticky top-0 bg-[#fff]">
        <section className="h-auto justify-start flex-col gap-[1.5rem] max-w-[768px]">
          <h1 className="text-regular font-semibold uppercase special-text">
            About
          </h1>
          <div className="flex flex-col text-justify indent-8 text-regular font-medium gap-[1rem]">
            <p>
              The BS Computer Science program prepares students to become
              computer scholars equipped with the complete tools in planning,
              organizing, researching, analyzing, and developing algorithms,
              computer systems, and software applications for Windows, web, and
              mobile platforms. This Computer Science course in the Philippines
              is designed to meet the demands of the evolving computer world in
              Davao and beyond.
            </p>
            <p>
              The program focuses on the application of various knowledge and
              skills in formal research in the field of computer science.
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
                formulating and solving problems of interest, through the
                application of technology, and by using mathematical
                foundations, algorithmic principles, and BS Computer Science
                theory in the design and development of computer-based systems
                and processes.
              </p>
              <p>
                <span className="text-red">2.</span> Perform tasks effectively
                as individuals and team members in the workplace growing into
                highly technical or project management and leadership roles, a
                crucial skill set emphasized in our Computer Science course in
                the Philippines.
              </p>
              <p>
                <span className="text-red">3.</span> Pursue life-long learning,
                enabling them to adapt and grow as organizational
                responsibilities change, reflecting the continuous evolution of
                the computer world in Davao and beyond.
              </p>
            </div>
            <h1 className="text-regular font-semibold uppercase special-text">
              Program Outcomes
            </h1>
            <div className="flex flex-col text-start font-medium gap-[1rem]">
              <p className="text-center text-[#737373]">
                Graduates of the Bachelor of Science in Science Computer
                program are expected to demonstrate:
              </p>
              <p>
                <span className="text-red">1.</span> Apply knowledge of
                computing fundamentals, knowledge of computing specialization,
                and mathematics, science, and domain knowledge appropriate for
                the computing specialization to the abstraction and
                conceptualization of computing models from defined problems and
                requirements.
              </p>
              <p>
                <span className="text-red">2.</span> Identify, analyze,
                formulate, research literature, and solve complex computing
                problems and requirements reaching substantiated conclusions
                using fundamental principles of mathematics, computing sciences,
                and relevant domain disciplines.
              </p>
              <p>
                <span className="text-red">3.</span> Apply mathematical
                foundations, algorithmic principles, and BS Computer Science
                theory in the modeling and design of computer-based systems in a
                way that demonstrates comprehension of the tradeoffs involved in
                design choices.
              </p>
              <p>
                <span className="text-red">4.</span> Implement information
                security in the design, development, and use of information
                systems, a key focus in our Computer Science course in the
                Philippines.
              </p>
              <p>
                <span className="text-red">5.</span> Design and evaluate
                solutions for complex computing problems, and design and
                evaluate systems, components, or processes that meet specified
                needs with appropriate consideration for public health and
                safety, cultural, societal, and environmental considerations.
              </p>
              <p>
                <span className="text-red">6.</span> Create, select, adapt, and
                apply appropriate techniques, resources, and modern computing
                tools to complex computing activities, with an understanding of
                the limitations to accomplish common goals.
              </p>
              <p>
                <span className="text-red">7.</span> Function effectively as an
                individual or a member or leader in diverse teams and in
                multidisciplinary settings, which is crucial in the dynamic
                computer world in Davao.
              </p>
              <p>
                <span className="text-red">8.</span> Communicate effectively
                with the computing community and with society at large about
                complex computing activities by being able to comprehend and
                write effective reports, design documentation, make effective
                presentations, and give and understand clear instructions.
              </p>
              <p>
                <span className="text-red">9.</span> Recognize the legal,
                social, ethical, and professional issues involved in the
                utilization of computer technology and be guided by the adoption
                of appropriate professional, ethical, and legal practices both
                in the local and global community.
              </p>
              <p>
                <span className="text-red">10.</span> Recognize the need for and
                engage in independent learning for continual development as a
                computing professional.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
