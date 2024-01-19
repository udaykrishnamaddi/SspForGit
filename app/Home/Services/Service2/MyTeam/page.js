// pages/team.js
import TeamMember from './TeamMemberFinal';

const teamMembersData = [
  {
    id: 1,
    imageSrc: '/TeamMemberImages/Tm-1.png',
    role: 'HR Manager',
    name: 'Anusha',
    industryExperience: 50,
    companyExperience: 3,
    projectsCompleted: 10,
  },
  {
    id: 2,
    imageSrc: '/TeamMemberImages/Tm-2.png',
    role: 'Full Stack Developer',
    name: 'Uday',
    industryExperience: 5,
    companyExperience: 3,
    projectsCompleted: 10,
  },
  {
    id: 3,
    imageSrc: '/TeamMemberImages/Tm-3.jpg',
    role: 'Backend Developer',
    name: 'Bhanu',
    industryExperience: 5,
    companyExperience: 3,
    projectsCompleted: 10,
  },
  {
    id: 4,
    imageSrc: '/TeamMemberImages/Tm-4.jpg',
    role: 'Full stack intern',
    name: 'Avinash',
    industryExperience: 5,
    companyExperience: 3,
    projectsCompleted: 10,
  },
  {
    id: 5,
    imageSrc: '/TeamMemberImages/Tm-5.jpg',
    role: 'Q/A Lead',
    name: 'Likith',
    industryExperience: 5,
    companyExperience: 3,
    projectsCompleted: 10,
  },
  {
    id: 6,
    imageSrc: '/TeamMemberImages/Tm-6.jpg',
    role: 'Front End Developer',
    name: 'priya',
    industryExperience: 5,
    companyExperience: 3,
    projectsCompleted: 10,
  },
  // Repeat the structure for other team members
];

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">About our Team</h1>

      <div className="flex flex-wrap justify-center">
        {teamMembersData.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default page;
