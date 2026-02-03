import Competencies from "./Competencies";
import Contacts from "./Contacts";
import Gallery from "./Gallery";
import About from "./About";
import Home from "./Home";

export default function AllPages() {
    return (
        <>
            <section id="infinite" class="text-white tm-font-big tm-parallax">
                <Home />
            </section>

            <About />
            <Competencies />
            <Gallery />
            <Contacts />
        </>
    );
}