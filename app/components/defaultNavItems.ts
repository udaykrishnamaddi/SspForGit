import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./NavItem";

export const defaultNavItems: NavItem[] = [
  {
    label: "User Leave Details",
    path : "/Home/Services/VacationManagement/UserLeaveDetails",
    image : "/SideBarIcons/personal.png"
  },
  {
    label: "Apply for Leave",
    path : "/Home/Services/VacationManagement/ApplyLeave",
    image : "/SideBarIcons/google-forms.png"
  },
  {
    label: "Leave Status",
    path : "/Home/Services/VacationManagement/LeaveHistory",
    image : "/SideBarIcons/checklist.png"
  },
  {
    label: "Public Holidays",
    path : "/Home/Services/VacationManagement/PublicHolidays",
    image : "/SideBarIcons/calendar.png"
  },
  
];