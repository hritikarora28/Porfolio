import { motion } from 'motion/react';
import { Briefcase, TrendingDown, Activity, Users, Award } from 'lucide-react';

const achievements = [
  { icon: TrendingDown, value: '50%', label: 'Reduced manual reporting effort' },
  { icon: Activity, label: 'Improved production issue diagnosis' },
  { icon: Award, label: 'Increased order-processing reliability' },
  { icon: Users, label: 'Enhanced customer data consistency' },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:pl-20 mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-8 w-5 h-5 bg-blue-500 rounded-full border-4 border-background hidden md:block" />

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/20">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Software Engineer</h3>
                  <p className="text-lg text-blue-500 font-medium mb-2">Wipro</p>
                  <p className="text-sm text-muted-foreground">
                    Enterprise Commerce & Platform Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">2024 - Present</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold">Key Responsibilities & Achievements</h4>
                <ul className="space-y-3">
                  {[
                    'Developed and maintained backend services for Shopify-integrated e-commerce platforms using Node.js and NestJS.',
                    'Automated operational reporting workflows using AWS Lambda, reducing manual effort by approximately 50%.',
                    'Built customer profile synchronization services and validation workflows to improve cross-system data consistency.',
                    'Enhanced platform observability using structured logging and traceable event identifiers.',
                    'Improved order-processing reliability through retry mechanisms and recovery workflows.',
                    'Delivered coupon and voucher lifecycle enhancements including coupon voiding functionality.',
                    'Collaborated with cross-functional teams to deliver production-ready commerce features.'
                  ].map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                      <span className="text-foreground/80">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievement Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border/30 text-center"
                  >
                    <achievement.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    {achievement.value && (
                      <div className="text-xl font-bold text-blue-500 mb-1">
                        {achievement.value}
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground leading-tight">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
