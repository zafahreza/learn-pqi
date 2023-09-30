import LoginBrand from "../component/LoginBrand"
import LoginForm from "../component/LoginForm"
import RootLayout from "../layout";

const Login = () => {
  const pageTitle = "LearnPQI - Sign In";
  return (
    <RootLayout title={pageTitle}>
    <main className="max-w-screen min-h-screen flex justify-center items-center bg-[#C1E3FB]">
      <div className="w-[886px] flex bg-white rounded-[30px]">
        <LoginBrand />
        <LoginForm />
      </div>
    </main>
    </RootLayout>
  )
}

export default Login