import Footer from './component/Footer'
import HomeSection from './component/HomeSection'
import Navbar from './component/navBar'
import RootLayout from './layout';

export default function Home() {
  const pageTitle = "LearnPQI - Home";

  return (
    <RootLayout title={pageTitle}>
      <Navbar />
      <HomeSection />
      <Footer />
    </RootLayout>
  )
}
