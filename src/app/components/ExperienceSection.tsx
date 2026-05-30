import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Zap, BarChart3, Shield } from 'lucide-react';

export function ExperienceSection() {
  const highlights = [
    'Developed backend services for Shopify-integrated e-commerce systems',
    'Built APIs using Node.js and NestJS',
    'Automated operational reporting using AWS Lambda',
    'Designed customer synchronization workflows',
    'Improved platform observability through structured logging',
    'Implemented reliability and recovery mechanisms',
    'Delivered coupon and voucher lifecycle enhancements',
  ];

  const metrics = [
    { icon: TrendingUp, value: '50%', label: 'Reduced manual reporting effort' },
    { icon: Zap, value: 'Enhanced', label: 'Production issue diagnosis' },
    { icon: BarChart3, value: 'Increased', label: 'Order-processing reliability' },
    { icon: Shield, value: 'Improved', label: 'Customer data consistency' },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
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
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-background shadow-lg shadow-blue-500/50" />

            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/40 via-accent/20 to-transparent backdrop-blur-sm border border-border/40">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Briefcase className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl mb-1"
                      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                    >
                      Software Engineer
                    </h3>
                    <div className="text-lg text-foreground/70 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Wipro
                    </div>
                    <div className="text-sm text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                      2023 - Present
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Achievement Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/30">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-accent/30"
                    >
                      <metric.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <div
                          className="text-sm font-semibold text-foreground"
                          style={{ fontFamily: 'Geist, sans-serif' }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {metric.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
