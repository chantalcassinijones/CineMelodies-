import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MovieContainer/MovieContainer";


function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
         </header>
      <main>
        <MovieContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
