import { motion } from 'motion/react';
import {
Heart,
Code,
Github,
Linkedin,
Mail,
} from 'lucide-react';

export function Footer() {
return ( <footer className="py-10 border-t border-border/50 bg-secondary/20"> <div className="max-w-6xl mx-auto px-6"> <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
{/* Left */}


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >
        <h3 className="font-bold text-xl mb-2">
          Hritik Arora
        </h3>

        <p className="text-muted-foreground text-sm">
          Software Engineer | Backend & Full Stack Developer
        </p>

        <p className="text-muted-foreground text-sm mt-2">
          Building scalable backend systems, enterprise commerce
          platforms, and modern web applications.
        </p>
      </motion.div>

      {/* Center Navigation */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6 text-sm"
      >
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </a>

        <a
          href="#experience"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Experience
        </a>

        <a
          href="#projects"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Projects
        </a>

        <a
          href="#tech"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Tech Stack
        </a>

        <a
          href="#certifications"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Certifications
        </a>

        <a
          href="#contact"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </motion.div>

      {/* Social */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <a
          href="https://github.com/hritikarora28"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/hritik-arora-b11a2a1b5"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="mailto:hritikarora2019@gmail.com"
          className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </motion.div>
    </div>

    <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} Hritik Arora.
        </span>

        <span>Built with</span>

        <Heart className="w-4 h-4 text-red-500 fill-red-500" />

        <span>and</span>

        <Code className="w-4 h-4 text-blue-500" />
      </div>

      <div className="text-sm text-muted-foreground">
        React • TypeScript • Tailwind CSS • Vite
      </div>
    </div>
  </div>
</footer>

);
}
