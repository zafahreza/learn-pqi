import Link from "next/link";

export default function TaskCard(){
    return(
        <Link href="/Dashboard/PraktikumQiroah/Tugas" className="w-[850px] h-[65px] rounded-[20px] border-[2px] border-[#0078CE] bg-white pl-[54px] flex flex-col justify-center cursor-pointer">
            <p className="font-[700] text-[14px] text-[#090A0A] cursor-pointer">Tugas 1 - Mengaji Surah Al - Fatihah</p>
            <p className="font-[500] text-[14px] text-[#090A0A] cursor-pointer opacity-50">Tenggat waktu : 20 Maret 2023 (15.00)</p>
        </Link>
    )
}