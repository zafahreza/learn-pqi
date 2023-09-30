import { useState } from "react";

export default function PasswordUpdate({ handlePasswordClose, HandleEyeIcon, HandleEyeIconBaru, HandleEyeIconKonfirmasi, handleUpdateClose }){

    const [isPasswordUpdateVisible, setIsPasswordUpdateVisible] = useState(false);
    const [isPasswordPopupVisible, setIsPasswordPopupVisible] = useState(true);

    function handleUpdatePassword(){
        setIsPasswordUpdateVisible(!isPasswordUpdateVisible)
        setIsPasswordPopupVisible(!isPasswordPopupVisible)
    } 

    return(
        <div className="w-screen h-screen fixed left-0 right-0 top-0 bottom-0 m-[auto] bg-[#C1E3FB] bg-opacity-60 z-[99999]">
            {isPasswordPopupVisible &&
            <div className="bg-white rounded-[10px] py-[25px] px-[42px] h-fit w-fit flex flex-col items-center gap-[25px] absolute left-0 right-0 top-0 bottom-0 m-[auto]">
                <p className="font-[600] text-[16px]">Ubah Password</p>
                <div className="flex flex-col gap-[15px]">
                    <div className="flex flex-col self-center">
                        <label for="PasswordLama" className="leading-4 font-[500] text-black mb-2">Password Lama</label>
                        <div className="flex items-center w-[402px] h-[41px] border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                            <input type="password" id="PasswordLama" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="PasswordLama" placeholder="Password Lama"></input>
                            <img src="/assets/EyeClose.png" alt="" id="EyeIcon" className="cursor-pointer opacity-50" onClick={HandleEyeIcon}></img>
                        </div>
                    </div>
                    <div className="flex flex-col self-center">
                        <label for="PasswordBaru" className="leading-4 font-[500] text-black mb-2">Password Baru</label>
                        <div className="flex items-center w-[402px] h-[41px] border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                            <input type="password" id="PasswordBaru" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="PasswordBaru" placeholder="Password Baru"></input>
                            <img src="/assets/EyeClose.png" alt="" id="EyeIconBaru" className="cursor-pointer opacity-50" onClick={HandleEyeIconBaru}></img>
                        </div>
                    </div>
                    <div className="flex flex-col self-center">
                        <label for="KonfirmasiPasswordBaru" className="leading-4 font-[500] text-black mb-2">Konfirmasi Password Baru</label>
                        <div className="flex items-center w-[402px] h-[41px] border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                            <input type="password" id="KonfirmasiPasswordBaru" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="KonfirmasiPasswordBaru" placeholder="Konfirmasi Password Baru"></input>
                            <img src="/assets/EyeClose.png" alt="" id="EyeIconKonfirmasi" className="cursor-pointer opacity-50" onClick={HandleEyeIconKonfirmasi}></img>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[25px]">
                    <button className="rounded-[10px] border-2 px-5 py-[10px] border-[#00438F] font-[700] text-[16px]" onClick={handlePasswordClose}>Tutup</button>
                    <button className="rounded-[10px] border-2 px-5 py-[10px] font-[700] text-[16px] bg-[#00438F] text-white" onClick={handleUpdatePassword}>Ubah Password</button>
                </div>
            </div>
            }
            {isPasswordUpdateVisible && 
                <div id="PasswordPopup" className="w-[265px] h-[148px] flex flex-col pt-[6px] pr-[10px] bg-white rounded-[10px] items-center fixed left-0 right-0 top-0 bottom-0 m-[auto]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[9px] self-end" onClick={handleUpdateClose}>
                        <path d="M14.375 14.375L5.625 5.625M14.375 5.625L5.625 14.375" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <img src="/assets/Ok.png" alt="" className="mb-[10px]"></img>
                    <p className="font-[600] text-[16px]">Password Berhasil Diubah</p>
                </div>
            }
        </div>
    )
}