import { motion } from 'motion/react';
import {
Download,
Mail,
ArrowRight,
Github,
Linkedin,
} from 'lucide-react';

const techBadges = [
'Node.js',
'NestJS',
'React.js',
'Next.js',
'AWS Lambda',
'MongoDB',
'TypeScript',
'Shopify',
'GitHub Actions',
'Microservices',
];

export function Hero() {
return ( <section
   id="hero"
   className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
 > <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    }}
    className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"
  />

  <motion.div
    animate={{
      scale: [1.2, 1, 1.2],
      rotate: [0, -90, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'linear',
    }}
    className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20"
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}

      <div className="text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 mb-6"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Currently Software Engineer at Wipro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Hritik Arora
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-foreground/80 font-medium mb-6"
        >
          Software Engineer | Backend & Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed mb-8"
        >
          Building scalable commerce platforms, cloud-powered backend
          systems, customer synchronization services, and
          production-grade applications using Node.js, NestJS,
          React.js, Next.js, AWS, and MongoDB.
        </motion.p>

        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                '0 0 25px rgba(59,130,246,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({
                  behavior: 'smooth',
                })
            }
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <a
            href="/Hritik_Arora_Resume.pdf"
            download
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-secondary/50 backdrop-blur-sm hover:bg-secondary rounded-lg font-medium flex items-center gap-2 border border-border/50"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({
                  behavior: 'smooth',
                })
            }
            className="px-6 py-3 bg-secondary/50 backdrop-blur-sm hover:bg-secondary rounded-lg font-medium flex items-center gap-2 border border-border/50"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}

        <div className="flex gap-4 mt-8 justify-center lg:justify-start">
          <a
            href="https://github.com/hritikarora28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/hritik-arora-b11a2a1b5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Right Image */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30" />

          <img
            src="/profile.jpg"
            alt="Hritik Arora"
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500/20 shadow-2xl"
          />
        </div>
      </motion.div>
    </div>

    {/* Stats */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-16">
      <div className="text-center">
        <h3 className="text-3xl font-bold">2+</h3>
        <p className="text-sm text-muted-foreground">
          Years Experience
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold">15+</h3>
        <p className="text-sm text-muted-foreground">
          Projects Built
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold">50%</h3>
        <p className="text-sm text-muted-foreground">
          Automation Gain
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold">100%</h3>
        <p className="text-sm text-muted-foreground">
          Production Focus
        </p>
      </div>
    </div>

    {/* Tech Badges */}

    <div className="flex flex-wrap justify-center gap-3 pt-10">
      {techBadges.map((tech) => (
        <div
          key={tech}
          className="px-4 py-2 bg-secondary/30 backdrop-blur-sm rounded-full text-sm font-mono border border-border/30 hover:border-blue-500/50 transition-all"
        >
          {tech}
        </div>
      ))}
    </div>
  </div>
</section>

);
}
