import Image from "next/image";
import Link from "next/link";

export default function PraktikumIbadahCard(){
    const PraktikumIbadah = () => {
        window.location.href = "/Dashboard/PraktikumIbadah/MateriSection";
    }
    return(
        <div className="w-fit h-fit cursor-pointer">
            <div className="w-[451px] h-[119.37px] rounded-t-[20px] bg-[#0078CE] px-[38px] flex justify-between items-center" onClick={PraktikumIbadah}>
                <p className="cursor-default font-Poppins text-white text-[24px] leading-[36px] font-[600]">Praktikum Ibadah</p>
                <img src="/assets/Tasbih.png" alt="" width={74} height={89.37} loading="lazy"/>
            </div>
            <div className="w-[451px] h-[184px] rounded-b-[20px] bg-white py-4 px-[22px] flex flex-col justify-between">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[14px] font-[500]">
                        <p className="text-[#090A0A]">Tenggat Tugas : 18 Juni 2023</p>
                        <Link href="/Dashboard/PraktikumIbadah/Tugas" className="text-[#00438F]">Tugas 3 - Presentasi</Link>
                    </div>
                    <div className="text-[14px] font-[500]">
                        <p className="text-[#090A0A]">Tenggat Hafalan : 23 Juni 2023</p>
                        <Link href="/Dashboard/PraktikumIbadah/Hafalan" className="text-[#00438F]">Doa Sebelum Belajar</Link>
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <Link href="/Dashboard/PraktikumIbadah/HafalanSection">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20.3694" r="20" fill="#C1E3FB"/>
                            <path d="M25.7724 17.2198C25.7388 17.12 25.6759 17.0319 25.5912 16.9665C25.5066 16.9011 25.4041 16.8614 25.2964 16.8522L23.7244 16.72L23.1094 15.296C23.0671 15.1992 22.9964 15.1166 22.9061 15.0585C22.8158 15.0004 22.7099 14.9695 22.6016 14.9695C22.4934 14.9695 22.3875 15.0004 22.2972 15.0585C22.2069 15.1166 22.1362 15.1992 22.0939 15.296L21.4781 16.72L19.9061 16.8522C19.7978 16.8609 19.6946 16.9005 19.6094 16.966C19.5242 17.0315 19.4608 17.12 19.4271 17.2203C19.3935 17.3207 19.3911 17.4285 19.4203 17.5302C19.4495 17.6319 19.5089 17.723 19.5911 17.792L20.7858 18.8049L20.4273 20.312C20.4027 20.4146 20.4098 20.522 20.4477 20.6208C20.4856 20.7195 20.5526 20.8052 20.6403 20.8671C20.728 20.929 20.8326 20.9645 20.941 20.969C21.0493 20.9735 21.1566 20.9469 21.2494 20.8924L22.6008 20.0949L23.9522 20.8924C24.045 20.9468 24.1523 20.9733 24.2606 20.9688C24.3689 20.9642 24.4734 20.9288 24.5611 20.8669C24.6487 20.805 24.7157 20.7193 24.7536 20.6206C24.7915 20.5219 24.7986 20.4146 24.774 20.312L24.4155 18.8049L25.6102 17.792C25.6922 17.7227 25.7514 17.6315 25.7802 17.5297C25.8091 17.4279 25.8063 17.3201 25.7724 17.2198ZM23.9315 18.3619C23.8559 18.4259 23.7996 18.5086 23.7687 18.6013C23.7379 18.694 23.7336 18.7931 23.7564 18.888L24.0705 20.2096L22.8863 19.5108C22.8003 19.4599 22.7015 19.433 22.6008 19.433C22.5001 19.433 22.4014 19.4599 22.3154 19.5108L21.1311 20.2096L21.4453 18.888C21.468 18.7931 21.4637 18.694 21.4329 18.6013C21.402 18.5086 21.3458 18.4259 21.2701 18.3619L20.2197 17.4715L21.6025 17.3552C21.7026 17.3468 21.7985 17.312 21.8796 17.2544C21.9608 17.1968 22.0241 17.1186 22.0627 17.0285L22.6008 15.7827L23.1389 17.0285C23.1775 17.1186 23.2409 17.1968 23.322 17.2544C23.4032 17.312 23.499 17.3468 23.5992 17.3552L24.982 17.4715L23.9315 18.3619Z" fill="#0078CE"/>
                            <path d="M17.4134 15.5411C17.1956 16.4707 17.166 17.4346 17.3263 18.3759C17.4866 19.3172 17.8335 20.2169 18.3466 21.0222C18.8597 21.8274 19.5287 22.5219 20.3142 23.0647C21.0997 23.6076 21.9859 23.9879 22.9205 24.1832C22.4292 24.6916 21.8406 25.0962 21.1899 25.3728C20.5392 25.6494 19.8395 25.7924 19.1324 25.7935C19.0669 25.7935 19.0004 25.7958 18.9339 25.7935C17.7028 25.7501 16.5259 25.2768 15.6075 24.4559C14.6892 23.635 14.0874 22.5184 13.9067 21.2999C13.7261 20.0814 13.978 18.8382 14.6187 17.7861C15.2594 16.7341 16.2484 15.9397 17.4139 15.5411M18.1154 14.3944C18.0876 14.3945 18.0597 14.397 18.0323 14.402C16.5202 14.6711 15.1611 15.4901 14.2167 16.7013C13.2723 17.9124 12.8093 19.4302 12.9169 20.9623C13.0245 22.4944 13.6951 23.9325 14.7996 24.9997C15.9041 26.067 17.3643 26.6879 18.8992 26.743C18.9771 26.7458 19.055 26.743 19.1319 26.743C20.1289 26.7436 21.1114 26.5042 21.9963 26.0449C22.8812 25.5856 23.6425 24.92 24.2159 24.1044C24.2623 24.0341 24.2894 23.9528 24.2945 23.8687C24.2995 23.7845 24.2823 23.7006 24.2446 23.6252C24.2069 23.5499 24.1501 23.4858 24.0797 23.4394C24.0094 23.393 23.9281 23.366 23.8439 23.361C22.895 23.2777 21.9779 22.9773 21.1636 22.4831C20.3493 21.9889 19.6595 21.314 19.1476 20.5107C18.6356 19.7074 18.3153 18.7971 18.2113 17.8502C18.1073 16.9033 18.2224 15.9452 18.5477 15.0499C18.5754 14.9782 18.5855 14.901 18.5773 14.8246C18.5691 14.7482 18.5427 14.6749 18.5004 14.6108C18.4581 14.5467 18.4011 14.4936 18.3342 14.4559C18.2672 14.4183 18.1922 14.3972 18.1154 14.3944Z" fill="#0078CE"/>
                            <rect x="8" y="6.36938" width="23.2" height="28" rx="9" stroke="#0078CE" stroke-width="2"/>
                        </svg>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/TugasSection">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20.3694" r="20" fill="#C1E3FB"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.125 6.36938C24.6077 6.3694 25.0819 6.49878 25.5 6.74453C25.918 6.99028 26.2651 7.34374 26.5065 7.76938H28.25C28.9793 7.76938 29.6788 8.06438 30.1945 8.58949C30.7103 9.11459 31 9.82678 31 10.5694V27.3694C31 29.2259 30.2757 31.0064 28.9864 32.3191C27.697 33.6319 25.9484 34.3694 24.125 34.3694H11.75C11.0207 34.3694 10.3212 34.0744 9.80546 33.5493C9.28973 33.0242 9 32.312 9 31.5694V10.5694C9 9.82678 9.28973 9.11459 9.80546 8.58949C10.3212 8.06438 11.0207 7.76938 11.75 7.76938H13.4935C13.7349 7.34374 14.082 6.99028 14.5 6.74453C14.9181 6.49878 15.3923 6.3694 15.875 6.36938H24.125ZM13.125 10.5694H11.75V31.5694H24.125C25.219 31.5694 26.2682 31.1269 27.0418 30.3392C27.8154 29.5516 28.25 28.4833 28.25 27.3694V10.5694H26.875C26.875 11.312 26.5853 12.0242 26.0695 12.5493C25.5538 13.0744 24.8543 13.3694 24.125 13.3694H15.875C15.1457 13.3694 14.4462 13.0744 13.9305 12.5493C13.4147 12.0242 13.125 11.312 13.125 10.5694ZM25.8273 16.7C26.085 16.9625 26.2298 17.3186 26.2298 17.6898C26.2298 18.061 26.085 18.417 25.8273 18.6796L19.021 25.6096C18.7631 25.872 18.4135 26.0195 18.0489 26.0195C17.6843 26.0195 17.3346 25.872 17.0767 25.6096L14.1618 22.6388C13.9173 22.3737 13.7837 22.0222 13.7892 21.6587C13.7948 21.2951 13.939 20.948 14.1915 20.6908C14.4439 20.4336 14.7847 20.2865 15.1418 20.2806C15.4988 20.2747 15.8441 20.4105 16.1046 20.6592L18.0503 22.6388L23.883 16.7C24.1409 16.4375 24.4905 16.2901 24.8551 16.2901C25.2197 16.2901 25.5694 16.4375 25.8273 16.7ZM24.125 9.16938H15.875V10.5694H24.125V9.16938Z" fill="#0078CE"/>
                        </svg>
                    </Link>
                    <Link href="/Dashboard/PraktikumIbadah/MateriSection">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20.3694" r="20" fill="#C1E3FB"/>
                            <path d="M27.5 7.36938C28.163 7.36938 28.7989 7.63278 29.2678 8.10162C29.7366 8.57046 30 9.20634 30 9.86938V29.8694C30 30.5324 29.7366 31.1683 29.2678 31.6372C28.7989 32.106 28.163 32.3694 27.5 32.3694H12.5C11.837 32.3694 11.2011 32.106 10.7322 31.6372C10.2634 31.1683 10 30.5324 10 29.8694V9.86938C10 9.20634 10.2634 8.57046 10.7322 8.10162C11.2011 7.63278 11.837 7.36938 12.5 7.36938H27.5ZM27.5 9.86938H21.25V19.8694L18.125 17.0569L15 19.8694V9.86938H12.5V29.8694H27.5V9.86938Z" fill="#0078CE"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}