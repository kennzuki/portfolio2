import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <main className='min-h-screen overflow-x-hidden p-16'>
      <Navbar />
      <section className=''>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </section>
    </main>
  );
}

export default App;
