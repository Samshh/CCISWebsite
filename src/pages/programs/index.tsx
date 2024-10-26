import { useEffect } from "react";

export default function Programs() {

  useEffect(() => {
    document.title = "Programs | MMCM CCIS";
  }, []);
  return (
    <section>
      <h1>Programs</h1>
    </section>
  );
}