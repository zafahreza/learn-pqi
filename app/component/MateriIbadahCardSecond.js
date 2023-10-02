import Link from "next/link";

export default function MateriIbadahCardSecond(){
    return(
        <Link href="/Dashboard/PraktikumIbadah/Materi" className="w-[850px] h-[65px] rounded-[20px] border-[2px] border-[#0078CE] bg-white pl-[54px] flex flex-col justify-center cursor-pointer">
            <p className="font-[700] text-[14px] text-[#090A0A] cursor-pointer">Materi 2 - Wirid, Zikir dan Doa</p>
            <p className="font-[500] text-[14px] text-[#090A0A] cursor-pointer opacity-50">11 Mei 2023</p>
        </Link>
    )
}