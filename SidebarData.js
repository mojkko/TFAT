import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Willkommnen",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projekt/Konfiguration",
    path: "/ProjektKonfiguration",
    icon: <FaIcons.FaCog />,
    cName: "nav-text",
  },
  {
    title: "Test-Konzeption",
    path: "/TestKonzeption",
    icon: <FaIcons.FaBook />,
    cName: "nav-text",
  },
  {
    title: "Testframework",
    path: "/TestFramework",
    icon: <AiIcons.AiOutlineAntDesign />,
    cName: "nav-text",
  },
  {
    title: "Reporting",
    path: "/Reporting",
    icon: <AiIcons.AiOutlineAreaChart />,
    cName: "nav-text",
  },
  {
    title: "Summary",
    path: "/Summary",
    icon: <AiIcons.AiOutlineForm />,
    cName: "nav-text",
  },
];