import { useState } from "react";
import HafalanCard from "./HafalanCard";
import HafalanCardSubmitted from "./HafalanCardSubmitted";
import MateriCard from "./MateriCard";
import MateriCardSecond from "./MateriSecond";
import TaskCard from "./TaskCard";
import TaskCardSubmitted from "./TaskCardSubmitted";
import { useEffect } from "react";

export default function MateriPraktikumQiroah({ params }){

    const [isMateriVisible, setIsMateriVisible] = useState(true);
    const [isTugasVisible, setIsTugasVisible] = useState(false);
    const [isHafalanVisible, setIsHafalanVisible] = useState(false);


    const MateriSection = () => {
        document.getElementById("MateriButton").classList.add("border-b-2");
        document.getElementById("MateriButton").classList.add("border-[#04264D]");
        document.getElementById("TugasButton").classList.remove("border-b-2");
        document.getElementById("TugasButton").classList.remove("border-[#04264D]");
        document.getElementById("HafalanButton").classList.remove("border-b-2");
        document.getElementById("HafalanButton").classList.remove("border-[#04264D]");
        setIsMateriVisible(true);
        setIsTugasVisible(false);
        setIsHafalanVisible(false);
    }

    function TugasSection(){
        const materiButton = document.getElementById("MateriButton");
        const tugasButton = document.getElementById("TugasButton");
        const hafalanButton = document.getElementById("HafalanButton");
        
        materiButton.classList.remove("border-b-2");
        materiButton.classList.remove("border-[#04264D]");
        tugasButton.classList.add("border-b-2");
        tugasButton.classList.add("border-[#04264D]");
        hafalanButton.classList.remove("border-b-2");
        hafalanButton.classList.remove("border-[#04264D]");
        setIsTugasVisible(true);
        setIsHafalanVisible(false);
        setIsMateriVisible(false);
    }

    
    const HafalanSection = () => {
        document.getElementById("MateriButton").classList.remove("border-b-2");
        document.getElementById("MateriButton").classList.remove("border-[#04264D]");
        document.getElementById("TugasButton").classList.remove("border-b-2");
        document.getElementById("TugasButton").classList.remove("border-[#04264D]");
        document.getElementById("HafalanButton").classList.add("border-b-2");
        document.getElementById("HafalanButton").classList.add("border-[#04264D]");
        setIsHafalanVisible(true);
        setIsTugasVisible(false);
        setIsMateriVisible(false);
    }

    useEffect(() => {
        const materiButton = document.getElementById("MateriButton");
        const tugasButton = document.getElementById("TugasButton");
        const hafalanButton = document.getElementById("HafalanButton");

        if (params.section === "TugasSection") {
            materiButton.classList.remove("border-b-2");
            materiButton.classList.remove("border-[#04264D]");
            tugasButton.classList.add("border-b-2");
            tugasButton.classList.add("border-[#04264D]");
            hafalanButton.classList.remove("border-b-2");
            hafalanButton.classList.remove("border-[#04264D]");
            setIsTugasVisible(true);
            setIsHafalanVisible(false);
            setIsMateriVisible(false);
        } else if (params.section === "HafalanSection"){
            materiButton.classList.remove("border-b-2");
            materiButton.classList.remove("border-[#04264D]");
            tugasButton.classList.remove("border-b-2");
            tugasButton.classList.remove("border-[#04264D]");
            hafalanButton.classList.add("border-b-2");
            hafalanButton.classList.add("border-[#04264D]");
            setIsTugasVisible(false);
            setIsHafalanVisible(true);
            setIsMateriVisible(false);
        } else {
            materiButton.classList.add("border-b-2");
            materiButton.classList.add("border-[#04264D]");
            tugasButton.classList.remove("border-b-2");
            tugasButton.classList.remove("border-[#04264D]");
            hafalanButton.classList.remove("border-b-2");
            hafalanButton.classList.remove("border-[#04264D]");
            setIsTugasVisible(false);
            setIsHafalanVisible(false);
            setIsMateriVisible(true);
        }
      }, []);

    const tenggat = ("Selesai");

    const hrefVideo = "/Dashboard/PraktikumQiroah/Materi/Video"
    const hrefVoice = "/Dashboard/PraktikumQiroah/Materi/Voice"

    return(
        <div className="flex flex-col items-center pt-[60px]">
            <div className="w-[850px] h-[140px] mt-10 mb-[30px] flex justify-between items-center rounded-[20px] pl-[60px] pr-[102px] bg-[#0078CE]">
                <p className="font-Poppins font-[600] text-[30px] text-white">Praktikum Qiroah</p>
                <img src="/assets/quranDashboard.png" alt="" />
            </div>
            <div className="flex justify-center gap-[30px] mb-[30px]">
                <button id="MateriButton" className="font-[600] text-[16px] text-[#090A0A] w-[82px] h-[46px] rounded-[5px] border-b-2 border-[#04264D]" onClick={MateriSection}>Materi</button>
                <button id="TugasButton" className="font-[600] text-[16px] text-[#090A0A] w-[82px] h-[46px] rounded-[5px]" onClick={TugasSection}>Tugas</button>
                <button id="HafalanButton" className="font-[600] text-[16px] text-[#090A0A] w-[82px] h-[46px] rounded-[5px]" onClick={HafalanSection}>Hafalan</button>
            </div>
            {isMateriVisible && 
            <div id="MateriSection" className=" flex flex-col items-center gap-[25px] pb-5">
                <MateriCard href={hrefVideo}/>
                <MateriCardSecond href={hrefVoice}/>
            </div>
            }
            {isTugasVisible &&
            <div id="TugasSection" className=" flex flex-col items-center gap-[25px] pb-5">
                <TaskCard name={"Tugas 6 - Mengaji Al - Zalzalah"} dueDate={"Tenggat waktu : 19 Juni 2023 (15.00)"}/>
                <TaskCard name={"Tugas 5 - PPT Kelompok"} dueDate={"Tenggat waktu : 16 April 2023 (23.59)"}/>
                <TaskCardSubmitted tenggat={tenggat} name={"Tugas 4 -  Idgam"} dueDate={"Tenggat waktu: 9 April 2023 (23.59)"}/>
                <TaskCardSubmitted tenggat={tenggat} name={"Tugas 3 - Mengaji Al - Falaq"} dueDate={"Tenggat waktu : 3 April 2023 (15.00)"}/>
                <TaskCardSubmitted tenggat={tenggat} name={"Tugas 2 - Mengaji An - Nas"} dueDate={"Tenggat waktu : 27 Maret 2023 (15.00)"}/>
                <TaskCardSubmitted tenggat={tenggat} name={"Tugas 1 - Mengaji Surah Al - Fatihah"} dueDate={"Tenggat waktu : 20 Maret 2023 (15.00)"}/>
            </div>
            }
            {isHafalanVisible && 
            <div id="HafalanSection" className=" flex flex-col items-center gap-[25px] pb-5">
                <HafalanCard name={"Surat An - Naba"} dueDate={"Tenggat waktu : 25 Juni 2023 (23.59)"}/>
                <HafalanCardSubmitted tenggat={"Terlambat"} name={"Surah At - Takatsur"} dueDate={"Tenggat waktu : 11 Juni 2023 (23.59)"}/>
                <HafalanCard name={"Surah Al - Asr"} dueDate={"Tenggat waktu : 4 Juni 2023 (23.59)"}/>
                <HafalanCardSubmitted tenggat={tenggat} name={"Surah Al - Fill"} dueDate={"Tenggat waktu : 28 Mei 2023 (23.59)"}/>
                <HafalanCardSubmitted tenggat={tenggat} name={"Surah Al - Kautsar"} dueDate={"Tenggat waktu : 21 Mei 2023 (23.59)"}/>
                <HafalanCardSubmitted tenggat={tenggat} name={"Surah Al - Falaq"} dueDate={"Tenggat waktu : 14 Mei 2023 (23.59)"}/>
            </div>
            }
        </div>
    )
}