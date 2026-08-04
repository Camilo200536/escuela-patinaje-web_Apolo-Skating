import "./PaginaInicio.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Programs from "../../components/Programs/Programs";
import Schedule from "../../components/Schedule/Schedule";
import Contact from "../../components/Contact/Contact";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Explore from "../../components/Explore/Explore";

function Home() {
    return (
        <>
            
            <Navbar />
            <Hero />
            <About />
            <Programs />
            <Schedule />
            <Contact />
            <ScrollToTop />
            <Explore />
            
        </>
    );
}

export default Home;