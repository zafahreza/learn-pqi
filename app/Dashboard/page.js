'use client'

import NavbarDashboard from "../component/NavbarDashboard";
import Sidebar from "../component/Sidebar";
import RootLayout from "../layout";
import React, { useState } from "react";
import MainDashboard from "../component/MainDashboard";
import { useEffect } from "react";


const Dashboard = ({ params }) => {

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

  const pageTitle = "LearnPQI - Dashboard";
  return (
    <RootLayout title={pageTitle}>
        <main className="w-screen h-screen bg-[#C1E3FB]">
            <NavbarDashboard shiftSidebar={shiftSidebar} notification={notification} profile={profile} isNotificationVisible={isNotificationVisible} setIsNotificationVisible={setIsNotificationVisible} isProfileVisible={isProfileVisible} setIsProfileVisible={setIsProfileVisible}/>
            <Sidebar position={sidebarPosition} closeSidebar={closeSidebar}/>
            <MainDashboard params={params}/>
        </main>
    </RootLayout>
  )
}

export default Dashboard