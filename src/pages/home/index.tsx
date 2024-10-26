export default function Home() {
  return (
    <div className="relative">
      <div className="h-screen w-screen fixed -z-10 opacity-35">
        <img
          className="object-cover w-full h-full"
          src="BACKGROUND.png"
          alt="bg"
        />
      </div>
      <section>
        <div className="w-full flex flex-col justify-center items-start h-full">
          <div className="flex flex-col pt-[2rem]">
            <h3 className="font-normal">
              <em>Mapúa MCM</em>
            </h3>
            <h1>
              Empowering<span className="text-red"> Innovators</span> <br /> in
              <span className="text-blue"> Technology <span className="text-[#1c2253]">&</span> Data</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
