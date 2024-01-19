

"use client"
import React, { useState } from 'react';

const leaveData = [
  {
    empName: 'Ram',
    leaveType: 'Vacation',
    fromDate: '2024-01-16',
    toDate: '2024-01-20',
    leaveCount: '5 days',
    status: 'Pending',
    remark: '',
  },
  {
    empName: 'Surya',
    leaveType: 'Vacation',
    fromDate: '2024-01-05',
    toDate: '2024-01-15',
    leaveCount: '10 days',
    status: 'Pending',
    remark: '',
  },
  {
    empName: 'Arjun',
    leaveType: 'Sick Leave',
    fromDate: '2024-01-15',
    toDate: '2024-01-20',
    leaveCount: '6 days',
    status: 'Pending',
    remark: '',
  },
];

const PendingApprovalTable = () => {
  const [data, setData] = useState([...leaveData]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [sortByStatus, setSortByStatus] = useState(null);
  const [isActionDisabled, setIsActionDisabled] = useState(false); 
  const [disabledRows, setDisabledRows] = useState([]); 

  const handleAction = (index, action) => {
    if (disabledRows.includes(index)) return;
    // if (isActionDisabled) return;
    const newData = [...data];
    newData[index].status = action === 'approve' ? 'Approved' : 'Rejected';
    setData(newData);
    setSelectedRowIndex(index);
    // setIsActionDisabled(true);
    setDisabledRows((prevDisabledRows) => [...prevDisabledRows, index]);
  
  };

  const handleRemarkChange = (index, value) => {
    const newData = [...data];
    newData[index].remark = value;
    setData(newData);
  };

  const submitRemark = (index) => {
    console.log(`Submitting remark for index ${index}: ${data[index].remark}`);
    setSelectedRowIndex(null);
  };

  const sortByStatusHandler = (status) => {
    setSortByStatus(status);
    const sortedData = data.sort((a, b) => {
      if (status === 'Approved') {
        return a.status === 'Approved' ? -1 : 1;
      } else if (status === 'Rejected') {
        return a.status === 'Rejected' ? -1 : 1;
      } else if (status === 'Pending') {
        return a.status === 'Pending'? -1 : 1;
      }
      return 0;
    });
    setData([...sortedData]);
  };

  const renderRemarkInput = (index) => {
    if (selectedRowIndex === index) {
      return (
        <div className="flex items-center justify-center mt-2">
          <input
            type="text"
            placeholder="Enter your remark..."
            value={data[index].remark}
            onChange={(e) => handleRemarkChange(index, e.target.value)}
            className="border bg-gray-200 p-1 rounded"
          />
          <button
            onClick={() => submitRemark(index)}
            className="bg-blue-500 text-white py-1 px-2 ml-2 rounded"
          >
            Submit
          </button>
          

        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="m-8 mt-5 mb-2">
        <button
          onClick={() => sortByStatusHandler('Approved')}
          className="bg-green-500 text-white py-1 px-2 rounded mr-2"
        >
          Sort Approved
        </button>
        <button
          onClick={() => sortByStatusHandler('Rejected')}
          className="bg-red-500 text-white py-1 px-2 rounded m-5"
        >
          Sort Rejected
        </button>
        <button
            onClick={() => sortByStatusHandler('Pending')}
            className="bg-yellow-500 text-white py-1 px-2 rounded"
          >
              Sort Pending
        </button>
       
      </div>
    <div className="m-8 overflow-x-auto">
      
      
      <table className=" min-w-full bg-white border">
        <thead className='bg-gray-700'>
          <tr>
            <th className="py-2 px-4 border-b text-white">EmpName</th>
            <th className="py-2 px-4 border-b text-white">Leavetype</th>
            <th className="py-2 px-4 border-b text-white">From Date</th>
            <th className="py-2 px-4 border-b text-white">To Date</th>
            <th className="py-2 px-4 border-b text-white">Leave Count</th>
            <th className="py-2 px-4 border-b text-white">Status</th>
            <th className="py-2 px-4 border-b text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((leave, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="text-center py-2 px-4 border-b">
                  <strong>{leave.empName}</strong>
                </td>
                <td className="text-center py-2 px-4 border-b">{leave.leaveType}</td>
                <td className="text-center py-2 px-4 border-b">{leave.fromDate}</td>
                <td className="text-center py-2 px-4 border-b">{leave.toDate}</td>
                <td className="text-center py-2 px-4 border-b ">{leave.leaveCount}</td>
                <td className="text-center py-2 px-4 border-b">{leave.status}</td>
                {/* <td className="text-center py-2 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => handleAction(index, 'approve')}
                      className={`${
                        (leave.status === 'Approved' || isActionDisabled)
                          ? 'bg-green-500 text-white cursor-not-allowed'
                          : 'bg-green-500 text-white'
                      } py-1 px-2 rounded`}
                      disabled={leave.status === 'Approved'}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(index, 'reject')}
                      className={`${
                        (leave.status === 'Rejected' || isActionDisabled)
                          ? 'bg-red-500 text-white cursor-not-allowed'
                          : 'bg-red-500 text-white'
                      } py-1 px-2 rounded ml-2`}
                      disabled={leave.status === 'Rejected'}
                    >
                      Reject
                    </button>
                    
                  </div>
                </td> */}
                <td className="text-center py-2 px-4 border-b">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => handleAction(index, 'approve')}
                        className={`${
                          (leave.status === 'Approved' || disabledRows.includes(index)) ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-green-500 text-white'
                        } py-1 px-2 rounded`}
                        disabled={leave.status === 'Approved' || disabledRows.includes(index)}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(index, 'reject')}
                        className={`${
                          (leave.status === 'Rejected' || disabledRows.includes(index)) ? 'bg-red-500 text-white cursor-not-allowed' : 'bg-red-500 text-white'
                        } py-1 px-2 rounded ml-2`}
                        disabled={leave.status === 'Rejected' || disabledRows.includes(index)}
                      >
                        Reject
                      </button>
                    </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">{renderRemarkInput(index)}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PendingApprovalTable;

