'use client'

import Link from "next/link";

export default function SignUpMhsForm(){
    
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
            <p className="font-[700] text-2xl leading-9 mb-6 text-center mt-[51px]">Sign Up</p>
            <div className="flex flex-col mb-6 self-center">
                <label for="Nama" className="leading-4 font-[500] text-black mb-2">Nama Lengkap</label>
                <input type="text" className="border-2 w-80 h-10 rounded-[10px] px-[15px] border-[#00438f] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Nama" placeholder="Nama Lengkap"></input>
            </div>
            <div className="flex flex-col mb-6 self-center">
                <label for="NIM" className="leading-4 font-[500] text-black mb-2">NIM</label>
                <input type="text" className="border-2 w-80 h-10 rounded-[10px] px-[15px] border-[#00438f] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="NIM" placeholder="NIM"></input>
            </div>
            <div className="flex flex-col mb-6 self-center">
                <label for="KodeKelas" className="leading-4 font-[500] text-black mb-2">Kode Kelas</label>
                <input type="text" className="border-2 w-80 h-10 rounded-[10px] px-[15px] border-[#00438f] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Kode Kelas" placeholder="Kode Kelas"></input>
            </div>
            <div className="flex flex-col mb-6 self-center">
                <label for="Email" className="leading-4 font-[500] text-black mb-2">Email</label>
                <input type="email" className="border-2 w-80 h-10 rounded-[10px] px-[15px] border-[#00438f] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Email" placeholder="Email"></input>
            </div>
            <div className="flex flex-col mb-6 self-center">
                <label for="Password" className="leading-4 font-[500] text-black mb-2">Password</label>
                <div className="flex items-center w-80 h-10 border-2 rounded-[10px] border-[#00438f] justify-between pr-3">
                    <input type="password" id="Password" className="px-[15px] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="Password" placeholder="Password"></input>
                    <img src="/assets/EyeClose.png" alt="" id="EyeIcon" className="cursor-pointer opacity-50" onClick={HandleEyeIcon}></img>
                </div>
            </div>
            <Link href="/SignIn" id="MulaiButton" className="text-[20px] leading-[30px] flex justify-center items-center text-white w-80 h-10 border-[1px] rounded-[10px] border-[#00438f] bg-[#00438f] self-center mb-6">Sign Up</Link>
            <div className="flex justify-center w-80 self-center mb-[50px]">
                <p className="font-[500] leading-4 opacity-70 text-black mr-[10px]">Sudah Punya Akun?</p>
                <Link href="/SignIn" className="font-[500] leading-4 opacity-70 text-black">Sign In</Link>
            </div>
        </form>
    )
}