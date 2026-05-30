import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const techBadges = [
    'Node.js',
    'NestJS',
    'React',
    'Next.js',
    'AWS',
    'MongoDB',
    'TypeScript',
    'GitHub Actions',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm border border-border/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-foreground/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Currently Software Engineer at Wipro
            </span>
            <Briefcase className="w-4 h-4 text-foreground/60" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700 }}
        >
          Hritik Arora
        </motion.h1>

        {/* Role */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl mb-4 text-foreground/70"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
        >
          Software Engineer
        </motion.div>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-6 text-foreground/60 max-w-3xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
        >
          Building scalable backend systems, enterprise e-commerce platforms, and modern web applications.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg mb-12 text-foreground/50 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Software Engineer with experience developing production-grade applications using Node.js, NestJS, React.js, Next.js, AWS, and MongoDB. Currently working on enterprise commerce systems, customer data workflows, automation services, and platform reliability improvements.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:hritik@example.com"
            className="p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Floating Tech Badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techBadges.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-lg bg-accent/30 backdrop-blur-md border border-border/30 text-sm text-foreground/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
