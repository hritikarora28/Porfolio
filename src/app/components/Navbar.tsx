import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import {
  Github,
  Linkedin,
  Mail,
  Download,
} from 'lucide-react';

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }


  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Tech', id: 'tech' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    > <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hritik Arora
          </div>

          <div className="text-xs text-muted-foreground">
            Software Engineer
          </div>
        </motion.div>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Right Section */}

        <div className="flex items-center gap-2">
          <a
            href="/Hritik_Arora_Resume.pdf"
            download
            className="hidden md:flex"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.button>
          </a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            href="https://github.com/hritikarora28"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <Github className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: -5 }}
            href="https://www.linkedin.com/in/hritik-arora-b11a2a1b5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            href="mailto:hritikarora2019@gmail.com"
            className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </motion.a>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>


  );
}
