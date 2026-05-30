import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  CreditCard,
  AppWindow,
} from 'lucide-react';

const projects = [
  {
    icon: ShoppingCart,
    title: 'Enterprise Commerce Platform',
    description:
      'Built and maintained production-grade backend services for a Shopify-integrated commerce platform, supporting customer management, order processing, coupon workflows, synchronization services, and operational automation.',
    technologies: [
      'Node.js',
      'NestJS',
      'AWS Lambda',
      'MongoDB',
      'REST APIs',
    ],
    github: 'https://github.com/hritikarora28/shop',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'MyFinBank',
    description:
      'Full-stack digital banking platform featuring secure authentication, money transfers, loan processing, fixed deposits, recurring deposits, and administrative controls.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    features: [
      'Authentication',
      'Loan Management',
      'Transfers',
      'Deposits',
      'Role-Based Access',
    ],
    github: 'https://github.com/hritikarora28/Myfinbank-backend',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: AppWindow,
    title: 'App Store Platform',
    description:
      'Application marketplace platform enabling software publishing, download analytics, role-based permissions, and private/public application visibility management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/hritikarora28/AppstoreBackend',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Projects() {
  return (<section id="projects" className="py-20"> <div className="max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    > <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Featured{' '} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects </span> </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Enterprise platforms, backend systems, and full-stack applications
        built for real-world business workflows.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{ y: -5 }}
          className="group relative p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </a>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-secondary/50 text-sm font-mono border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {'features' in project && project.features && (
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                  Key Features
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-blue-500/10 text-sm text-blue-500 border border-blue-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  </section>


  );
}
