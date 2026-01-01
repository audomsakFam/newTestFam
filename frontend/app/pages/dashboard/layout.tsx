"use client";
import { SideBar } from "@/app/ui/dashboard";

const DashBoard = ({ children }: { children: React.ReactNode }) => {
  const menus = [
    { id: "/pages/dashboard/home", label: "Dashboard" },
    { id: "/pages/dashboard/profile", label: "Profile" },
    { id: "/pages/dashboard/settings", label: "Settings" },
  ];
  return (
    <div
      style={{
        backgroundColor: "#212c25ff",
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <SideBar options={menus}></SideBar>
      <main
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto", 
          height: "100%",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default DashBoard;
