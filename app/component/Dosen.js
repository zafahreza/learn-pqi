export default function Dosen(){
    return(
        <div className="w-full flex flex-col gap-[15px]">
            <p className="font-[600] text-[20px] text-black">Dosen</p>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex pl-5 gap-[30px]">
                <img src="/assets/dosen1.png" alt="" width={50} height={50}/>
                <div>
                    <p className="font-[500] text-[16px]">Dosen 1</p>
                    <p className="font-[500] text-[16px] text-black flex">NIP :<p className="opacity-70 font-[400] ml-1">196903161999000000</p></p>
                </div>
            </div>
            <div className="w-full h-[1px] bg-black"></div>
        </div>
    )
}