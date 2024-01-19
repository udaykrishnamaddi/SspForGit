// components/LeaveTable.js
import React from 'react';
import styles from '../../styles/table.css';
import { useTable } from '@nextui-org/react';
const LeaveHistoryTable = ({ data }) => {
  return (
    <div className=' overflow-x-auto'>
      {/* <h1>Hi leavegs</h1> */}
      
          
          <table className='w-full min-w-full divide-y divide-gray-200'>
            <thead className=''>
              <tr className='bg-gray-700'>
                <th scope='col' className="px-6 py-3 border-b  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Leave Type</th>
                <th scope='col' className="px-6 py-3 border-b  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">From Date</th>
                <th scope='col' className="px-6 py-3 border-b  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">To Date</th>
                <th scope='col' className="px-6 py-3 border-b  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Leave Count</th>
                <th scope='col' className="px-6 py-3 border-b  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Status</th>
                <th scope='col' className="px-6 py-3 border-b  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Remarks</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {data.map((leave) => (
                <tr className='border-b' key={leave.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{leave.leaveType}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{leave.fromDate}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{leave.toDate}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{leave.leaveCount}</td>
                  <td className="px-6 bg-green-500 rounded-lg py-4 whitespace-no-wrap">{leave.status}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{leave.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          
    </div>

        
  );
};

export default LeaveHistoryTable;
