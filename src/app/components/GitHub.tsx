import { motion } from 'motion/react';
import {GitHubCalendar} from 'react-github-calendar';
import {
  Github,
  ExternalLink,
  Code2,
  Cloud,
  Database,
  Server,
} from 'lucide-react';

const expertise = [
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Node.js, NestJS, Express.js',
  },
  {
    icon: Cloud,
    title: 'Cloud Automation',
    description: 'AWS Lambda, CI/CD, Automation',
  },
  {
    icon: Database,
    title: 'Data & APIs',
    description: 'MongoDB, MySQL, REST APIs',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'React.js, Next.js, TypeScript',
  },
];

const featuredRepos = [
  {
    title: 'MyFinBank',
    description:
      'Full-stack banking platform with authentication, loan management, deposits, transfers, and role-based access.',
    link: 'https://github.com/hritikarora28/Myfinbank-backend',
  },
  {
    title: 'App Store Platform',
    description:
      'Application marketplace with publishing workflows, role-based access control, and download tracking.',
    link: 'https://github.com/hritikarora28',
  },
  {
    title: 'Portfolio',
    description:
      'Personal portfolio showcasing projects, experience, and software engineering expertise.',
    link: 'https://github.com/hritikarora28',
  },
];

export function GitHub() {
  return (<section id="github" className="py-20 bg-secondary/20"> <div className="max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    > <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Open Source &{' '} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Development Activity </span> </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        A snapshot of my development activity, engineering focus areas,
        and featured projects.
      </p>
    </motion.div>

    {/* GitHub Profile CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex justify-center"
    >
      <a
        href="https://github.com/hritikarora28"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform"
      >
        <Github className="w-5 h-5" />
        View GitHub Profile
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>

    {/* GitHub Calendar */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 mb-10 overflow-auto"
    >
      <h3 className="text-2xl font-semibold mb-6">
        GitHub Contribution Calendar
      </h3>

      <GitHubCalendar
        username="hritikarora28"
        colorScheme="dark"
        fontSize={14}
      />
    </motion.div>

    {/* Expertise */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {expertise.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/50"
        >
          <item.icon className="w-8 h-8 text-blue-500 mb-4" />

          <h4 className="font-semibold mb-2">
            {item.title}
          </h4>

          <p className="text-sm text-muted-foreground">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Featured Repositories */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50"
    >
      <h3 className="text-2xl font-semibold mb-6">
        Featured Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredRepos.map((repo) => (
          <a
            key={repo.title}
            href={repo.link}
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-xl bg-secondary/40 border border-border/40 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">
                {repo.title}
              </h4>

              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {repo.description}
            </p>
          </a>
        ))}
      </div>
    </motion.div>
  </div>
  </section>


  );
}
