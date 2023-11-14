import Link from "next/link";
import React, { useState } from "react";
import ProfileUpdate from "./ProfileUpdate";
import PasswordUpdate from "./PasswordUpdate";

export default function MainProfile(){

    const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);
    const [isPasswordPopupVisible, setIsPasswordPopupVisible] = useState(false);
    const [isPasswordUpdateVisible, setIsPasswordUpdateVisible] = useState(false);

    function handleProfile(){
        setIsProfilePopupVisible(!isProfilePopupVisible)
    }

    function handleProfileClose(){
        setIsProfilePopupVisible(false);
    }

    function handlePasswordClose(){
        setIsPasswordPopupVisible(false);
    }

    function handleUpdateClose(){
        handlePasswordClose();
    }

    function handlePassword(){
        setIsPasswordPopupVisible(!isPasswordPopupVisible)
    }

    function handleUpdatePassword(){
        setIsPasswordUpdateVisible(!isPasswordUpdateVisible)
        setIsPasswordPopupVisible(false);
    }

    function HandleEyeIcon(){
        let password = document.getElementById('PasswordLama');
        let eyeicon = document.getElementById('EyeIcon');

        if(password.type === 'password'){
            password.type = 'text';
            eyeicon.src = "/assets/EyeOpen.png";
        }else{
            password.type = 'password';
            eyeicon.src = "/assets/EyeClose.png";
        }
    }

    function HandleEyeIconBaru(){
        let password = document.getElementById('PasswordBaru');
        let eyeicon = document.getElementById('EyeIconBaru');

        if(password.type === 'password'){
            password.type = 'text';
            eyeicon.src = "/assets/EyeOpen.png";
        }else{
            password.type = 'password';
            eyeicon.src = "/assets/EyeClose.png";
        }
    }

    function HandleEyeIconKonfirmasi(){
        let password = document.getElementById('KonfirmasiPasswordBaru');
        let eyeicon = document.getElementById('EyeIconKonfirmasi');

        if(password.type === 'password'){
            password.type = 'text';
            eyeicon.src = "/assets/EyeOpen.png";
        }else{
            password.type = 'password';
            eyeicon.src = "/assets/EyeClose.png";
        }
    }

    return(
        <main id="Main" className="pt-[112px] pb-11 w-full min-h-screen flex justify-center">
            <div className="px-[207px] bg-white rounded-[10px] pt-[28px] pb-[111px] h-fit flex flex-col gap-[15px]">
                <div className="flex flex-col items-center gap-[5px]">
                    <img src="/assets/profileedit.png" alt=""></img>
                    <p className="font-[400] text-[14px]">11190910000099</p>
                    <p className="font-[400] text-[14px]">yolanda19@mhs.uinjkt.ac.id</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label for="NamaLengkap" className="font-[500] text-[14px]">Nama Lengkap</label>
                    <input type="text" placeholder="Nama Lengkap" className="w-[458px] h-[41px] border-2 border-[#00438F] flex items-center px-[15px] rounded-[10px]"></input>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label for="Fakultas" className="font-[500] text-[14px]">Fakultas</label>
                    <input type="text" placeholder="Fakultas" className="w-[458px] h-[41px] border-2 border-[#00438F] flex items-center px-[15px] rounded-[10px]"></input>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label for="ProgramStudi" className="font-[500] text-[14px]">Program Studi</label>
                    <input type="text" placeholder="Program Studi" className="w-[458px] h-[41px] border-2 border-[#00438F] flex items-center px-[15px] rounded-[10px]"></input>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-[10px]">
                        <label for="TanggalLahir" className="font-[500] text-[14px]">Tanggal Lahir</label>
                        <input type="date" className="w-[182px] h-[41px] border-2 border-[#00438F] flex items-center px-[15px] rounded-[10px]"></input>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label for="NoHp" className="font-[500] text-[14px]">No. HP</label>
                        <input type="text" placeholder="No. HP" className="w-[247px] h-[41px] border-2 border-[#00438F] flex items-center px-[15px] rounded-[10px]"></input>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label for="ProgramStudi" className="font-[500] text-[14px]">Alamat</label>
                    <textarea type="text" placeholder="Program Studi" className="w-[458px] h-[115px] border-2 border-[#00438F] flex items-center px-[15px] py-[13px] rounded-[10px]"></textarea>
                </div>
                <div className="flex justify-center items-center gap-[25px] mt-[15px]">
                    <button href="#" className="px-[15px] py-[10px] font-[600] text-[14px] border-2 border-[#00438F] rounded-[10px]" onClick={handlePassword}>Ubah Password</button>
                    <button href="#" className="px-[15px] py-[10px] font-[600] text-[14px] border-2 border-[#00438F] border-opacity-50 text-opacity-70 rounded-[10px]" onClick={handleProfile}>Simpan Perubahan</button>
                </div>
            </div>
            {isProfilePopupVisible && <ProfileUpdate onClose={handleProfileClose}/>}
            {isPasswordPopupVisible && <PasswordUpdate handlePasswordClose={handlePasswordClose} HandleEyeIcon={HandleEyeIcon} HandleEyeIconBaru={HandleEyeIconBaru} HandleEyeIconKonfirmasi={HandleEyeIconKonfirmasi} handleUpdatePassword={handleUpdatePassword} handleUpdateClose={handleUpdateClose}/>}
        </main>
    )
}