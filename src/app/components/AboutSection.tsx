import { motion } from 'motion/react';
import { Code2, Globe, Layers, Cloud, Network, Activity } from 'lucide-react';

export function AboutSection() {
  const interests = [
    { icon: Code2, label: 'Backend Engineering' },
    { icon: Globe, label: 'Full Stack Development' },
    { icon: Network, label: 'Distributed Systems' },
    { icon: Cloud, label: 'Cloud Computing' },
    { icon: Layers, label: 'System Design' },
    { icon: Activity, label: 'Platform Reliability' },
  ];

  const stats = [
    { value: '2+', label: 'Years of Professional Experience' },
    { value: '10+', label: 'Production Systems Delivered' },
    { value: '15+', label: 'Projects Built' },
    { value: '20+', label: 'Technologies Used' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700 }}
          >
            Engineering Solutions That Scale
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-lg leading-relaxed">
              I am a Software Engineer focused on backend engineering, API development, cloud automation, and modern web applications.
            </p>
            <p className="text-lg leading-relaxed">
              My experience includes building Shopify-integrated commerce platforms, customer synchronization services, automation workflows using AWS Lambda, and highly reliable backend systems.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy solving real-world engineering challenges involving scalability, observability, system reliability, and developer productivity.
            </p>
          </div>
        </motion.div>

        {/* Interest Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {interests.map((interest, i) => (
            <motion.div
              key={interest.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-accent/50 to-accent/30 backdrop-blur-sm border border-border/30 text-center group"
            >
              <interest.icon className="w-8 h-8 mx-auto mb-3 text-foreground/60 group-hover:text-blue-500 transition-colors" />
              <div className="text-sm text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                {interest.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-6 rounded-xl bg-gradient-to-br from-accent/40 via-accent/30 to-transparent backdrop-blur-sm border border-border/40 text-center"
            >
              <div
                className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
