'use client'

import NavbarDashboard from "@/app/component/NavbarDashboard";
import Sidebar from "@/app/component/Sidebar";
import RootLayout from "@/app/layout";
import React, { useState } from "react";
import HafalanPraktikumIbadahDetailSubmitted from "@/app/component/HafalanPraktikumIbadahDetailSubmitted";
import { useEffect } from "react";


const PraktikumIbadahHafalanSubmitted = ({ params }) => {

    const [sidebarPosition, setSidebarPosition] = useState(0);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);

    const shiftSidebar = () => {
        setSidebarPosition(300);
        setIsNotificationVisible(false);
        setIsProfileVisible(false);
    }

    const closeSidebar = () => {
        setSidebarPosition(0);
    }

    function notification(){
        setIsNotificationVisible(!isNotificationVisible);
        setIsProfileVisible(false);
        setSidebarPosition(0);
    }

    function profile(){
        setIsProfileVisible(!isProfileVisible);
        setSidebarPosition(0);
        setIsNotificationVisible(false);
    }

    useEffect(() => {
        window.onclick = function(event) {
            var hamMenu = document.getElementById("hamMenu");
            var HamMenu = document.getElementById("HamMenu");
            var notification = document.getElementById("notification");
            var Notification = document.getElementById("Notification");
            var profile = document.getElementById("profile");
            var Profile = document.getElementById("Profile");
            var PROFILE = document.getElementById("PROFILE");
            var Navbar = document.getElementsByTagName("aside");
            var target = event.target;
            
            if (target !== notification && target !== Notification && target !== profile && target !== Profile && target !== PROFILE) {
                setIsProfileVisible(false);
                setIsNotificationVisible(false);
            }
          };
      }, []);

    

  const pageTitle = "LearnPQI - Hafalan Praktikum Ibadah";
  return (
    <RootLayout title={pageTitle}>
        <main className="max-w-screen min-h-screen bg-[#FFF]">
            <NavbarDashboard shiftSidebar={shiftSidebar} notification={notification} profile={profile} isNotificationVisible={isNotificationVisible} setIsNotificationVisible={setIsNotificationVisible} isProfileVisible={isProfileVisible} setIsProfileVisible={setIsProfileVisible}/>
            <Sidebar position={sidebarPosition} closeSidebar={closeSidebar}/>
            <HafalanPraktikumIbadahDetailSubmitted params={params}/>
        </main>
    </RootLayout>
  )
}

export default PraktikumIbadahHafalanSubmitted