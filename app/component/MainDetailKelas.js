import Dosen from "./Dosen"
import Mahasiswa from "./Mahasiswa"

export default function MainDetailkelas(){

    function copyFunction() {
        const str = document.getElementById('KodeKelas').innerText
        const el = document.createElement('textarea')
        el.value = str
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      }

      const mahasiswaCount = 13;

    return(
        <main className="pt-[112px] pb-[56px] flex justify-center">
            <div className="flex flex-col justify-start items-center bg-white rounded-[10px] w-fit pt-7 pb-[50px] px-[88px] gap-[30px]">
                <div className="relative h-[201px] w-[850px] flex justify-end py-11 px-[52px] bg-[#0078CE] rounded-[20px]">
                    <div className="flex flex-col items-center justify-center absolute m-[auto] left-0 right-0 top-0 bottom-0">
                        <p className="font-Poppins font-[700] text-[32px] text-white">PQI - 2D 2023</p>
                        <p className="font-[500] text-[16px] text-white">Ruang 4.015</p>
                        <p className="font-[400] text-[16px] text-white">Kamis, 13.00 - 15.30</p>
                    </div>
                    <img src="/assets/animation.png" alt=""/>
                </div>
                <div className="w-full flex justify-between px-[26.5px]">
                    <div className="flex gap-[10px] items-center">
                        <p className="font-[600] text-[16px]">Kode Kelas : </p>
                        <p className="font-[600] text-[16px] opacity-70" id="KodeKelas">G57YFGA</p>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={copyFunction} className="cursor-pointer">
                            <path d="M5.5 4.58208V12.6008C5.49988 13.3942 5.80154 14.158 6.3438 14.7371C6.88606 15.3163 7.62831 15.6675 8.42 15.7196L8.625 15.7258H14.1425C14.0133 16.0914 13.7739 16.4078 13.4574 16.6317C13.1408 16.8555 12.7627 16.9758 12.375 16.9758H8C7.00544 16.9758 6.05161 16.5807 5.34835 15.8775C4.64509 15.1742 4.25 14.2204 4.25 13.2258V6.35083C4.2498 5.96292 4.36991 5.5845 4.59379 5.26772C4.81766 4.95093 5.13428 4.71138 5.5 4.58208ZM14.875 1.97583C15.3723 1.97583 15.8492 2.17337 16.2008 2.525C16.5525 2.87664 16.75 3.35355 16.75 3.85083V12.6008C16.75 13.0981 16.5525 13.575 16.2008 13.9267C15.8492 14.2783 15.3723 14.4758 14.875 14.4758H8.625C8.12772 14.4758 7.65081 14.2783 7.29917 13.9267C6.94754 13.575 6.75 13.0981 6.75 12.6008V3.85083C6.75 3.35355 6.94754 2.87664 7.29917 2.525C7.65081 2.17337 8.12772 1.97583 8.625 1.97583H14.875ZM14.875 3.22583H8.625C8.45924 3.22583 8.30027 3.29168 8.18306 3.40889C8.06585 3.5261 8 3.68507 8 3.85083V12.6008C8 12.7666 8.06585 12.9256 8.18306 13.0428C8.30027 13.16 8.45924 13.2258 8.625 13.2258H14.875C15.0408 13.2258 15.1997 13.16 15.3169 13.0428C15.4342 12.9256 15.5 12.7666 15.5 12.6008V3.85083C15.5 3.68507 15.4342 3.5261 15.3169 3.40889C15.1997 3.29168 15.0408 3.22583 14.875 3.22583Z" fill="black" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-[500] text-[16px] text-[#090A0A] underline decoration-black underline-offset-2">Mahasiswa</p>
                        <p className="font-[700] text-[20px] text-[#8B9596]">{mahasiswaCount}</p>
                    </div>
                </div>
                <Dosen />
                <div className="w-full">
                    <p className="font-[600] text-[20px] text-black mb-[15px]">Mahasiswa</p>
                    <div className="w-full h-[1px] bg-black mb-[15px]"></div>
                    {Array.from({ length: mahasiswaCount }, (_, index) => (
                        <Mahasiswa key={index} index={index}/>
                    ))}
                </div>
            </div>
        </main>
    )
}