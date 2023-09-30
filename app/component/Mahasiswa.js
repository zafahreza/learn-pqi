export default function Mahasiswa({ index }){
    return(
        <div className="flex flex-col gap-[15px]">
            <div className="flex pl-5 gap-[30px]">
                <img src={`/assets/Mahasiswa${index + 1}.png`} alt="" width={50} height={50} loading="lazy"/>
                <div>
                    <p className="font-[500] text-[16px]">Mahasiswa { index + 1 }</p>
                    <div className="flex gap-1">
                        <p className="font-[500] text-[16px] text-black flex">NIP : </p>
                        <p className="font-[500] text-[16px] text-black flex">1120091000000{index + 1 }</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#0078CE] mb-[15px]"></div>
        </div>
    )
}