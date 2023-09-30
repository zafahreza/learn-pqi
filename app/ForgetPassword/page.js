import ForgetPasswordForm from "../component/ForgetPasswordForm";
import LoginBrand from "../component/LoginBrand"
import RootLayout from "../layout";

const Login = () => {
  const pageTitle = "LearnPQI - Forget Password";
  return (
    <RootLayout title={pageTitle}>
    <main className="max-w-screen min-h-screen flex justify-center items-center bg-[#C1E3FB]">
      <div className="w-2/5 h-1/2 flex bg-white rounded-[30px]">
        <LoginBrand />
        <ForgetPasswordForm />
      </div>
    </main>
    </RootLayout>
  )
}

export default Login