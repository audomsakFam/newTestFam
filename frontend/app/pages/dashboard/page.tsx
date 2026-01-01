"use client";
import { SideBar } from "@/app/ui/dashboard";

const DashBoard = () => {
  const menus = [
    { id: "home", label: "Dashboard" },
    { id: "profile", label: "Profile" },
    { id: "settings", label: "Settings" },
  ];
  return (
    <div style={{ backgroundColor: "#212c25ff" }}>
      <SideBar options={menus}></SideBar>
    </div>
  );
};

export default DashBoard;
