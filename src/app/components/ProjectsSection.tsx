import { motion } from 'motion/react';
import { ExternalLink, Github, ShoppingCart, Building2, Store } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      icon: ShoppingCart,
      title: 'Enterprise Commerce Platform',
      description:
        'Developed and maintained backend services supporting customer management, order processing, profile synchronization, coupon management, and operational automation.',
      technologies: ['Node.js', 'NestJS', 'AWS Lambda', 'MongoDB', 'REST APIs'],
      features: [],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Building2,
      title: 'MyFinBank',
      description:
        'Full-stack banking platform supporting account management, money transfers, loans, deposits, and EMI calculations.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: [
        'Authentication',
        'Loan Management',
        'Transfers',
        'Deposits',
        'Role-Based Access',
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Store,
      title: 'App Store Platform',
      description:
        'Application marketplace platform supporting app publishing, role-based access control, download tracking, and application visibility management.',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      features: [],
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500/20',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
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
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Production-grade applications demonstrating expertise in full-stack development, backend engineering, and system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} group relative overflow-hidden`}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/0 to-background/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`p-3 rounded-lg bg-accent/50 border ${project.borderColor} w-fit mb-4`}>
                  <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-foreground/70 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.description}
                </p>

                {/* Features */}
                {project.features.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${project.iconColor.replace('text-', 'bg-')}`} />
                        <span className="text-xs text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-accent/50 text-xs text-foreground/70 border border-border/30"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <button
                    className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors border border-border/30"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors border border-border/30"
                    aria-label="View code"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
