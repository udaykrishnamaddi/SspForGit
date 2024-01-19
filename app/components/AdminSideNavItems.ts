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
    label: "Emp Management",
    path : "/Home/Admin/EmpManag",
    image : "/AdminSidebarIcons/team.png",
    
  },
  {
    label: "Asset Management",
    path : "/Home/Admin/AsstMng",
    image : "/AdminSidebarIcons/assets.png",
  },
  {
    label: "Emp Availability",
    path : "/Home/Admin/EmpAvb",
    image : "/AdminSidebarIcons/availability.png",
  },
];