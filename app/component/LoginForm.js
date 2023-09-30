'use client'

import Image from "next/image";
import Link from "next/link";

export default function LoginForm(){

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

    return(
        <form className="flex flex-col justify-center w-3/5">
            <p className="font-[700] text-2xl leading-9 mb-6 mt-[76px] text-center">Sign In</p>
            <div className="flex flex-col mb-6 self-center">
                <label for="NIM" className="leading-4 font-[500] text-black mb-2">NIM</label>
                <input type="text" className="border-2 w-80 h-10 rounded-[10px] px-[15px] border-[#00438f] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="NIM" placeholder="NIM"></input>
            </div>
            <div className="flex flex-col mb-6 self-center">
                <label for="Password" className="leading-4 font-[500] text-black mb-2">Password</label>
                <div className="flex items-center w-80 h-10 border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                    <input type="password" id="Password" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Password" placeholder="Password"></input>
                    <img src="/assets/EyeClose.png" alt="" id="EyeIcon" className="cursor-pointer opacity-50" onClick={HandleEyeIcon}></img>
                </div>
            </div>
            <Link href="/ForgetPassword" className="font-[500] leading-4 text-center mb-6">Lupa Password?</Link>
            <Link href="/Dashboard" id="MulaiButton" className="text-[20px] leading-[30px] flex justify-center items-center text-white w-80 h-10 border-[1px] rounded-[10px] border-[#00438f] bg-[#00438f] self-center mb-6">Sign In</Link>
            <div className="flex justify-between w-80 self-center mb-[75px]">
                <Link href="/SignUp/Dosen" className="font-[500] leading-4 opacity-70 text-black">Sign Up as Dosen</Link>
                <Link href="/SignUp/Mahasiswa" className="font-[500] leading-4 opacity-70 text-black">Sign Up as Mahasiswa</Link>
            </div>
        </form>
    )
}