import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CardGallery from "./components/CardGallery/CardGallery";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
        <Hero />
      </header>
      <main>
        <CardGallery heading="This is a gallery heading" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
