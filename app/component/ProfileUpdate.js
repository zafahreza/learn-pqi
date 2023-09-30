export default function ProfileUpdate({ onClose }){
    return(
        <div id="MainProfile" className="w-screen h-screen fixed left-0 right-0 top-0 bottom-0 m-[auto] bg-[#C1E3FB] bg-opacity-60 z-[99999]">
            <div id="ProfilePopup" className="w-[265px] h-[148px] flex flex-col pt-[6px] pr-[10px] bg-white rounded-[10px] items-center absolute left-0 right-0 top-0 bottom-0 m-[auto]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[9px] self-end" onClick={onClose}>
                    <path d="M14.375 14.375L5.625 5.625M14.375 5.625L5.625 14.375" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img src="/assets/Ok.png" alt="" className="mb-[10px]"></img>
                <p className="font-[600] text-[16px]">Profile Berhasil Diubah</p>
            </div>
        </div>
    )
}