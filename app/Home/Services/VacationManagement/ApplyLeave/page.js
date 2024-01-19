


"use client"
import React from 'react';
import { useState } from 'react';

const page = () => {
    const [formData, setFormData] = useState({
        fromDate: '',
        numOfDays: '',
        toDate: '',
      });
    
      const handleFromDateChange = (e) => {
        const fromDate = e.target.value;
        setFormData((prevData) => ({
          ...prevData,
          fromDate,
        }));
        updateToDate(fromDate, formData.numOfDays);
      };
    
      const handleNumOfDaysChange = (e) => {
        const numOfDays = e.target.value;
        setFormData((prevData) => ({
          ...prevData,
          numOfDays,
        }));
        updateToDate(formData.fromDate, numOfDays);
      };
    
      const updateToDate = (fromDate, numOfDays) => {
        if (fromDate && numOfDays) {
          const fromDateObj = new Date(fromDate);
          const toDateObj = new Date(fromDateObj.setDate(fromDateObj.getDate() + parseInt(numOfDays)));
          const toDate = toDateObj.toISOString().split('T')[0];
          setFormData((prevData) => ({
            ...prevData,
            toDate,
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
      };
  return (
    <div>
      <div className="bg-white font-sans text-gray-900">
          <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <div className="mx-2 py-6 text-center md:mx-auto md:w-2/3 md:py-6">
              {/* <h1 className="text-3xl italic leading-loose sm:text-5xl xl:text-3xl">LEAVE REQUEST FORM</h1> */}
              <h1 className=" p-4 flex items-center justify-center text-5xl italic">~ Leave Request Form</h1>

            </div>
          </div>
        
        <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
          {/* <div className="mx-auto mb-4 h-64 w-64">
            <img className='rounded-full' src='/PublicHolidaysImages/create-class-isolated-cartoon-vector-illustrations_107173-22810.webp' alt="Holiday Screenshot" />
          </div> */}
          <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
            <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="name">Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="Name" required="" /><span className="my-2 block"></span></div>
            <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="empid">Employee ID</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="EmpID" required="" /><span className="my-2 block"></span></div>

            
            <div className="mb-4">
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





            
            <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="manager1">Manager 1</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="manager1" type="text" placeholder="Manager 1" required="" /></div>
            <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="manager2">Manager 2</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="manager2" type="text" placeholder="Manager 2" required="" /></div>
            <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="leaveType">Leave Type</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="leaveType" type="text" placeholder="Leave Type" required="" /></div>
            
            <div className="mb-4">
                <label className="mb-2 block text-sm font-bold" htmlFor="fromDate">
                    From Date
                </label>
                <input
                    className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                    id="fromDate"
                    type="date"
                    onChange={handleFromDateChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="mb-2 block text-sm font-bold" htmlFor="numOfDays">
                    Number of Days
                </label>
                <input
                    className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                    id="numOfDays"
                    type="number"
                    placeholder="Number of Days"
                    onChange={handleNumOfDaysChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="mb-2 block text-sm font-bold" htmlFor="toDate">
                    To Date
                </label>
                <input
                    className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                    id="toDate"
                    type="date"
                    value={formData.toDate}
                    readOnly
                    required
                />
            </div>
            <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="leaveReason">Leave Reason (Optional)</label><textarea className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="leaveReason" placeholder="Leave Reason"></textarea></div>
            
            <div className="flex items-center">
              <div className="flex-1"></div>
              <button className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold text-white" type="submit">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page;
