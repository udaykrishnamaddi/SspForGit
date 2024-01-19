// pages/index.js
import React from 'react';
import LeaveHistoryTable from '../../../../components/LeaveHistoryTable'
// import LeaveTemp from '../../../../components/LeaveTemp'
const data = [
  // Your leave data here
  {
    id: 1,
    leaveType: 'Vacation',
    fromDate: '2024-01-15',
    toDate: '2024-01-20',
    leaveCount: 6,
    status: 'Accepted',
    remarks: 'Enjoy your vacation!',
  },
  
  // Add more leave entries as needed
];



const Home = () => {
  return (
    <div className='container mx-auto p-4'>
      {/* <h1>Leave Management System</h1> */}
      <h1 className="flex items-center justify-center text-2xl italic font-bold mt-8 mb-10">~ Check your leave status here.</h1>
      <div className="mx-auto mb-8 h-64 w-64">
      <img className='flex items-center justify-center h-64 w-64' src='/PublicHolidaysImages/push-notifications-concept-illustration_114360-4730.webp'></img>
      </div>
      
      <br/>
      
      <LeaveHistoryTable data={data} />
      {/* <LeaveTemp/> */}
    </div>
  );
};

export default Home;
