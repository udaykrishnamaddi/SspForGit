// pages/EmployeeTable.js
"use client";

// pages/EmployeeTable.js
import React, { useState } from "react";

function getISOWeek(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const daysSinceStart = (date - startOfYear) / (24 * 60 * 60 * 1000);
  const ISOWeek = Math.ceil((daysSinceStart + startOfYear.getDay() + 1) / 7);
  return ISOWeek;
}

function generateRandomAttendance() {
  return Array.from({ length: 5 }, () => Math.random() > 0.5);
}

const EmployeeTable = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const previousWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));
  };

  const nextWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Dummy data, replace with your actual data
  const tableData = [
    { firstName: "John", lastName: "Doe", manager: "Manager A" },
    { firstName: "Jane", lastName: "Smith", manager: "Manager B" },
    { firstName: "Bob", lastName: "Johnson", manager: "Manager A" },
    { firstName: "Alice", lastName: "Williams", manager: "Manager C" },
    // Add more employee data as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto  m-2">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="m-10 p-5">First Name</th>
            <th className="m-10 p-5">Last Name</th>
            <th className="m-10 p-5">Manager</th>
            <th className="whitespace-nowrap">
              <div className="flex justify-between m-4">
                <button onClick={previousWeek}>&lt; Previous Week</button>
                <h2 className="text-xl font-semibold">
                  {currentWeek.toDateString()}
                </h2>
                <button onClick={nextWeek}>Next Week &gt;</button>
              </div>
              <div className="inline-block">
                Calender Week {getISOWeek(currentWeek)}
              </div>
              <div className="flex justify-between m-1 p-2">
              {daysOfWeek.map((day) => (
              <th key={day} className="whitespace-nowrap px-4 py-2">
                {day}
              </th>
              
            ))}
            </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tableData.map((employee, index) => {
            const attendanceData = generateRandomAttendance();
            return (
              <tr key={index}>
                <td className="border">{employee.firstName}</td>
                <td className="border">{employee.lastName}</td>
                <td className="border">{employee.manager}</td>
                <td className="whitespace-nowrap border">
                  <table className="mx-2">
                    <tbody>
                      <tr className="flex justify-between text-center w-[700px] ml-5 mb-3 mt-2 mr-5">
                        {attendanceData.map((status, dayIndex) => (
                          <td
                            key={dayIndex}
                            // className={
                            //   status ? "text-green-500" : "text-red-500"
                            // }
                            className={`${
                              status ? "text-green-500" : "text-red-500"
                            } border px-10 py-5`}
                            
                          >
                            {status ? "Present" : "Absent"}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
