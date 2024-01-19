// components/ButtonWithDropdown.js
"use client";
import React, { useState,useEffect,useRef } from "react";
import Link from "next/link";
import { useAppSelector } from "../Redux/hooks";

const ButtonWithDropdown = () => {
  const role=useAppSelector((state)=>state.roleRc.role)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInternalDropdownOpen, setIsInternalDropdownOpen] = useState(false);

  const r2=useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!r2.current?.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [r2]);

  const toggleDropdown = () => {
    
    if(isInternalDropdownOpen){
      setIsInternalDropdownOpen(!isInternalDropdownOpen);
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleInternalDropdown = () => {
    setIsInternalDropdownOpen(!isInternalDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left bg-black ml-5">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:border-primary-dark active:bg-primary-dark"
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        
      </button>
      {isDropdownOpen && (
        <div ref={r2} className="z-50 origin-top-right absolute left-0 mt-0 w-28 md:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link legacyBehavior href="/Home" >
            <a
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Home
            </a>
            </Link>
            
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={toggleInternalDropdown}
            >
              Services &raquo;
              {isInternalDropdownOpen && (
                <div className="origin-top-left absolute left-7 mt-2 w-28 md:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="submenu"
                  >
                    <Link legacyBehavior href="/Home/Services/VacationManagement">
                    <a
                      
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Leave Management
                    </a>
                    </Link>
                    {/* <Link legacyBehavior href="#">
                    <a
                      
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      + Add new
                    </a>
                    </Link> */}
                  </div>
                </div>
              )}
            </a>
            
            {role=="Admin" ? (
              <Link legacyBehavior href="/Home/Admin/EmpManag">
              <a
               
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {role}
              </a>
              </Link>
            ):(
              <Link legacyBehavior href="/Home/Admin/MyTeam">
              <a
               
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                My Team
              </a>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithDropdown;
