// pages/change-password.js
'use client'
import Link from 'next/link';
// import { useState } from 'react';

// const ChangePassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [verifyPassword, setVerifyPassword] = useState('');

//   const checkPasswordRules = () => {
//     // Define password rules
//     const hasMinimumLength = newPassword.length >= 8;
//     const hasAlphabet = /[a-zA-Z]/.test(newPassword);
//     const hasNumber = /\d/.test(newPassword);

//     return {
//       hasMinimumLength,
//       hasAlphabet,
//       hasNumber,
//     };
//   };

//   const passwordRules = checkPasswordRules();

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-md p-8 bg-white rounded-md shadow-md">
//         <h2 className="text-2xl font-bold mb-6">Change Your Password</h2>

//         <div className="flex">
//           {/* Password Form */}
//           <div className="flex-1 pr-4">
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                   New Password
//                 </label>
//                 <input
//                   type="password"
//                   id="newPassword"
//                   className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="verifyPassword" className="block text-sm font-medium text-gray-700">
//                   Verify Password
//                 </label>
//                 <input
//                   type="password"
//                   id="verifyPassword"
//                   className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   value={verifyPassword}
//                   onChange={(e) => setVerifyPassword(e.target.value)}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//               >
//                 Change Password
//               </button>
//             </form>
//           </div>

//           {/* Password Rules */}
//           <div className="flex-1 pl-4">
//             <h3 className="text-xl font-bold mb-4">Password Must Contain:</h3>
//             <ul className="list-disc pl-6">
//               <li className={passwordRules.hasMinimumLength ? 'text-green-500' : 'text-red-500'}>
//                 At least 8 characters
//               </li>
//               <li className={passwordRules.hasAlphabet ? 'text-green-500' : 'text-red-500'}>
//                 Should have an alphabet
//               </li>
//               <li className={passwordRules.hasNumber ? 'text-green-500' : 'text-red-500'}>
//                 Should have a number
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;

// pages/change-password.js
import { useState } from 'react';


const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  

  const checkPasswordRules = () => {
    const hasMinimumLength = newPassword.length >= 8;
    const hasAlphabet = /[a-zA-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);

    return {
      hasMinimumLength,
      hasAlphabet,
      hasNumber,
    };
  };

  const passwordRules = checkPasswordRules();

  const handlePasswordChange = () => {
    // Check if new password and verify password match
    if (newPassword !== verifyPassword) {
      setPasswordMatchError("Passwords don't match");
      setPasswordUpdated(false);
    } else {
      setPasswordMatchError('');
      setPasswordUpdated(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Change Your Password</h2>

        <div className="flex">
          <div className="flex-1 pr-4">
            <form>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="verifyPassword" className="block text-sm font-medium text-gray-700">
                  Verify Password
                </label>
                <input
                  type="password"
                  id="verifyPassword"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  onBlur={handlePasswordChange}
                />
                {passwordMatchError && (
                  <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Change Password
              </button>
            </form>
          </div>

          <div className="flex-1 pl-4">
            <h3 className="text-xl font-bold mb-4">Password Rules:</h3>
            <ul className="list-disc pl-6">
              <li className={passwordRules.hasMinimumLength ? 'text-green-500' : 'text-red-500'}>
                At least 8 characters
              </li>
              <li className={passwordRules.hasAlphabet ? 'text-green-500' : 'text-red-500'}>
                Should have an alphabet
              </li>
              <li className={passwordRules.hasNumber ? 'text-green-500' : 'text-red-500'}>
                Should have a number
              </li>
            </ul>
          </div>
        </div>

        {/* Password Updated Success Message */}
        {passwordUpdated && (
          <div className="mt-6 p-4 bg-green-100 rounded-md text-green-700">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm-.707 13.293a1 1 0 010-1.414L8.586 10 10 8.586l1.414 1.414a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-bold">Password Updated</p>
                <p>Use your new password to login.</p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="../../../Login"
                className="text-blue-500 underline hover:text-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Go to Login Page
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePassword

