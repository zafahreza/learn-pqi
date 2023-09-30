import Link from "next/link";
import PraktikumQiroahCard from "./PraktikumQiroahCard";
import PraktikumIbadahCard from "./PraktikumIbadahCard";

export default function MainDashboard() {
    return(
        <main className="flex flex-col items-center pt-[60px]">
            <div className="flex items-center justify-between w-[900px] mt-7 mb-10">
                <div>
                    <p className="font-Poppins font-[600] text-[26px] leading-[39px] text-[#090A0A]">Selamat Datang di Learn PQI!</p>
                    <p className="text-[22px] leading-[26.63px] text-[#090A0A]">Assalamualaikum, <strong>Mahasiswa</strong></p>
                    <p className="font-[600] text-[20px] leading-[24.2px] text-[#090A0A] mb-7">PQI - 2D 2023</p>
                    <Link href="/Silabus" className="w-[50px] h-[50px] block">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="white"/>
                            <path d="M38.625 15.2917C37.0063 14.7813 35.2271 14.5625 33.5209 14.5625C30.6771 14.5625 27.6146 15.1458 25.5 16.75C23.3855 15.1458 20.323 14.5625 17.4792 14.5625C14.6355 14.5625 11.573 15.1458 9.45837 16.75V39.3542C11.573 37.75 14.6355 37.1667 17.4792 37.1667C20.323 37.1667 23.3855 37.75 25.5 39.3542C27.6146 37.75 30.6771 37.1667 33.5209 37.1667C35.2271 37.1667 37.0063 37.3854 38.625 37.8958C39.7188 38.2604 40.6667 38.6979 41.5417 39.3542V16.75C40.6667 16.0938 39.7188 15.6562 38.625 15.2917ZM38.625 34.9792C37.0209 34.4688 35.2709 34.25 33.5209 34.25C31.0417 34.25 27.4688 35.1979 25.5 36.4375V19.6667C27.4688 18.4271 31.0417 17.4792 33.5209 17.4792C35.2709 17.4792 37.0209 17.6979 38.625 18.2083V34.9792Z" fill="#0078CE"/>
                            <path d="M33.5209 23.3125C34.8042 23.3125 36.0438 23.4438 37.1667 23.6917V21.475C36.0146 21.2562 34.775 21.125 33.5209 21.125C31.0417 21.125 28.7959 21.5479 26.9584 22.3354V24.7562C28.6063 23.8229 30.8959 23.3125 33.5209 23.3125ZM26.9584 26.2146V28.6354C28.6063 27.7021 30.8959 27.1917 33.5209 27.1917C34.8042 27.1917 36.0438 27.3229 37.1667 27.5708V25.3542C36.0146 25.1354 34.775 25.0042 33.5209 25.0042C31.0417 25.0042 28.7959 25.4417 26.9584 26.2146ZM33.5209 28.8979C31.0417 28.8979 28.7959 29.3208 26.9584 30.1083V32.5292C28.6063 31.5958 30.8959 31.0854 33.5209 31.0854C34.8042 31.0854 36.0438 31.2167 37.1667 31.4646V29.2479C36.0146 29.0146 34.775 28.8979 33.5209 28.8979Z" fill="#0078CE"/>
                        </svg>
                    </Link>
                </div>
                <div>
                    <img src="/assets/Dashboard.png" alt="" loading="lazy"/>
                </div>
            </div>
            <div className="grid grid-cols-[auto,auto] gap-[49px] justify-center">
                <PraktikumQiroahCard />
                <PraktikumIbadahCard />
            </div>
        </main>
    )
}