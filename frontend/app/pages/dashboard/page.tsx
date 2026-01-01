"use client";
import { SideBar } from "@/app/ui/dashboard";

const DashBoard = ({ children }: { children: React.ReactNode }) => {
  const menus = [
    { id: "/pages/dashboard/home", label: "Dashboard" },
    { id: "/pages/dashboard/profile", label: "Profile" },
    { id: "/pages/dashboard/settings", label: "Settings" },
  ];
  return (
    <div style={{ backgroundColor: "#212c25ff", display: "flex" }}>
      <SideBar options={menus}></SideBar>
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
};

export default DashBoard;
