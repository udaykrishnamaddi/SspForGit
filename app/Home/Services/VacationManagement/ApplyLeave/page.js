


            


"use client"
import React, { useState, useEffect } from 'react';
import { holidayData } from '../../../../components/HolidayData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';
const page = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveType, setLeaveType] = useState('Vacation Leave');
  const [workingDays, setWorkingDays] = useState(0);
  // Function to calculate working days excluding weekends and public holidays
  const calculateWorkingDays = () => {
    if (!startDate || !endDate) {
      return 0;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    let workingDaysCount = 0;

    // Loop through each day between start and end dates
    while (start <= end) {
      // Check if the day is a weekday (Monday to Friday)
      if (start.getDay() !== 0 && start.getDay() !== 6) {
        // Check if the day is not a public holiday
        const holidays = holidayData[start.getFullYear()] || [];
        const formattedDate = `${start.getDate().toString().padStart(2, '0')}-${(start.getMonth() + 1).toString().padStart(2, '0')}`;
        if (!holidays.find(holiday => holiday.date === formattedDate)) {
          workingDaysCount++;
        }
      }

      // Move to the next day
      start.setDate(start.getDate() + 1);
    }

    return workingDaysCount;
  };
  useEffect(() => {
    const newWorkingDays = calculateWorkingDays();
    setWorkingDays(newWorkingDays);
  }, [startDate, endDate]);
  const handleRequest = () => {
    const workingDays = calculateWorkingDays();
    console.log(`Requesting ${workingDays} working days of ${leaveType}`);
    // Add logic to submit the form or make an API request here
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Leave Request Form</h2>
      <div className="mb-4">
            <div className='flex flex-row gap-6'>
              <div className="mb-4 w-1/2"><label className="mb-2 block text-sm font-bold" htmlFor="name">First Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="FirstName" required="" /><span className="my-2 block"></span></div>
              <div className="mb-4 w-1/2"><label className="mb-2 block text-sm font-bold" htmlFor="name">Last Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="LastName" required="" /><span className="my-2 block"></span></div>
            </div>
            <div className='flex flex-row gap-6'>
              <div className="mb-4 w-1/2">
                
                <label className="mb-2 block text-sm font-bold" htmlFor="country">
                  Country
                </label>
                {/* Responsive Country Options */}
                <div className="sm:hidden">
                  <select
                    className="shadow-sm w-full cursor-pointer appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                    id="country"
                    required
                  >
                    <option value="IN">India</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="hidden sm:block">
                  <div className="flex space-x-3">
                    <div className="flex-1">
                      <select
                        className="shadow-sm w-full cursor-pointer appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="country"
                        required
                      >
                        <option value="IN">India</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 w-1/2"><label className="mb-2 block text-sm font-bold" htmlFor="name">City Office</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="CityOffice" required="" /><span className="my-2 block"></span></div>
            </div>
            <div className='flex flex-row gap-6'>
              <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="manager1">Manager 1</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="manager1" type="text" placeholder="Manager 1" required="" /></div>
              <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="manager2">Manager 2</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="manager2" type="text" placeholder="Manager 2" required="" /></div>
            </div>
            <div className="mb-4">
              <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
                Leave Type
              </label>
              <select
                id="leaveType"
                className="mt-1 p-2 w-full border rounded"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              >
                <option value="Vacation Leave">Vacation Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Maternity/Paternity Leave">Maternity/Paternity Leave</option>
                <option value="Bereavement Leave">Bereavement Leave</option>
                <option value="Compensatory Time Off">Compensatory Time Off</option>
                <option value="Personal Leave">Personal Leave</option>
              </select>
            </div>
            <div className="mb-4">
              <div className='flex flex-row'>
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="p-2 border rounded"
                  />
                </div>
                
              </div>
              <div className="flex gap-4">
                
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="p-2 border rounded"
                />
              </div>
            </div>
              
             
        
      </div>
      
      
      <div className="mb-4">
        <label htmlFor="workingDays" className="block text-sm font-medium text-gray-700">
          LeaveCount
        </label>
        <input
          type="text"
          id="workingDays"
          className="mt-1 p-2 w-full border rounded"
          value={workingDays}
          readOnly
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleRequest}
      >
        Request
      </button>
    </div>
  );
};

export default page;
