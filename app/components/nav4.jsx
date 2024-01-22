"use client";

// components/Navbar.js
import React, { useState,useEffect ,useRef} from "react";
import Link from "next/link";
import Nav3 from "./nav3";
import {useAppSelector} from "../Redux/hooks"

const Navbar = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  // const [role,setRole] = useState("Admin");
  // const [userRole, setuserRole] = useState("Admin");
  const role=useAppSelector((state)=>state.roleRc.role)
  const [profile, setProfile] = useState(false);
  const [services, setServices] = useState(false);

  const ref = useRef(null);
  const r1=useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setProfile(false)
      }
      if (!r1.current?.contains(event.target)) {
        setServices(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref,r1]);
  
  const toggleProfile = () => {
    if(services){
      setServices(!services)
    }
    setProfile(!profile);
  };

  const toggleServices = () => {
    if(profile){
      setProfile(!profile)
    }
    setServices(!services);
    // onClick={() => { setIsAnimated(!isAnimated);}}
  };

  return (
    <nav className="bg-[#274e7f] p-4 sticky top-0 z-50">
    <div className="container relative mx-auto flex justify-between items-center">
      {/* Menu Toggle for small screens */}
      <div className="md:hidden" >
        <Nav3 />
      </div>

    
      <div className="w-1/2 flex items-center">
        <Link legacyBehavior href="/Home">
        <a className="group text-white text-2xl  font-bold font-sans transition-all duration-300 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-[#4fbfa8] to-[#4fbfa8] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Im-Par
              </span> 
              
            </a>
        </Link>
      </div>

      <div className="w-1/4 flex justify-around items-center">
        <div className="hidden md:flex space-x-4">
          <Link legacyBehavior href="/Home">
            <a className="group text-white  transition-all duration-300 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-[#4fbfa8] to-[#4fbfa8] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home 
              </span> 
              
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a
              className="group text-white relative flex transition-all duration-300 ease-in-out"
              onClick={toggleServices}
              ref={r1}
            >
              <span class="bg-left-bottom bg-gradient-to-r from-[#4fbfa8] to-[#4fbfa8] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Services 
              </span> 
              <svg
                className={`w-3 h-3 mt-2 ml-1 transform ${services ? 'rotate-180' : 'rotate-0'} transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              
              </svg>




              {services && (
                <div className="origin-top-left absolute -left-10 mt-8 w-28 md:w-[13rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="submenu"
                  >
                    <Link legacyBehavior href="/Home/Services/VacationManagement">
                    <a
                     
                      className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
                      role="menuitem"
                    >
                      Leave Management
                    </a>
                    </Link>
                    {(role == "Admin" || role == "Manager")?
                    (
                      <Link legacyBehavior href="/Home/Services/Service2/EmpManag/EmpList">
                      <a
                       
                        className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
                        role="menuitem"
                      >
                        Employee Management
                      </a>
                      </Link>
                    )
                
                    :(
                      <Link legacyBehavior href="/Home/Services/Service2/MyTeam/MyTeamList">
                      <a
                       
                        className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
                        role="menuitem"
                      >
                        My Functional Team
                      </a>
                      </Link>
                    )
                    
                  }
                    
                    {/* <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      + Add new
                    </a> */}
                  </div>
                </div>
              )}

              </a>
            </Link>
          {/* {isAdmin && (
            <Link legacyBehavior href="/Home/Admin">
              <a  className="text-white">{userRole}</a>
            </Link>
          )} */}
          {/* {role=="Admin" ? (
            <Link legacyBehavior href="/Home/Admin/EmpManag">
              <a  className="text-white">{role}</a>
            </Link>
          ): (
            <Link legacyBehavior href="/Home/Admin/MyTeam">
              <a  className="text-white">My Team</a>
            </Link>
          )} */}
        </div>

        {/* Profile Image */}
        <div className="flex items-center">
          <Link legacyBehavior href="#">
            <a className="text-white relative" ref={ref} onClick={toggleProfile}>
              <img
                src="/homeImages/UserDetails.jpg" // Replace with your profile image URL
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              {profile && (
                <div className="z-50 origin-top-left absolute -left-10 mt-2 w-28 md:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="submenu"
                  >
                    <Link legacyBehavior href="/Home/Profile/ChangePassword">
                    <a  
                      className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
                      role="menuitem"
                    >
                      Change Password
                    </a>
                    </Link>
                    <Link legacyBehavior href="/">
                    <a
                    
                      className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
                      role="menuitem"
                    >
                      LogOut
                    </a>
                    </Link>
                  </div>
                </div>
              )}
            </a>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
    </div>
  </nav>
  

    
    // <nav className="bg-[#274e7f] p-4 sticky top-0 z-50">
    //   <div className="container relative mx-auto flex justify-between items-center">
    //     {/* Menu Toggle for small screens */}
    //     <div className="md:hidden" >
    //       <Nav3 />
    //     </div>

    //     {/* Brand Logo */}
    //     <div className="w-1/2 flex items-center">
    //       <Link legacyBehavior href="/Home">
    //         <a className="text-white text-2xl font-sans font-bold">Im-Par</a>
    //       </Link>
    //     </div>
        
    //     <div className="w-1/4 flex justify-around items-center">
    //       <div className="hidden md:flex space-x-4">
    //         <Link legacyBehavior href="/Home">
    //           <a className="group text-white  transition-all duration-300 ease-in-out">
    //           {/* <span class="bg-left-bottom bg-gradient-to-r from-[#4fbfa8] to-[#4fbfa8] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    //               Home
    //             </span> */}
    //             Home
    //           </a>
    //         </Link>

    //         <Link legacyBehavior href="#" >
    //           <a
    //             className="text-white relative"
    //             onClick={toggleServices}
    //             ref={r1}
    //           >
               
    //             <a className="group text-white  transition-all duration-300 ease-in-out">
    //               {/* <span class="bg-left-bottom bg-gradient-to-r from-[#4fbfa8] to-[#4fbfa8] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    //                   Services
    //                 </span> */}
    //                 Services
    //             </a>
    //             {/* <svg
    //               className={`w-3 h-3 mt-2 ml-1 transform ${services ? 'rotate-180' : 'rotate-0'} transition-transform`}
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    //             </svg>
    //                */}
         
    //             {services && (
                  
    //               <div className="origin-top-left absolute -left-10 mt-2 w-28 md:w-[12.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
    //                 <div
    //                   className="py-1"
    //                   role="menu"
    //                   aria-orientation="vertical"
    //                   aria-labelledby="submenu"
    //                 >
    //                   <Link legacyBehavior href="/Home/Services/VacationManagement">
    //                   <a
                       
    //                     className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75] "
    //                     role="menuitem"
    //                   >
    //                     Leave Management
    //                   </a>
    //                   </Link>

    //                   {(role == "Admin" || role == "Manager")?
    //                   (
    //                     <Link legacyBehavior href="/Home/Services/Service2/EmpManag/EmpList">
    //                     <a
                         
    //                       className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
    //                       role="menuitem"
    //                     >
    //                       Employee Management
    //                     </a>
    //                     </Link>
    //                   )
                  
    //                   :(
    //                     <Link legacyBehavior href="/Home/Services/Service2/MyTeam/MyTeamList">
    //                     <a
                         
    //                       className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
    //                       role="menuitem"
    //                     >
    //                       My Functional Team
    //                     </a>
    //                     </Link>
    //                   )
                      
    //                 }
    //                   {/* <a
    //                     href="#"
    //                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //                     role="menuitem"
    //                   >
    //                     + Add new
    //                   </a> */}
    //                 </div>
    //               </div>
    //             )}

    //             </a>
    //           </Link>
    //         {/* {isAdmin && (
    //           <Link legacyBehavior href="/Home/Admin">
    //             <a  className="text-white">{userRole}</a>
    //           </Link>
    //         )} */}
    //         {/* {role=="Admin" ? (
    //           <Link legacyBehavior href="/Home/Admin/EmpManag">
    //             <a  className="text-white">{role}</a>
    //           </Link>
    //         ): (
    //           <Link legacyBehavior href="/Home/Admin/MyTeam">
    //             <a  className="text-white">My Team</a>
    //           </Link>
    //         )} */}
    //       </div>

    //       {/* Profile Image */}
    //       <div className="flex items-center">
    //         <Link legacyBehavior href="#">
    //           <a className="text-white relative" ref={ref} onClick={toggleProfile}>
    //             <img
    //               src="/homeImages/UserDetails.jpg" // Replace with your profile image URL
    //               alt="Profile"
    //               className="w-8 h-8 rounded-full"
    //             />
    //             {profile && (
    //               <div className="z-50 origin-top-left absolute -left-10 mt-2 w-28 md:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //                 <div
    //                   className="py-1"
    //                   role="menu"
    //                   aria-orientation="vertical"
    //                   aria-labelledby="submenu"
    //                 >
    //                   <Link legacyBehavior href="/Home/Profile/ChangePassword">
    //                   <a  
    //                     className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
    //                     role="menuitem"
    //                   >
    //                     Change Password
    //                   </a>
    //                   </Link>
    //                   <Link legacyBehavior href="/">
    //                   <a
                      
    //                     className="rounded-xl m-1 block px-4 py-2 hover:font-bold text-sm text-gray-700 hover:bg-gray-100 hover:text-[#274E75]"
    //                     role="menuitem"
    //                   >
    //                     Log Out
    //                   </a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             )}
    //           </a>
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Dropdown Menu for small screens */}
    //   </div>
    // </nav>
    
  );
};

export default Navbar;
