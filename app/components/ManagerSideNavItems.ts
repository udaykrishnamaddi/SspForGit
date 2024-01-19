import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { SideNavItem } from "./SideNavItem";

export const ManagerSideNavItems: SideNavItem[] = [
  {
    label: "My Team List",
    path : "/Home/Services/Service2/MyTeam/MyTeamList",
    image : "/AdminSidebarIcons/team.png",
  },
  // {
    // label: "Asset Management",
    // path : "/Home/Admin/AsstMng",
    // subMenuItems:[
    //   {label:"Emp list",path:"#"},
    //   {label:"Add Emp",path:"#"},
    //   {label:"Del Emp",path:"#"},
    //   {label:"Update Emp",path:"#"},
    // ],
    // image : "/AdminSidebarIcons/assets.png",
  // },
  {
    label: "My Team Availability",
    path : "/Home/Services/Service2/MyTeam/MyTeamAvb",
    image : "/AdminSidebarIcons/availability.png",
  },
];