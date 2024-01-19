import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { SideNavItem } from "./SideNavItem";

export const AdminSideNavItems: SideNavItem[] = [
  {
    label: "Employee List",
    path : "/Home/Services/Service2/EmpManag/EmpList",
    image : "/AdminSidebarIcons/team.png",
    
  },
  // {
  //   label: "Asset Management",
  //   path : "/Home/Admin/AsstMng",
  //   image : "/AdminSidebarIcons/assets.png",
  // },
  {
    label: "Employee Availability",
    path : "/Home/Services/Service2/EmpManag/EmpAvb",
    image : "/AdminSidebarIcons/availability.png",
  },
];