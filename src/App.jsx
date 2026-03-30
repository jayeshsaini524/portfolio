import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-16">
      <div className="h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
