import FaviconSwitcher from "./components/FaviconSwitcher";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <FaviconSwitcher />
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Footer />
    </main>
  );
};

export default App;
