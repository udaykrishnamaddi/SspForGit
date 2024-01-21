"use client"
import React, {useState} from 'react';
import '../../styles/global.css'
import { Inter } from 'next/font/google'
import { Poppins, Rubik_Burned, Dancing_Script  } from 'next/font/google'

const UserDetailsComponent = () => {
  const [agreeToShareBirthday, setAgreeToShareBirthday] = useState(false);
  return (
    <div className='m-8 w-full' style={{ display: 'flex', flexDirection: 'column',  }}>
      
      {/* Full-width container */}
      <br/>
      
      <h3 className=' text-3xl font-sans text-center mb-8'>User Details</h3>
      



      <div className="flex p-8 hover:scale-105 transition duration-500 cursor-pointer shadow-2xl rounded-2xl w-full">
        {/* Left Side */}
        <div className="flex flex-col pr-8">
          <div className="mb-4">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className='text-black text-lg'>First Name:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">John</span>
          </div>
          <div className="mb-4">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className="text-black text-lg">Last Name:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">Doe</span>
          </div>
          <div className="mb-4">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className="text-black text-lg">Role:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">Software Developer</span>
          </div>
          <div className="">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className="text-black text-lg">Seniority:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">Junior</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col ml-auto">
          
          <div className="mb-4">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className="text-black text-lg">City Office:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">New York</span>
          </div>
          
          <div className="mb-4">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className="text-black text-lg">Organizational Lead:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">Jane Smith</span>
          </div>
          
          <div className="mb-4">
            <label style={{ fontFamily: 'Open Sans', fontWeight: 'bold'}} className="text-black text-lg">My Birthday:</label>
            <span style={{ fontFamily: 'Open Sans'}} className="text-black text-lg ml-2">January 1, 1990</span>
          </div>

          {/* Checkbox for Birthday Sharing */}
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="birthdayCheckbox"
              className="form-checkbox text-blue-500"
              checked={agreeToShareBirthday}
              onChange={() => setAgreeToShareBirthday(!agreeToShareBirthday)}
            />
            <label htmlFor="birthdayCheckbox" className="ml-2 text-gray-600">
              I agree to share my birthday with all Im-Par employees
            </label>
          </div>
        </div>
      </div>
      <br />
      <br/>
      
      {/* Three containers in the next row */}
      
      <div className="m-10 container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Box 1 */}
          <div className="m-3 p-2 hover:scale-105 transition duration-500 cursor-pointer object-cover shadow-2xl rounded-2xl">
            <div className="flex flex-col m-3">
              <p className='font-sans font-bold text-lg mb-3 text-center'>Total Leave</p>
              <p className='font-sans text-center'>2024 in days</p>
              <div className=' flex items-center justify-center'>
                <p style={{ fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '5rem', color: '#4FBFA8' }}>12</p>
              </div>
              
            </div>
          </div>
          
          {/* Box 2 */}
          
          <div className="m-3 p-2 hover:scale-105 transition duration-500 cursor-pointer object-cover shadow-2xl rounded-2xl">
            <div className="flex flex-col m-3">
              <p className='font-sans font-bold text-lg mb-3 text-center'>Recreational Leave</p>
              <p className='font-sans text-center'>Total 2024 in days</p>
              <div className=' flex items-center justify-center'>
                <p style={{ fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '5rem', color: '#4FBFA8' }}>8/20</p>
              </div>
             
            </div>
          </div>
          
          {/* Box 3 */}
          
          <div className="m-3 p-2 hover:scale-105 transition duration-500 cursor-pointer object-cover shadow-2xl rounded-2xl">
            <div className="flex flex-col m-3">
              <p className='font-sans font-bold text-lg mb-3 text-center'>Sick Leave</p>
              <p className='font-sans text-center'>Total 2024 in days</p>
              <div className=' flex items-center justify-center'>
                <p style={{ fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '5rem', color: '#4FBFA8' }}>4</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;