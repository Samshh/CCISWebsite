import { useEffect } from "react";

export default function Events() {

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
          <h1><em className="text-border">No events currently</em></h1>
        </section>
      </div>
    </div>
  );
}
