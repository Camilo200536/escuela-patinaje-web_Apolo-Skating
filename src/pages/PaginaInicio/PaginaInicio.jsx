import "./PaginaInicio.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Programs from "../../components/Programs/Programs";

function Home() {
    return (
        <>
            
            <Navbar />
            <Hero />
            <About />
            <Programs />
        
            
        </>
    );
}

export default Home;