


// "use client"
// import React from 'react';
// import { useState } from 'react';

// const page = () => {
//     const [formData, setFormData] = useState({
//         fromDate: '',
//         numOfDays: '',
//         toDate: '',
//       });
    
//       const handleFromDateChange = (e) => {
//         const fromDate = e.target.value;
//         setFormData((prevData) => ({
//           ...prevData,
//           fromDate,
//         }));
//         updateToDate(fromDate, formData.numOfDays);
//       };
    
//       const handleNumOfDaysChange = (e) => {
//         const numOfDays = e.target.value;
//         setFormData((prevData) => ({
//           ...prevData,
//           numOfDays,
//         }));
//         updateToDate(formData.fromDate, numOfDays);
//       };
    
//       const updateToDate = (fromDate, numOfDays) => {
//         if (fromDate && numOfDays) {
//           const fromDateObj = new Date(fromDate);
//           const toDateObj = new Date(fromDateObj.setDate(fromDateObj.getDate() + parseInt(numOfDays)));
//           const toDate = toDateObj.toISOString().split('T')[0];
//           setFormData((prevData) => ({
//             ...prevData,
//             toDate,
//           }));
//         }
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // Your form submission logic here
//       };
//   return (
//     <div>
//       <div className="bg-white font-sans text-gray-900">
//           <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
//             <div className="mx-2 py-6 text-center md:mx-auto md:w-2/3 md:py-6">
//               {/* <h1 className="text-3xl italic leading-loose sm:text-5xl xl:text-3xl">LEAVE REQUEST FORM</h1> */}
//               <h1 className=" p-4 flex items-center justify-center text-5xl italic">~ Leave Request Form</h1>

//             </div>
//           </div>
        
//         <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
//           {/* <div className="mx-auto mb-4 h-64 w-64">
//             <img className='rounded-full' src='/PublicHolidaysImages/create-class-isolated-cartoon-vector-illustrations_107173-22810.webp' alt="Holiday Screenshot" />
//           </div> */}
//           <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
//             <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="name">Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="Name" required="" /><span className="my-2 block"></span></div>
//             <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="empid">Employee ID</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="EmpID" required="" /><span className="my-2 block"></span></div>

            
//             <div className="mb-4">
//               <label className="mb-2 block text-sm font-bold" htmlFor="country">
//                 Country
//               </label>
//               {/* Responsive Country Options */}
//               <div className="sm:hidden">
//                 <select
//                   className="shadow-sm w-full cursor-pointer appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//                   id="country"
//                   required
//                 >
//                   <option value="IN">India</option>
//                   <option value="CZ">Czech Republic</option>
//                   <option value="DE">Germany</option>
//                 </select>
//               </div>
//               <div className="hidden sm:block">
//                 <div className="flex space-x-3">
//                   <div className="flex-1">
//                     <select
//                       className="shadow-sm w-full cursor-pointer appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//                       id="country"
//                       required
//                     >
//                       <option value="IN">India</option>
//                       <option value="CZ">Czech Republic</option>
//                       <option value="DE">Germany</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>





            
//             <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="manager1">Manager 1</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="manager1" type="text" placeholder="Manager 1" required="" /></div>
//             <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="manager2">Manager 2</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="manager2" type="text" placeholder="Manager 2" required="" /></div>
//             <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="leaveType">Leave Type</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="leaveType" type="text" placeholder="Leave Type" required="" /></div>
            
//             <div className="mb-4">
//                 <label className="mb-2 block text-sm font-bold" htmlFor="fromDate">
//                     From Date
//                 </label>
//                 <input
//                     className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//                     id="fromDate"
//                     type="date"
//                     onChange={handleFromDateChange}
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="mb-2 block text-sm font-bold" htmlFor="numOfDays">
//                     Number of Days
//                 </label>
//                 <input
//                     className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//                     id="numOfDays"
//                     type="number"
//                     placeholder="Number of Days"
//                     onChange={handleNumOfDaysChange}
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="mb-2 block text-sm font-bold" htmlFor="toDate">
//                     To Date
//                 </label>
//                 <input
//                     className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//                     id="toDate"
//                     type="date"
//                     value={formData.toDate}
//                     readOnly
//                     required
//                 />
//             </div>
//             <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="leaveReason">Leave Reason (Optional)</label><textarea className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="leaveReason" placeholder="Leave Reason"></textarea></div>
            
//             <div className="flex items-center">
//               <div className="flex-1"></div>
//               <button className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold text-white" type="submit">Submit Request</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default page;




"use client"
import React, { useState, useEffect } from 'react';
import { holidayData } from '../../../../components/HolidayData';

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
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="mt-1 p-2 w-full border rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className="mt-1 p-2 w-full border rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
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
