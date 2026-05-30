import { motion } from 'motion/react';

const techStack = {
  Frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap'],
  Backend: ['Node.js', 'NestJS', 'Express.js', 'Django'],
  Database: ['MongoDB', 'MySQL', 'SQLite'],
  Cloud: ['AWS Lambda'],
  Tools: ['Git', 'GitHub', 'GitHub Actions', 'Postman', 'Jira'],
  Concepts: ['REST APIs', 'Microservices', 'JWT Authentication', 'DTO Pattern', 'CI/CD', 'Observability', 'Logging', 'Agile'],
};

const categoryColors: Record<string, string> = {
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-purple-500 to-pink-500',
  Database: 'from-green-500 to-emerald-500',
  Cloud: 'from-orange-500 to-yellow-500',
  Tools: 'from-red-500 to-pink-500',
  Concepts: 'from-indigo-500 to-purple-500',
};

export function TechStack() {
  return (
    <section id="tech" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${categoryColors[category]}`} />
                <h3 className="text-xl font-bold">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: categoryIndex * 0.1 + index * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm font-mono border border-border/30 hover:border-blue-500/50 transition-all cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
