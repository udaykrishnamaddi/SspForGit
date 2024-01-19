// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import {signIn, signOut, useSession} from 'next-auth/react';
// import Dropdown from "./Dropdown";
// import '@styles/global.css'
// const Nav = () => {
//     const dropdownItems = [
//         { label: 'Leave Management', href: "/LeaveManagement" },
//         { label: 'Attendance', href: '/option2' },
//         { label: 'Personal Requests', href: '/option2' },

//         { label: 'Application Status', href: '/option2' },
//         // Add more options as needed
//     ];


//     const isUserLoggedIn = true;

//   return (
//     <nav className="flex-between w-full mb-6 pt-3 ">
//         <Link href="/Home" className="flex gap-2">
//             <p className="text-3xl ">Im-Par</p>
//         </Link>

//         {/* <Link href="/" className="flex gap-2">
//             <p className="logo_text"></p>

//         </Link> */}


//         <div className="sm:flex">
//             {isUserLoggedIn ? (
//                 <div className="flex gap-3 md:gap-5">
//                     <Link href="/Home" className="outline_btn">
//                         Home
//                     </Link>
//                     <Link href="/Home/Services" className="outline_btn">
//                         Services
//                     </Link>
//                     {/* <Link href="/Home/application" className="outline_btn">
//                         My applications
//                     </Link> */}

                    
                    
//                     <Link href="/Home/Services" className="outline_btn">
//                         Profile
//                     </Link>
                    
                    


//                 </div>

//             ) : (
//                 <>

//                 </>
//             )}

//         </div>


//     </nav>
//   )
// }

// export default Nav

