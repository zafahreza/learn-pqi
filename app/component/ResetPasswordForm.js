'use client'

import Image from "next/image";
import Link from "next/link";

export default function ResetPasswordForm(){

    function HandleEyeIcon(){
        let password = document.getElementById('Password');
        let eyeicon = document.getElementById('EyeIcon');

        if(password.type === 'password'){
            password.type = 'text';
            eyeicon.src = "/assets/EyeOpen.png";
        }else{
            password.type = 'password';
            eyeicon.src = "/assets/EyeClose.png";
        }
    }

    function HandleEyeIcon2(){
        let password = document.getElementById('Password2');
        let eyeicon = document.getElementById('EyeIcon2');

        if(password.type === 'password'){
            password.type = 'text';
            eyeicon.src = "/assets/EyeOpen.png";
        }else{
            password.type = 'password';
            eyeicon.src = "/assets/EyeClose.png";
        }
    }

    return(
        <form className="flex flex-col justify-center w-3/5">
            <p className="font-[700] text-2xl leading-9 mb-6 text-center">Reset Password</p>
            <div className="flex flex-col mb-6 self-center">
                <label for="Password" className="leading-4 font-[500] text-black mb-2">Password Baru</label>
                <div className="flex items-center w-80 h-10 border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                    <input type="password" id="Password" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Password" placeholder="Password"></input>
                    <img src="/assets/EyeClose.png" alt="" id="EyeIcon" className="cursor-pointer opacity-50" onClick={HandleEyeIcon}></img>
                </div>
            </div>
            <div className="flex flex-col mb-6 self-center">
                <label for="Password" className="leading-4 font-[500] text-black mb-2">Konfirmasi Password</label>
                <div className="flex items-center w-80 h-10 border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                    <input type="password" id="Password2" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Password" placeholder="Konfirmasi Password"></input>
                    <img src="/assets/EyeClose.png" alt="" id="EyeIcon2" className="cursor-pointer opacity-50" onClick={HandleEyeIcon2}></img>
                </div>
            </div>
            <Link href="/SignIn" id="MulaiButton" className="text-[20px] leading-[30px] flex justify-center items-center text-white w-80 h-10 border-[1px] rounded-[10px] border-[#00438f] bg-[#00438f] self-center mb-6">Reset Password</Link>
        </form>
    )
}