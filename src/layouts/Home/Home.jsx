import JobSelf from "../../components/Home/JobSelf";
import NavigationMenu from "../../components/Home/NavigationMenu";
import SliderInterface from "../../components/Home/SliderInterface";
import bgImage from "../../assets/homewall.jpg";
import OptionInterface from "../../components/Home/OptionInterface";
import Clientele from "../../components/Home/Clientele";
import Footer from "../../components/Home/Footer";

const Home = () => {
  return (
<div
  className="min-h-screen text-white bg-no-repeat bg-cover bg-fixed"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    animation: "moveBg 60s ease-in-out infinite alternate",
  }}
>

  
      <NavigationMenu />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8">
        <SliderInterface />
      </main>
      <JobSelf />
      <OptionInterface />
      <Clientele />
      <Footer />
    </div>
  );
};

export default Home;
