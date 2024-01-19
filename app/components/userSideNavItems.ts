import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { SideNavItem } from "./SideNavItem";

export const userSideNavItems: SideNavItem[] = [
  {
    label: "My Team",
    path : "/Home/Admin/MyTeam",
    image : "/MyTeamSideIcons/focus-group.png"
  },
  {
    label: "Emp Availability",
    path : "/Home/Admin/EmpAvb",
    image : "/AdminSidebarIcons/availability.png"
  },
];