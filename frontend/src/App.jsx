import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen noise">
      {/* Deep space animated background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
