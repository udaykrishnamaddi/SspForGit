"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import InputWithLabel from '../components/InputWithLabel.js'
import Link from 'next/link.js';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const router = useRouter()
  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Submitting:', { email, password });

  };
  // bg-[url("/loginPageImages/loginbg.png")] 
  return (
    <div className='bg-[#274e7f] h-full w-full'>
    <div className='flex justify-center items-center  bg-cover h-screen g-center bg-repeat-y'>
        <div className="w-[60%]  text-gray-900 flex justify-center">
        <div className="sm:m-6 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-[45%] p-6 sm:p-2 mb-4">
                <div>
                    <img src="/loginPageImages/WhatsApp Image 2024-01-10 at 11.05.13.jpeg"
                        className="w-mx-auto pt-5" />
                </div>
                  <div className="mt-12 flex flex-col items-center">
                    <div className="w-full flex-1 mt-6">

                        <div className="mx-auto max-w-xs">

                              <InputWithLabel
                                  id="email"
                                  type="text"
                                  value={email}
                                  onChange={handleEmailChange}
                                  placeholder="Email address"
                                  label="Email Address"
                                  />
                      
                              <InputWithLabel
                                  id="password"
                                  type="password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                  placeholder="Password"
                                  label="Password"
                                  />
                            

                            <Link href="/Home">
                            <button
                                className="mt-5 tracking-wide font-semibold bg-[#4fbfa8] text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                  <span className="ml-">
                                      Log In
                                  </span>
                            </button>
                            </Link>
                            <p className="mt-6 text-xs text-gray-600 text-center">
                                I agree to abide by Im-Par
                                <a href="#" className="mx-1 border-b border-gray-500 border-dotted">
                                    Terms of Service 
                                </a>
                                and its
                                <a href="#" className="ml-1 border-b border-gray-500 border-dotted">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
};

export default Login;

