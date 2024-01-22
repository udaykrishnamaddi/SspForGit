// pages/index.js
"use client"
import React, { useState } from 'react';
import { holidayData } from './HolidayData';
const HolidayTable = ({ holidays }) => {
  return (
    <div className=''>
    <table className=" w-full border-collapse border border-gray-300 mt-5">
      <thead className=''>
        <tr className="bg-black">
          <th className="border  border-gray-300 px-4 py-2 text-white">Holiday Name</th>
          <th className="border  border-gray-300 px-4 py-2 text-white">Date</th>
        </tr>
      </thead>
      <tbody>
        {holidays.map((holiday) => (
          <tr className='bg-gray-700' key={holiday.name}>
            <td className="font-lead text-xl text-center border border-gray-300 px-4 py-2 text-white">{holiday.name}</td>
            <td className="font-lead text-xl text-center border border-gray-300 px-4 py-2 text-white">{holiday.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

const PublicHolidaysTable = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [holidays, setHolidays] = useState([]);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    // Assume you have a function to fetch holidays based on the selected country
    const countryHolidays = fetchHolidays(country);
    setSelectedCountry(country);
    setHolidays(countryHolidays);
  };

  const fetchHolidays = (country) => {
    // const holidayData = {
    //     in: [
    //       { name: 'Sankranthi', date: '15-01-2024' },
    //       { name: 'Republic Day', date: '26-01-2024' },
    //       { name: 'Holi', date: '08-03-2024'},
        
    //     ],
    //     ge: [
    //       { name: 'New Year', date: '2024-01-01' },
    //       { name: 'Christmas Day', date: '2024-12-25' },
    //     ],
    //     cz: [
    //       { name: 'Labour Day', date: '01-05-2024' },
    //       { name: 'Victory In Europe Day', date: '08-05-2024' },
    //     ],
    //   };
    
    return holidayData[country] || [];
  };

  return (
    <div className="container mx-auto p-4">
      
      <h1 className="text-3xl italic text-center mb-8">Country holidays !</h1>
      <br/>
      {/* <br/>
      <br/> */}
      <div className="mx-auto mb-4 h-64 w-64">
      <img className='rounded-full' src='/PublicHolidaysImages/Screenshot 2024-01-14 201707.png' alt="Holiday Screenshot" />
      </div>
      <div className="mb-4 flex items-center justify-center">
        <label className="mr-2 text-3xl italic text-center">Select a Country:</label>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="p-2 border border-gray-300  to-white rounded sm:w-64"
        >
          <option value="">Choose a country...</option>
          <option value="in">India</option>
          <option value="ge">Germany</option>
          <option value="cz">Czech Republic</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      {selectedCountry && holidays.length > 0 ? (
        <HolidayTable holidays={holidays} />
      ) : (
        <p className='text-gray-600 flex items-center justify-center'>No holidays to display.</p>
      )}
    </div>
  );
};

export default PublicHolidaysTable;
