// components/layout/Sidebar.tsx
"use client";

import React, { useRef ,useState} from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useAppSelector } from "../Redux/hooks";



// define a NavItem prop

// add NavItem prop to component prop

const Sidebar = ({ showSidebar,setShowSidebar, navItems = defaultNavItems }) => {
  const user = useAppSelector((state)=>state.roleRc.role)
    const updatedNavItems = (user === 'Admin' || user ==='Manager')
    ? [
        ...navItems,
        {
          label: 'Pending Approvals',
          path: '/Home/Services/VacationManagement/PendingApprovals',
          image : "/SideBarIcons/wall-clock.png"
        },
      ]
    : navItems;
  return (
    <div
      className={classNames({
        // "sm:mt-10":true,
        "flex flex-col justify-between": true, // layout
        "bg-gray-800 text-zinc-50": true, // colors
        "md:w-[300px] md:sticky md:top-16 z-20 fixed": true, // positioning
        "h-full":true,
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !showSidebar, //hide sidebar to the left when closed
      })}
      
    >

      <nav className="md:h-screen md:sticky top-0 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {updatedNavItems.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
              
                <li
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2 mb-3": true, //self style
                  })}
                >
                  <div className="flex gap-4 items-center">
                    
                      <div className="w-8 h-8 z-1">
                        <img src={item.image}  />

                      </div>
                      <div>
                    
                        <span>{item.label}</span>
                      </div>

                  </div>

                  {/* {item.label} */}
                </li>
              
              </Link>
            );
          })}
        </ul>
      </nav>
      
    </div>
  );
};
export default Sidebar;