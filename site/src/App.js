import Competencies from "./components/Competencies";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <>
      <section id="infinite" class="text-white tm-font-big tm-parallax">
        <Header />
        <Home />
      </section>

      <Competencies />
      <Gallery />
      <Contacts />
    </>
  );
}

export default App;
