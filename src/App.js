import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Input from "./components/Input";

function App() {
  return (
    <div className="app bg-dark">
      <Navbar />
      <HeroCarousel />
      <Cards />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
