import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { GitHub } from './components/GitHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <Certifications />
          <GitHub />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
