import Link from "next/link";
import EmbedVideo from "./EmbedVideo";

export default function MateriPraktikumIbadahDetail(){

    const PDFName = "Materi1";
    const PPTName = "Materi1";

    return(
        <div className="flex flex-col items-center pt-[60px] pb-10">
            <div className="w-[850px] h-[140px] flex flex-col justify-center pl-[58px] bg-[#0078CE] rounded-[20px] mt-[40px] mb-[28px]">
                <Link href="/Dashboard/PraktikumIbadah/MateriSection" className="font-Poppins font-[600] text-[20px] text-white">Praktikum Ibadah</Link>
                <p className="font-[600] text-[32px] text-white">Konsep Ibadah Dalam Islam</p>
                <p className="font-[500] text-[14px] text-white">6 Maret 2023</p>
            </div>
            <div>
                <p className="font-[400] text-[14px] text-black mb-10">Berikut adalah materi pembelajaran hukum Ibadah Dalam Islam. Silahkan disimak dengan baik.</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex justify-around gap-10">
                    <div className="w-[349px] h-[69px] border-[1px] rounded-[10px] border-black border-opacity-40 flex justify-start pl-[17px] items-center gap-3">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.75 12.5H32.5V15H23.75V12.5ZM23.75 18.75H32.5V21.25H23.75V18.75ZM23.75 25H32.5V27.5H23.75V25ZM7.5 12.5H16.25V15H7.5V12.5ZM7.5 18.75H16.25V21.25H7.5V18.75ZM7.5 25H16.25V27.5H7.5V25Z" fill="black"/>
                            <path d="M35 6.25H5C4.33716 6.25066 3.70166 6.51427 3.23296 6.98296C2.76427 7.45166 2.50066 8.08716 2.5 8.75V31.25C2.50066 31.9128 2.76427 32.5483 3.23296 33.017C3.70166 33.4857 4.33716 33.7493 5 33.75H35C35.6628 33.7493 36.2983 33.4857 36.767 33.017C37.2357 32.5483 37.4993 31.9128 37.5 31.25V8.75C37.4993 8.08716 37.2357 7.45166 36.767 6.98296C36.2983 6.51427 35.6628 6.25066 35 6.25ZM5 8.75H18.75V31.25H5V8.75ZM21.25 31.25V8.75H35V31.25H21.25Z" fill="black"/>
                        </svg>
                        <a href={`/${PDFName}.pdf`}>{PDFName}.pdf</a>
                    </div>
                    <div className="w-[349px] h-[69px] border-[1px] rounded-[10px] border-black border-opacity-40 flex justify-start pl-[17px] items-center gap-3">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.75 12.5H32.5V15H23.75V12.5ZM23.75 18.75H32.5V21.25H23.75V18.75ZM23.75 25H32.5V27.5H23.75V25ZM7.5 12.5H16.25V15H7.5V12.5ZM7.5 18.75H16.25V21.25H7.5V18.75ZM7.5 25H16.25V27.5H7.5V25Z" fill="black"/>
                            <path d="M35 6.25H5C4.33716 6.25066 3.70166 6.51427 3.23296 6.98296C2.76427 7.45166 2.50066 8.08716 2.5 8.75V31.25C2.50066 31.9128 2.76427 32.5483 3.23296 33.017C3.70166 33.4857 4.33716 33.7493 5 33.75H35C35.6628 33.7493 36.2983 33.4857 36.767 33.017C37.2357 32.5483 37.4993 31.9128 37.5 31.25V8.75C37.4993 8.08716 37.2357 7.45166 36.767 6.98296C36.2983 6.51427 35.6628 6.25066 35 6.25ZM5 8.75H18.75V31.25H5V8.75ZM21.25 31.25V8.75H35V31.25H21.25Z" fill="black"/>
                        </svg>
                        <a href={`/${PPTName}.pptx`}>{PDFName}.pptx</a>
                    </div>
                </div>
                <EmbedVideo />
            </div>
            <div className="w-[741px] mb-3 mt-10">
                <p className="font-[500]">Komentar</p>
            </div>
            <div className="flex gap-[13px] items-center">
                <img src="/assets/Comment.png" alt=""/>
                <input type="text" className="w-[663px] h-[28px] border-[1px] rounded-[10px] border-[#0426AD]  pl-2"></input>
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71941 11L2.60733 2.99747C2.391 2.44106 2.93366 1.90847 3.47083 2.09822L3.55608 2.13397L20.0561 10.384C20.1625 10.4371 20.2533 10.5169 20.3196 10.6157C20.3859 10.7144 20.4255 10.8286 20.4345 10.9472C20.4434 11.0658 20.4215 11.1847 20.3707 11.2923C20.32 11.3999 20.2422 11.4925 20.145 11.561L20.0561 11.6141L3.55608 19.8641C3.02166 20.1309 2.4405 19.6396 2.57983 19.0868L2.60733 18.9997L5.71941 11ZM4.53508 4.16164L6.92758 10.3125H13.0023C13.1685 10.3125 13.329 10.3726 13.4542 10.4818C13.5794 10.591 13.6608 10.7419 13.6834 10.9065L13.6898 11C13.6898 11.1662 13.6295 11.3269 13.5201 11.4521C13.4107 11.5773 13.2597 11.6587 13.0949 11.6811L13.0023 11.6875H6.92575L4.53416 17.8383L18.2117 11L4.53508 4.16164Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
}