import { useEffect } from "react";

export default function Programs() {
  useEffect(() => {
    document.title = "Programs | MMCM CCIS";
  }, []);
  return (
    <div className="relative">
      <img
        loading="lazy"
        className="object-cover w-full h-screen absolute"
        src="redbg.png"
        alt="bg"
      />
      <section className="h-auto sticky top-0">
        <h1 className="text-[#fff] uppercase">Programs</h1>
      </section>
      <div className="sticky top-0 bg-[#fff]">
        <section className="justify-center flex-col gap-[1.5rem]">
          
        </section>
      </div>
    </div>
  );
}
