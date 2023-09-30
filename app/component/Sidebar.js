import Link from "next/link";
import React from "react";

export default function Sidebar({ position, closeSidebar }){

    const sidebarStyle = {
        transform: `translateX(${position}px)`,
        transition: 'transform .4s ease',
    };

    function PraktikumIbadahDropDown(){
        document.getElementById("PraktikumIbadahDropDown").classList.toggle("DropDownSidebarShow");
    }

    function PraktikumQiroahDropDown(){
        document.getElementById("PraktikumQiroahDropDown").classList.toggle("DropDownSidebarShow");
    }

    return(
        <aside id="Sidebar" className="w-[300px] h-screen bg-white fixed top-0 z-50 left-[-300px]" style={sidebarStyle}>
            <div className="w-full pr-6 pt-5 mb-16 flex justify-end">
                <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" id="HamMenu" onClick={() => closeSidebar()}>
                    <path d="M2.79643 0H26.8296C27.5713 0 28.2826 0.286439 28.807 0.796303C29.3314 1.30617 29.6261 1.99769 29.6261 2.71875C29.6261 3.43981 29.3314 4.13133 28.807 4.6412C28.2826 5.15106 27.5713 5.4375 26.8296 5.4375H2.79643C2.05477 5.4375 1.34349 5.15106 0.819055 4.6412C0.294623 4.13133 8.33401e-08 3.43981 8.33401e-08 2.71875C8.33401e-08 1.99769 0.294623 1.30617 0.819055 0.796303C1.34349 0.286439 2.05477 0 2.79643 0ZM2.79643 9.78125H26.8296C27.1969 9.78125 27.5605 9.85157 27.8998 9.9882C28.2391 10.1248 28.5473 10.3251 28.807 10.5776C29.0667 10.83 29.2727 11.1297 29.4132 11.4596C29.5537 11.7894 29.6261 12.143 29.6261 12.5C29.6261 12.857 29.5537 13.2106 29.4132 13.5404C29.2727 13.8703 29.0667 14.17 28.807 14.4224C28.5473 14.6749 28.2391 14.8752 27.8998 15.0118C27.5605 15.1484 27.1969 15.2187 26.8296 15.2187H2.79643C2.4292 15.2187 2.06556 15.1484 1.72628 15.0118C1.387 14.8752 1.07873 14.6749 0.819055 14.4224C0.559383 14.17 0.353399 13.8703 0.212865 13.5404C0.0723318 13.2106 2.44097e-08 12.857 2.44097e-08 12.5C2.44097e-08 12.143 0.0723318 11.7894 0.212865 11.4596C0.353399 11.1297 0.559383 10.83 0.819055 10.5776C1.07873 10.3251 1.387 10.1248 1.72628 9.9882C2.06556 9.85157 2.4292 9.78125 2.79643 9.78125ZM2.79643 19.5635H26.8296C27.1969 19.5635 27.5605 19.6339 27.8998 19.7705C28.2391 19.9071 28.5473 20.1074 28.807 20.3598C29.0667 20.6123 29.2727 20.912 29.4132 21.2419C29.5537 21.5717 29.6261 21.9253 29.6261 22.2823C29.6261 22.6393 29.5537 22.9929 29.4132 23.3227C29.2727 23.6526 29.0667 23.9523 28.807 24.2047C28.5473 24.4572 28.2391 24.6575 27.8998 24.7941C27.5605 24.9307 27.1969 25.001 26.8296 25.001H2.79643C2.4292 25.001 2.06556 24.9307 1.72628 24.7941C1.387 24.6575 1.07873 24.4572 0.819055 24.2047C0.559383 23.9523 0.353399 23.6526 0.212865 23.3227C0.0723317 22.9929 0 22.6393 0 22.2823C0 21.9253 0.0723317 21.5717 0.212865 21.2419C0.353399 20.912 0.559383 20.6123 0.819055 20.3598C1.07873 20.1074 1.387 19.9071 1.72628 19.7705C2.06556 19.6339 2.4292 19.5635 2.79643 19.5635Z" fill="#0078CE"/>
                </svg>
            </div>
            <Link href="/Dashboard" className="flex w-full h-[31px] items-center pl-[37px] gap-[18px] hover-lightGrey">
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.166687 18.875V6.375L8.50002 0.125L16.8334 6.375V18.875H10.5834V11.5833H6.41669V18.875H0.166687Z" fill="black"/>
                </svg>
                <p className="text-[#06283D] font-[500] text-base">Home</p>
            </Link>
            <div className="flex w-full h-[31px] items-center pl-[35px] gap-[18px] hover-lightGrey" onClick={PraktikumQiroahDropDown}>
                <img src="/assets/IslamicBook.svg" />
                <button className="text-[#06283D] font-[500] text-base">Praktikum Qiroah</button>
            </div>
            <div id="PraktikumQiroahDropDown" className="font-Poppins text-[16px] font-[500] flex flex-col">
                <Link href="/Dashboard/PraktikumQiroah/MateriSection" className="hover-lightGrey  pl-24">
                    <li>Materi</li>
                </Link>
                <Link href="/Dashboard/PraktikumQiroah/TugasSection" className="hover-lightGrey  pl-24">
                    <li>Tugas</li>
                </Link>
                <Link href="/Dashboard/PraktikumQiroah/HafalanSection" className="hover-lightGrey  pl-24">
                    <li>Hafalan Surah</li>
                </Link>
            </div>
            <div className="flex w-full h-[31px] items-center pl-[35px] gap-[18px] hover-lightGrey" onClick={PraktikumIbadahDropDown}>
                <img src="/assets/ReligionIslam.svg"/>
                <button className="text-[#06283D] font-[500] text-base">Praktikum Ibadah</button>
            </div>
            <div id="PraktikumIbadahDropDown" className="font-Poppins text-[16px] font-[500] flex flex-col">
                <Link href="/Dashboard/PraktikumIbadah/MateriSection" className="hover-lightGrey  pl-24">
                    <li>Materi</li>
                </Link>
                <Link href="/Dashboard/PraktikumIbadah/TugasSection" className="hover-lightGrey  pl-24">
                    <li>Tugas</li>
                </Link>
                <Link href="/Dashboard/PraktikumIbadah/HafalanSection" className="hover-lightGrey  pl-24">
                    <li>Hafalan Doa</li>
                </Link>
            </div>
            <div className="flex w-full h-[31px] items-center pl-[35px] gap-[18px] hover-lightGrey">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 6.45831H20.9166V8.54165H13.625V6.45831ZM14.6666 10.625H20.9166V12.7083H14.6666V10.625ZM12.5833 2.29165H20.9166V4.37498H12.5833V2.29165ZM2.16665 14.7916H12.5833V13.75C12.5833 10.8781 10.2469 8.54165 7.37498 8.54165H5.29165C2.41977 8.54165 0.083313 10.8781 0.083313 13.75V14.7916H2.16665ZM6.33331 7.49998C8.41144 7.49998 9.97915 5.93227 9.97915 3.85415C9.97915 1.77602 8.41144 0.208313 6.33331 0.208313C4.25519 0.208313 2.68748 1.77602 2.68748 3.85415C2.68748 5.93227 4.25519 7.49998 6.33331 7.49998Z" fill="black"/>
                </svg>
                <Link href="/Dashboard/DetailKelas" className="text-[#06283D] font-[500] text-base">Detail Kelas</Link>
            </div>
            <div className="flex w-full h-[31px] items-center pl-[35px] gap-[18px] hover-lightGrey">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.8 11.64V5.44H2C0.9 5.44 0 6.34 0 7.44V13.44C0 14.54 0.9 15.44 2 15.44H3V18.44L6 15.44H11C12.1 15.44 13 14.54 13 13.44V11.62C12.9343 11.6341 12.8672 11.6412 12.8 11.641H5.8V11.64ZM18 0.440002H9C7.9 0.440002 7 1.34 7 2.44V10.44H14L17 13.44V10.44H18C19.1 10.44 20 9.541 20 8.44V2.44C20 1.34 19.1 0.440002 18 0.440002Z" fill="black"/>
                </svg>
                <Link href="/Dashboard/RuangDiskusi" className="text-[#06283D] font-[500] text-base">Ruang Diskusi</Link>
            </div>
        </aside>
    )
}