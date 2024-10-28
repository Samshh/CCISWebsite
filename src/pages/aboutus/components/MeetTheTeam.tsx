import teamData from './team.json';

export default function MeetTheTeam() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem] md:gap-[2rem] lg:gap-[4rem] w-full">
      {teamData.team.map((member) => (
        <div key={member.email} className="flex flex-col justify-center items-center text-center">
          <h4 className="text-regular">{member.name}</h4>
          <p className="text-regular">{member.title}</p>
          <p className="text-[#c7c7c7] select-text">{member.email}</p>
          <p className="text-red uppercase font-medium">{member.position}</p>
        </div>
      ))}
    </div>
  );
}
