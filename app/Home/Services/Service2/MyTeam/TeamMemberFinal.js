// components/TeamMember.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Bar } from 'react-chartjs-2';

const TeamMember = ({ imageSrc, role, name, industryExperience, companyExperience, projectsCompleted }) => {
  const [flipped, setFlipped] = useState(false);

  // Bar graph data
  const data = {
    labels: ['Industry Experience', 'Company Experience', 'Projects Completed'],
    datasets: [
      {
        data: [industryExperience, companyExperience, projectsCompleted],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)', // Red for Industry Experience
          'rgba(54, 162, 235, 0.7)', // Blue for Company Experience
          'rgba(255, 206, 86, 0.7)', // Yellow for Projects Completed
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Bar graph options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
          className="brightness-75 absolute inset-0 bg-cover bg-center blur"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>

        {/* Bar graph and additional information */}
        <div className="relative z-10 mt-auto">
          {data.labels.map((label, index) => (
            <dl key={index} className="team-stat flex gap-2">
              <dt className="js-stat-label font-bold text-md shadow-md" style={{ color: 'white' }}>{label}</dt>
              <dd>
                <span className="team-stat-value js-stat-value" style={{ width: `${data.datasets[0].data[index]}%`, backgroundColor: data.datasets[0].backgroundColor[index] }}>
                  {data.datasets[0].data[index]}
                </span>
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
