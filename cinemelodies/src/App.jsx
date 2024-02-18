import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CardGallery from "./components/CardGallery/CardGallery";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieContainer from "./components/MovieContainer/MovieContainer";

// /* Test object - to be deleted later - should match TMDB properties */
// let testData = {
//   title: "The Hobbit: An Unexpected Journey",
//   poster_path: "https://placehold.co/150x150",
//   release_date: "13 December 2013 (UK)",
//   genres: "Fantasy",
//   similar: "The Lord of the Rings: The Fellowship of the Ring",
//   overview: "Bilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf (Ian McKellen) arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor."
// };
// /* End test object */


function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
        <Hero />
      </header>
      <main>
       <MovieContainer />
         {/* <MovieInfo {...testData} /> {/* Passing the object as props using ...spread */}
        <CardGallery heading="This is a gallery heading" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
