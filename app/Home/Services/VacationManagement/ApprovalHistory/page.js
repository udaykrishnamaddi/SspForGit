// pages/index.js
'use client'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa'; // Import the calendar icon

const Page = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    // Hide the date picker after selection
    setShowDatePicker(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Date Range Picker</h1>
        
        <div className="flex justify-center space-x-4">
          {/* Start Date Input */}
          <div className="flex flex-col items-center">
            <label className="text-sm mb-2">Start Date</label>
            <input
              type="text"
              value={startDate ? startDate.toLocaleDateString() : ''}
              readOnly
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* End Date Input */}
          <div className="flex flex-col items-center">
            <label className="text-sm mb-2">End Date</label>
            <input
              type="text"
              value={endDate ? endDate.toLocaleDateString() : ''}
              readOnly
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Calendar Icon Button */}
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            <FaCalendar />
          </button>

          {/* Date Picker */}
          {showDatePicker && (
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
