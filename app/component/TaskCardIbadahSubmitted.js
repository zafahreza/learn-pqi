import Link from "next/link";

export default function TaskCardSubmitted({ tenggat }){
    return(
        <Link href="/Dashboard/PraktikumIbadah/Tugas/Submitted" className="w-[850px] h-[65px] rounded-[20px] border-[2px] border-[#0078CE] bg-[#0078CE] pl-[54px] pr-[39px] flex justify-between items-center cursor-pointer">
            <div>
                <p className="font-[700] text-[14px] text-[#FFFFFF] cursor-pointer">Tugas 2 - Tugas</p>
                <p className="font-[500] text-[14px] text-[#FFFFFF] cursor-pointer opacity-50">Tenggat waktu : 27 Maret 2023 (15.00)</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="font-[700] text-[16px]">Dikirim</p>
                <p className="font-[600] text-[14px] text-white">{tenggat}</p>
            </div>
        </Link>
    )
}