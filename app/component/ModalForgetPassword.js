import Link from "next/link";

export default function ForgetPasswordModal({ isVisible, onClose }){
    if( !isVisible ) return null;

    return(
        <div className="fixed inset-0 bg-[#C1E3FB] bg-opacity-80 flex justify-center items-center">
            <div className="w-[319px] h-[219px] rounded-[15px] px-5 py-[25px] flex flex-col gap-[15px] bg-white">
                <p className="font-[600] text-2xl leading-6 text-center self-center">Periksa Email Anda</p>
                <p className="font-[400] leading-6 text-center self-center">Kami telah mengirim tautan ke email<br/>anda untuk mengatur ulang kata<br/>sandi.</p>
                <button type="button" id="ButtonKirim" onClick={() => location.href = "/ResetPassword"} className="w-[279px] h-[43px] rounded-[10px] bg-[#00438f] font-[700] leading-[19.36px] text-center self-center text-white">Kirim</button>
            </div>
        </div>
    )
}