import Footer from "../../components/Home/Footer";
import NavigationMenu from "../../components/Home/NavigationMenu";
import PriceIntergace from "../../components/pricing/PriceIntergace";

const Price = () => {
  return (
    <div className="min-h-screen text-white bg-no-repeat bg-cover bg-fixed bg-gray-900">
      <NavigationMenu />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8">
        <PriceIntergace />
      </main>
      <Footer />
    </div>
  );
};
export default Price;
