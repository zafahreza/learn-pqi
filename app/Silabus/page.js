'use client'

import NavbarDashboard from "@/app/component/NavbarDashboard";
import Sidebar from "@/app/component/Sidebar";
import RootLayout from "@/app/layout";
import React, { useState } from "react";
import MainProfile from "@/app/component/MainProfile";
import Link from "next/link";

const Silabus = ({ params }) => {

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

  const pageTitle = "LearnPQI - Silabus";
  return (
    <RootLayout title={pageTitle}>
        <main className="w-screen h-screen bg-[#C1E3FB]">
            <NavbarDashboard shiftSidebar={shiftSidebar} notification={notification} profile={profile} isNotificationVisible={isNotificationVisible} setIsNotificationVisible={setIsNotificationVisible} isProfileVisible={isProfileVisible} setIsProfileVisible={setIsProfileVisible}/>
            <Sidebar position={sidebarPosition} closeSidebar={closeSidebar}/>
            <div className="w-screen h-[106px] bg-[#0078CE] flex justify-center items-center relative pt-[60px]">
                <Link href="/Dashboard" className="w-fit h-fit absolute left-[17px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5625 14.5625L1.4375 1.4375M14.5625 1.4375L1.4375 14.5625" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <p className="font-Poppins text-xl text-white font-[600]">Silabus</p>
            </div>
            <div id="PdfViewer">
                <iframe src="/document.pdf" className="w-full h-full"></iframe>
            </div>
        </main>
    </RootLayout>
  )
}

export default Silabus