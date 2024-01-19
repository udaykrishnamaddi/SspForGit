'use client'
// components/TeamMember.js
import { useState } from 'react';
import Image from 'next/image';

const TeamMember = ({ imageSrc, role, name, industryExperience, companyExperience, projectsCompleted }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 p-2 cursor-pointer`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Front side */}
      <div
        className={`bg-gray-200 flex flex-col items-center p-4 border border-gray-300 rounded transition-transform duration-300 ${
          flipped ? 'opacity-0 transform rotate-y-180' : 'opacity-100'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <Image
          src={imageSrc}
          alt="Team Member"
          className="w-full h-48 object-cover mb-4 rounded"
          width={300}
          height={200}
        />
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">{role}</p>
          <div className="border-b border-gray-400 w-8 mx-auto mb-1"></div>
          <p className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</p>
        </div>
      </div>

      {/* Back side */}
      <div
        className={`absolute inset-0 bg-gray-200 flex flex-col items-center p-4 border border-gray-300 rounded transition-transform duration-300 ${
          flipped ? 'opacity-100 transform rotate-y-180' : 'opacity-0'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Include team member image as background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>

        {/* Bar graph and additional information */}
        <div className="relative z-10">
          <p className="text-sm">Industry Experience: {industryExperience} years</p>
          <p className="text-sm">Company Experience: {companyExperience} years</p>
          <p className="text-sm">No of Projects Completed: {projectsCompleted}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
