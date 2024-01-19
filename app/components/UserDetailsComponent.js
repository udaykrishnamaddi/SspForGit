import React from 'react';

const UserDetailsComponent = () => {
  return (
    <div className='m-8 w-full' style={{ display: 'flex', flexDirection: 'column',  }}>
      {/* Full-width container */}
      <br/>
      <h3 className=' text-3xl font-bold text-center text-left mb-8'>About Me</h3>
      <div className=" p-6 hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl relative">
        {/* row1 */}
        <div className="mb-4">
          <img
            src="/UserImages/profile.png"
            alt="User"
            className="w-32 h-32 rounded-full mx-auto shadow-2xl"
          />
        </div>
        <br/>
        {/* Row 2: Employee details */}
        <div className="flex justify-center mb-4 mx-auto">
          <p className='mr-6 font-lead text-black'><strong>EmpName:</strong> Uday Krishna Maddi</p>
          <p className='mr-6 font-lead text-black'><strong>EmpID:</strong> 20071A6627</p>
          <p className='font-lead text-black'><strong>Role:</strong> Software Developer</p>
        </div>
        <br/>
        {/* Row 3: Contact information */}
        <div className="flex justify-center mx-auto">
          <p className='font-lead mr-6 text-black'><strong>Manager1:</strong> Mohan Krishna</p>
          <p className='font-lead mr-6 text-black'><strong>Manager2:</strong> Divya</p>
          <p className='font-lead text-black'><strong>Mobile Number:</strong> 7337228790</p>
        </div>
      </div>
      <br />
      <br/>
      
      {/* Three containers in the next row */}
      <p className='text-center font-bold text-3xl'>My leave history</p>
      <div className=" m-10 flex flex-wrap justify-center item-center p-4 rounded">

        {/* Container 1 */}
        <div className="flex-grow w-full sm:w-1/2 py-4">
          <div className="h-[14rem] w-[18rem] hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl relative ">
            {/* Leaves information inside Container 1 */}
            <div className="flex flex-col m-4">
              <p className='font-serif text-2xl mb-3 text-center'>CASUAL LEAVES HISTORY</p>
              <p className='text-left font-lead text-black mb-2'><strong>Assigned:</strong> 20</p>
              <p className='text-left font-lead text-black mb-2'><strong>Leaves Taken:</strong> 15</p>
              <p className='text-left font-lead text-black'><strong>Remaining:</strong> 5</p>
            </div>
          </div>
        </div>

        {/* Container 2 */}
        <div className="flex-grow w-full py-4 sm:w-1/2">
          <div className="h-[14rem] w-[18rem] hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl relative ">
            {/* Leaves information inside Container 2 */}
            <div className="flex flex-col m-4">
              <p className='font-serif text-2xl mb-3 text-center'>SICK LEAVES HISTORY</p>
              <p className='text-left font-lead text-black mb-2'><strong>Assigned:</strong> 20</p>
              <p className='text-left font-lead text-black mb-2'><strong>Leaves Taken:</strong> 15</p>
              <p className='text-left font-lead text-black'><strong>Remaining:</strong> 5</p>
            
            </div>
          </div>
        </div>

        {/* Container 3 */}
        <div className="flex-grow w-full  py-4">
          <div className="h-[14rem] w-[18rem] sm:w-[90%] hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl relative ">
            {/* Leaves information inside Container 3 */}
            <div className="flex flex-col m-4">
              <p className='font-serif text-2xl mb-3 text-center'>TOTAL LEAVES HISTORY</p>
              <p className='text-left font-lead text-black mb-2'><strong>Assigned:</strong> 20</p>
              <p className='text-left font-lead text-black mb-2'><strong>Earned:</strong> 5</p>
              <p className='text-left font-lead text-black mb-2'><strong>Leaves Taken:</strong> 15</p>
              <p className='text-left font-lead text-black'><strong>Remaining:</strong> 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;