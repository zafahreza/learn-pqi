'use client'

import Link from "next/link";
import { useState } from "react";
import ForgetPasswordModal from "./ModalForgetPassword";

export default function ForgetPasswordForm(){

    const [showModal, setShowModal] = useState(false);

    return(
        <form className="flex flex-col justify-center w-3/5 py-10">
            <p className="font-[700] text-2xl leading-9 mb-6 text-center">Lupa Password</p>
            <p className="self-center mb-6 leading-[19.36px] font-[400] w-[320px] text-[15px]">Masukkan alamat email yang Anda gunakan.<br/>Kami akan mengirimkan tautan untuk<br/>mengatur ulang kata sandi Anda</p>
            <div className="flex flex-col mb-6 self-center">
                <label for="Email" className="leading-4 font-[500] text-black mb-2">Email</label>
                <input type="email" className="border-2 w-80 h-10 rounded-[10px] px-[15px] border-[#00438f] placeholder-black placeholder-opacity-70 font-[500] leading-4" name="NIM" placeholder="Email"></input>
            </div>
            <Link href="" onClick={() => setShowModal(true)} id="MulaiButton" className="text-[20px] leading-[30px] flex justify-center items-center text-white w-80 h-10 border-[1px] rounded-[10px] border-[#00438f] bg-[#00438f] self-center mb-6">Kirim</Link>
            <ForgetPasswordModal isVisible={showModal} onClose={() => setShowModal(false)}/>
        </form>
    )
}