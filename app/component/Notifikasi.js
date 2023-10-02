import Link from "next/link";

export default function Notifikasi(){
    return(
        <div id="Notifikasi">
            <div id="notification-text">
                <div className="w-full flex justify-between items-center">
                    <p className="font-Poppins font-[500] text-[18px] leading-[27px] text-[#06283D]">Notifikasi</p>
                    <a href="/Dashboard/Notifikasi" className="font-Poppins font-[500] text-[14px] leading-[21px] text-[#0078CE]">Lihat semua</a>
                </div>
                <div className="w-full h-[1px] bg-black opacity-50 mt-[5px] mb-5"></div>
                <div className="flex flex-col pl-3 gap-2">
                    <Link href="/Dashboard/PraktikumIbadah/Hafalan" className="cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] leading-[16.94px] text-[#090A0A] mb-[2px] cursor-pointer">Praktikum Ibadah Hafalan doa baru : Doa Sebelum Belajar</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#04264D] mb-[2px] cursor-pointer">Tenggat waktu : 23 Juni 2023 (23:59)</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#090A0A] opacity-50 cursor-pointer">19 Juni 2023 13.55</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/Tugas" className="cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] leading-[16.94px] text-[#090A0A] mb-[2px] cursor-pointer">Praktikum Ibadah Tugas baru : Tugas 3 - Presentasi</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#04264D] mb-[2px] cursor-pointer">Tenggat waktu : 18 Juni 2023 (23:59)</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#090A0A] opacity-50 cursor-pointer">12 Juni 2023 15.03</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/Materi" className="cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] leading-[16.94px] text-[#090A0A] mb-[2px] cursor-pointer">Praktikum Ibadah Materi baru : Materi 7 - Haji dan Umrah</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#090A0A] opacity-50 cursor-pointer">12 Juni 2023 14.50</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumQiroah/Tugas" className="cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] leading-[16.94px] text-[#090A0A] mb-[2px] cursor-pointer">Praktikum Qiraah Tugas baru : Mengaji Al ...</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#04264D] mb-[2px] cursor-pointer">Tenggat waktu : 19 Juni 2023 (15:00)</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#090A0A] opacity-50 cursor-pointer">5 Juni 2023 14.55</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/Hafalan/Submitted" className="cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] leading-[16.94px] text-[#090A0A] mb-[2px cursor-pointer]">Praktikum Ibadah Hafalan doa baru : Doa Berkendara</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#04264D] mb-[2px] cursor-pointer">Tenggat waktu : 16 Juni 2023 (23:59)</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#090A0A] opacity-50 cursor-pointer">5 Juni 2023 13.40</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumQiroah/Hafalan" className="cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] leading-[16.94px] text-[#090A0A] mb-[2px] cursor-pointer">Praktikum Qiraah Hafalan surah baru : Surat An - Naba</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#04264D] mb-[2px] cursor-pointer">Tenggat waktu : 25 Juni 2023 (23:59)</p>
                        <p className="font-[500] text-[14px] leading-[16.94px] text-[#090A0A] opacity-50">29 Juni 2023 13.40</p>
                    </Link>
                </div>
            </div>
            <svg width="478" height="460" viewBox="0 0 478 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed">
                <mask id="path-1-inside-1_85_643" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M413.48 2.80449C411.495 -0.106545 407.202 -0.106542 405.218 2.8045L396.598 15.4458H15C6.71573 15.4458 0 22.1616 0 30.4458V445C0 453.284 6.71574 460 15 460H463C471.284 460 478 453.284 478 445V30.4458C478 22.1616 471.284 15.4458 463 15.4458H422.099L413.48 2.80449Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M413.48 2.80449C411.495 -0.106545 407.202 -0.106542 405.218 2.8045L396.598 15.4458H15C6.71573 15.4458 0 22.1616 0 30.4458V445C0 453.284 6.71574 460 15 460H463C471.284 460 478 453.284 478 445V30.4458C478 22.1616 471.284 15.4458 463 15.4458H422.099L413.48 2.80449Z" fill="white"/>
                <path d="M405.218 2.8045L403.565 1.67781V1.67781L405.218 2.8045ZM413.48 2.80449L415.132 1.6778V1.67779L413.48 2.80449ZM396.598 15.4458V17.4458H397.655L398.251 16.5725L396.598 15.4458ZM422.099 15.4458L420.447 16.5725L421.042 17.4458H422.099V15.4458ZM406.87 3.93118C408.061 2.18457 410.636 2.18455 411.827 3.93119L415.132 1.67779C412.353 -2.39764 406.344 -2.39765 403.565 1.67781L406.87 3.93118ZM398.251 16.5725L406.87 3.93118L403.565 1.67781L394.946 14.3191L398.251 16.5725ZM15 17.4458H396.598V13.4458H15V17.4458ZM2 30.4458C2 23.2661 7.8203 17.4458 15 17.4458V13.4458C5.61116 13.4458 -2 21.057 -2 30.4458H2ZM2 445V30.4458H-2V445H2ZM15 458C7.82031 458 2 452.18 2 445H-2C-2 454.389 5.61117 462 15 462V458ZM463 458H15V462H463V458ZM476 445C476 452.18 470.18 458 463 458V462C472.389 462 480 454.389 480 445H476ZM476 30.4458V445H480V30.4458H476ZM463 17.4458C470.18 17.4458 476 23.2661 476 30.4458H480C480 21.057 472.389 13.4458 463 13.4458V17.4458ZM422.099 17.4458H463V13.4458H422.099V17.4458ZM411.827 3.93118L420.447 16.5725L423.751 14.3191L415.132 1.6778L411.827 3.93118Z" fill="#0078CE" mask="url(#path-1-inside-1_85_643)"/>
            </svg>
        </div>
    )
}