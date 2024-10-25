import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import NavBar from './sections/Navbar';
import Project from './sections/Project';

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <NavBar />
            <Hero />
            <About />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
