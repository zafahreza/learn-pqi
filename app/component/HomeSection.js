import Image from "next/image";
import Link from "next/link";

export default function HomeSection(){
    return(
        <main className="flex w-screen">
            <section className="w-5/12 h-[calc(100vh-200px)] flex justify-center items-center">
                <img src="/assets/logoalquran.png" width={410} height={457} alt=""/>
            </section>
            <aside className="w-7/12 h-[calc(100vh-200px)] flex flex-col justify-center items-center font-Poppins">
                <img src="/assets/logouinpqi.png" width={210} height={94} alt="" className="mb-[27px]"/>
                <p className="text-[32px] leading-[48px] font-[600]">Selamat Datang di LearnPQI!</p>
                <p className="text-[20px] leading-[30px] font-[400] text-center mb-[21px]">Platform E-learning berbasis website untuk <br/> Mata Kuliah Praktikum Qiraah dan Ibadah.</p>
                <Link id="MulaiButton" href="/SignIn" className="w-[145px] h-[43px] rounded-[10px] border-[1px] border-[#00438f] bg-[#00438f] text-[#F3F6F9] text-[20px] leading-[30px] font-[600] flex items-center justify-center">Mulai</Link>
            </aside>
        </main>
    )
}