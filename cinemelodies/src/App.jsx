import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CardGallery from "./components/CardGallery/CardGallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardGallery heading="This is a gallery heading" />
      <Footer />
    </>
  );
}

export default App;
