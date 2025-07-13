import TrustedClient from "./sections/TrustedClient";
import HomeSection from "./sections/HomeSection";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import About from "./sections/About";
import Choose from "./sections/Choose";
import HappyClient from "./sections/HappyClient";
import Blogs from "./sections/Blogs";
import FAQ from "./sections/FAQ";
import MobileAndNumber from "./sections/MobileAndNumber";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Swiper from "./sections/Swiper";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <TrustedClient />
      <Services />
      <About />
      <Choose />
      <HappyClient />
      <Blogs />
      <Swiper />
      <FAQ />
      <MobileAndNumber />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
