export default function SignOut({ handleClose, handleSignOut }){
    return(
        <div className='fixed w-screen h-screen z-[99999] bg-[#C1E3FB] left-0 top-0 bg-opacity-60 flex justify-center items-center'>
        <div className='absolute w-[319px] rounded-[10px] bg-white px-5 py-6 flex flex-col gap-[15px]'>
            <p className='font-[600] text-[24px] text-[#090A0A] text-center'>Yakin Sign Out?</p>
            <p className='font-[400] text-[16px] text-[#090A0A] text-center opacity-60'>Anda akan keluar dari akun ini.</p>
            <button className='w-full h-[43px] bg-[#00348F] rounded-[10px] font-[700] text-[18px] text-white' onClick={handleSignOut}>Ya</button>
            <button className='w-full h-[43px] bg-white rounded-[10px] font-[700] text-[18px] text-black border-[1px] border-[#00438F]' onClick={handleClose}>Batal</button>
        </div>
    </div>
    )
}