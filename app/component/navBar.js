import Link from "next/link"

export default function Navbar() {
  return(
    <div id="Navbar" className="w-screen h-[60px] flex justify-between px-[162px] items-center bg-[#C1E3FB] bg-opacity-[45] font-Poppins">
      <div className="w-fit">
        <Link href='/' className="font-[700] text-[30px] leading-[45px] text-[#04264D]">LearnPQI</Link>
      </div>
      <div className="font-[500] text-base text-[#04264D] flex gap-6 w-fit">
        <Link href='/SignIn'>Sign In</Link>
        <Link href='/SignUp/Dosen'>Sign Up as Dosen</Link>
        <Link href='/SignUp/Mahasiswa'>Sign Up as Mahasiswa</Link>
      </div>
    </div>
  )
}