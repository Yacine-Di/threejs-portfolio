import About from './sections/About';
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
        </main>
    );
};

export default App;
