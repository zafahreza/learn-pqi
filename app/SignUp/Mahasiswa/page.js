import LoginBrand from "@/app/component/LoginBrand";
import RootLayout from "@/app/layout";
import SignUpMhsForm from "@/app/component/SignUpMhsForm"

export default function SignUpMahasiswa(){
    const pageTitle = "LearnPQI - Sign Up Mahasiswa"
    return(
        <RootLayout title={pageTitle}>
            <main className="w-screen h-screen flex justify-center items-center bg-[#C1E3FB]">
                <div className="w-[886px] flex bg-white rounded-[30px]">
                    <LoginBrand />
                    <SignUpMhsForm />
                </div>
            </main>
        </RootLayout>
    )
}