import { motion } from 'motion/react';
import {
Code2,
Globe,
Database,
Cloud,
Layers,
Shield,
} from 'lucide-react';

const interestAreas = [
{ icon: Code2, title: 'Backend Engineering' },
{ icon: Globe, title: 'API Development' },
{ icon: Layers, title: 'Cloud Automation' },
{ icon: Cloud, title: 'E-Commerce Systems' },
{ icon: Database, title: 'Microservices' },
{ icon: Shield, title: 'Platform Reliability' },
];

const statistics = [
{ value: '2+', label: 'Years Experience' },
{ value: '50%', label: 'Reporting Automation Gain' },
{ value: '15+', label: 'Projects Built' },
{ value: '20+', label: 'Technologies Used' },
];

export function About() {
return ( <section id="about" className="py-20 relative overflow-hidden"> <div className="max-w-6xl mx-auto px-6">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-center mb-16"
> <h2 className="text-4xl md:text-5xl font-bold mb-4">
Engineering Solutions That{' '} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
Scale </span> </h2>
</motion.div>

```
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-center md:justify-start">
          <img
            src="/profile.jpg"
            alt="Hritik Arora"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500/20 shadow-2xl shadow-blue-500/20"
          />
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-border/50">
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            I'm a Software Engineer specializing in backend development,
            API design, and cloud-based automation. My primary expertise
            lies in building scalable services using Node.js, NestJS, and
            modern JavaScript ecosystems.
          </p>

          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            At Wipro, I contribute to Shopify-integrated e-commerce
            platforms by developing customer management services,
            order-processing workflows, coupon systems, and automation
            solutions using AWS Lambda.
          </p>

          <p className="text-lg leading-relaxed text-foreground/90">
            I enjoy solving engineering challenges around scalability,
            reliability, observability, and system performance while
            delivering maintainable software that supports real business
            operations.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-6">
          Areas of Interest
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {interestAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="p-4 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <area.icon className="w-6 h-6 mb-3 text-blue-500" />

              <p className="text-sm font-medium">
                {area.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {statistics.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
          }}
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 text-center"
        >
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>

          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border/50"
    >
      <h3 className="text-2xl font-bold mb-4">
        Current Focus
      </h3>

      <p className="text-muted-foreground">
        Building enterprise e-commerce solutions, improving backend
        reliability, developing cloud automation workflows, and
        exploring scalable distributed architectures.
      </p>
    </motion.div>
  </div>
</section>


);
}
