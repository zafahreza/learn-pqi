import Link from "next/link";

export default function MateriCard({ href }){
    return(
        <Link href={href} className="w-[850px] h-[65px] rounded-[20px] border-[2px] border-[#0078CE] bg-white pl-[54px] flex flex-col justify-center cursor-pointer">
            <p className="font-[700] text-[14px] text-[#090A0A] cursor-pointer">Materi 1 - Hukum Nun Sukun dan Tanwin</p>
            <p className="font-[500] text-[14px] text-[#090A0A] cursor-pointer opacity-50">6 Maret 2023</p>
        </Link>
    )
}