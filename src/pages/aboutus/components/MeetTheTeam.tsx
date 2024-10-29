import teamData from "./team.json";

export default function MeetTheTeam() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] w-full">
      {teamData.team.map((member) => (
        <div
          key={member.email}
          className="flex flex-col h-full justify-start items-center text-center gap-[1rem]"
        >
          <img
            className="h-[260px] w-auto rounded-full shadow-lg"
            src={member.image}
            alt="faculty"
          />
          <div className="flex flex-col items-center">
            <h4 className="text-regular">{member.name}</h4>
            {member.title.split(",").map((title, index) => (
              <p key={index} className="text-regular">
                {title.trim()}
              </p>
            ))}
            <p className="text-[#c7c7c7] select-text">{member.email}</p>
            <p className="text-red uppercase font-medium">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
