import Image from "next/image";

export default function LoginBrand(){
    return(
        <aside className="flex flex-col justify-center items-center w-2/5">
            <Image src="/assets/logouinpqi.png" width={171} height={85} alt="" className="mb-[19px]"/>
            <p className="font-Poppins text-[30px] leading-[45px] font-[700] text-[#04264D]">LearnPQI</p>
        </aside>
    )
}