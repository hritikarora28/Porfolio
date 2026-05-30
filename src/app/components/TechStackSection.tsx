import { motion } from 'motion/react';

export function TechStackSection() {
  const techStack = {
    Frontend: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
    Backend: [
      'Node.js',
      'NestJS',
      'Express.js',
      'Django',
    ],
    Database: [
      'MongoDB',
      'MySQL',
      'SQLite',
    ],
    Cloud: [
      'AWS Lambda',
    ],
    Tools: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Postman',
      'Jira',
    ],
    Concepts: [
      'REST APIs',
      'Microservices',
      'JWT Authentication',
      'DTO Pattern',
      'CI/CD',
      'Observability',
      'Logging',
      'Agile',
    ],
  };

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    Frontend: { bg: 'from-blue-500/20 to-cyan-500/20', text: 'text-blue-500', border: 'border-blue-500/20' },
    Backend: { bg: 'from-green-500/20 to-emerald-500/20', text: 'text-green-500', border: 'border-green-500/20' },
    Database: { bg: 'from-purple-500/20 to-pink-500/20', text: 'text-purple-500', border: 'border-purple-500/20' },
    Cloud: { bg: 'from-orange-500/20 to-red-500/20', text: 'text-orange-500', border: 'border-orange-500/20' },
    Tools: { bg: 'from-yellow-500/20 to-amber-500/20', text: 'text-yellow-500', border: 'border-yellow-500/20' },
    Concepts: { bg: 'from-indigo-500/20 to-violet-500/20', text: 'text-indigo-500', border: 'border-indigo-500/20' },
  };

  return (
    <section id="tech-stack" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700 }}
          >
            Tech Stack
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Technologies, frameworks, and tools I use to build scalable, reliable, and maintainable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies], i) => {
            const colors = categoryColors[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border}`}
              >
                <h3
                  className={`text-xl mb-4 ${colors.text}`}
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, j) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * j }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-accent/50 text-sm text-foreground/70 border border-border/30"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
