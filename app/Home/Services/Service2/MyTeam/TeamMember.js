// components/TeamMember.js
'use client'
import { useState } from 'react';
import Image from 'next/image';

const TeamMember = ({ imageSrc, role, name, industryExperience, companyExperience, projectsCompleted }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 p-2 cursor-pointer`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front side */}
      <div
        className={`bg-gray-200 flex flex-col items-center p-4 border border-gray-300 rounded transition-transform duration-200 transform ${
          flipped ? 'opacity-0 rotate-y-180' : 'opacity-100'
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
        className={`absolute inset-0 bg-gray-200 flex flex-col items-start p-4 border border-gray-300 rounded transition-transform duration-200 ${
          flipped ? 'opacity-100 rotate-y-180' : 'opacity-0'
        }`}
        style={{
          backfaceVisibility: 'hidden',
          backdropFilter: flipped ? 'blur(8px)' : 'none',
          color: flipped ? 'white' : 'black',
        }}
      >
        {/* Include team member image as background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>

        {/* Bar graph and additional information */}
        <div className="relative z-10 mt-auto"> {/* Set margin-top to auto for positioning at left bottom */}
          <p className="font-bold text-md text-black shadow-[0_35px_35px_rgba(255,255,255,0)]">Industry Experience: {industryExperience} years</p>
          <p className="font-bold text-md text-black shadow-[0_35px_35px_rgba(255,255,255,0)]">Company Experience: {companyExperience} years</p>
          <p className="font-bold text-md text-black shadow-[0_35px_35px_rgba(255,255,255,0)]">No of Projects Completed: {projectsCompleted}</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default TeamMember;
