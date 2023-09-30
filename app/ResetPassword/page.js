import LoginBrand from "../component/LoginBrand"
import ResetPasswordForm from "../component/ResetPasswordForm";
import RootLayout from "../layout";

const ResetPassword = () => {
  const pageTitle = "LearnPQI - Reset Password";
  return (
    <RootLayout title={pageTitle}>
    <main className="max-w-screen min-h-screen flex justify-center items-center bg-[#C1E3FB]">
      <div className="w-2/5 h-1/2 flex bg-white rounded-[30px]">
        <LoginBrand />
        <ResetPasswordForm />
      </div>
    </main>
    </RootLayout>
  )
}

export default ResetPassword