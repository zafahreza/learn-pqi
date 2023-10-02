import Link from "next/link";

export default function MainNotification(){
    return(
        <main className="pt-[112px] pb-11 w-full min-h-screen flex justify-center">
            <div className="px-[88px] bg-white rounded-[10px] pt-[26px] pb-[30px] h-fit">
                <div className="bg-[#0078CE] w-[865px] h-[70px] rounded-[20px] px-6 flex justify-start gap-[18px] items-center mb-[40px]">
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9682 17.7254C20.8775 17.6138 20.7884 17.5022 20.701 17.3945C19.4989 15.9096 18.7716 15.0134 18.7716 10.8097C18.7716 8.63337 18.2618 6.84766 17.2569 5.50837C16.516 4.51897 15.5144 3.76842 14.1943 3.21373C14.1773 3.20408 14.1621 3.19142 14.1495 3.17634C13.6747 1.55246 12.3753 0.464844 10.9098 0.464844C9.44432 0.464844 8.14549 1.55246 7.67066 3.17466C7.65799 3.18919 7.64303 3.20145 7.6264 3.21094C4.54572 4.50614 3.04854 6.99107 3.04854 10.808C3.04854 15.0134 2.32236 15.9096 1.11916 17.3929C1.03173 17.5006 0.942664 17.6099 0.851959 17.7238C0.617657 18.0123 0.469208 18.3634 0.424179 18.7355C0.37915 19.1075 0.439427 19.485 0.597877 19.8231C0.935014 20.5485 1.65355 20.9989 2.47372 20.9989H19.3519C20.1682 20.9989 20.8819 20.5491 21.2201 19.827C21.3792 19.4888 21.4401 19.111 21.3954 18.7386C21.3508 18.3661 21.2025 18.0145 20.9682 17.7254ZM10.9098 25.4648C11.6994 25.4642 12.4741 25.2453 13.1517 24.8314C13.8294 24.4175 14.3847 23.824 14.7587 23.1138C14.7764 23.0798 14.7851 23.0417 14.784 23.0032C14.783 22.9647 14.7722 22.9272 14.7527 22.8942C14.7332 22.8612 14.7057 22.834 14.6729 22.8151C14.6401 22.7962 14.603 22.7862 14.5653 22.7863H7.25539C7.21764 22.7861 7.18051 22.796 7.1476 22.8149C7.11469 22.8337 7.08713 22.861 7.0676 22.894C7.04806 22.927 7.03723 22.9645 7.03614 23.0031C7.03506 23.0416 7.04376 23.0798 7.06141 23.1138C7.43545 23.8239 7.99067 24.4173 8.6682 24.8312C9.34573 25.2452 10.1203 25.4641 10.9098 25.4648Z" fill="#EAF2F7"/>
                    </svg>
                    <p className="font-Poppins font-[500] text-[24px] text-white">Notifikasi</p>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <Link href="/Dashboard/PraktikumIbadah/Hafalan" className="flex flex-col justify-center cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] text-[#090A0A] cursor-pointer">Praktikum Ibadah Hafalan doa baru : Doa Sebelum Belajar</p>
                        <p className="font-[500] text-[14px] text-[#04264D] cursor-pointer">Tenggat waktu : 23 Juni 2023 (23.59)</p>
                        <p className="font-[500] text-[14px] text-[#090A0A] opacity-50 cursor-pointer">19 Juni 2023 13.55</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/Tugas" className="flex flex-col justify-center cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] text-[#090A0A] cursor-pointer">Praktikum Ibadah Tugas baru : Tugas 3 - Presentasi</p>
                        <p className="font-[500] text-[14px] text-[#04264D] cursor-pointer">Tenggat waktu : 18 Juni 2023 (23.59)</p>
                        <p className="font-[500] text-[14px] text-[#090A0A] opacity-50 cursor-pointer">12 Juni 2023 15.03</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/Materi" className="flex flex-col justify-center cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] text-[#090A0A] cursor-pointer">Praktikum Ibadah Materi baru : Materi 7 - Haji dan Umrah</p>
                        <p className="font-[500] text-[14px] text-[#090A0A] opacity-50 cursor-pointer">12 Juni 2023 14.50</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumQiroah/Tugas" className="flex flex-col justify-center cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] text-[#090A0A] cursor-pointer">Praktikum Qiraah Tugas baru : Tugas 6 - Mengaji Al - Zalzalah</p>
                        <p className="font-[500] text-[14px] text-[#04264D] cursor-pointer">Tenggat waktu : 19 Juni 2023 (15.00)</p>
                        <p className="font-[500] text-[14px] text-[#090A0A] opacity-50 cursor-pointer">5 Juni 2023 14.55</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/Hafalan/Submitted" className="flex flex-col justify-center cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] text-[#090A0A] cursor-pointer]">Praktikum Ibadah Hafalan doa baru : Doa Berkendara</p>
                        <p className="font-[500] text-[14px] text-[#04264D] cursor-pointer">Tenggat waktu : 16 Juni 2023 (23.59)</p>
                        <p className="font-[500] text-[14px] text-[#090A0A] opacity-50 cursor-pointer">5 Juni 2023 13.40</p>
                    </Link>
                    <Link href="/Dashboard/PraktikumQiroah/Hafalan" className="flex flex-col justify-center cursor-pointer" id="NotificationCard">
                        <p className="font-[600] text-[14px] text-[#090A0A] cursor-pointer">Praktikum Qiraah Hafalan surah baru : Surat An - Naba</p>
                        <p className="font-[500] text-[14px] text-[#04264D] cursor-pointer">Tenggat waktu : 25 Juni 2023 (23.59)</p>
                        <p className="font-[500] text-[14px] text-[#090A0A] opacity-50 cursor-pointer">29 Mei 2023 13.40</p>
                    </Link>
                </div>
            </div>
        </main>
    )
}