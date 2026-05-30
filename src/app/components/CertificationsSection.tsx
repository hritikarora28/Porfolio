import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      title: 'Applied Software Engineering Fundamentals',
      issuer: 'Professional Certification',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-500/20',
    },
    {
      title: 'DevOps, Cloud and Agile Foundations',
      issuer: 'Professional Certification',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-500/20',
    },
    {
      title: 'Web Application Technologies and Django',
      issuer: 'Professional Certification',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500/20',
    },
    {
      title: 'Introduction to Web Development',
      issuer: 'Professional Certification',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-500/20',
    },
  ];

  return (
    <section className="py-24 px-6 relative">
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
            Certifications
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Professional certifications demonstrating commitment to continuous learning and technical excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${cert.gradient} backdrop-blur-sm border ${cert.borderColor} group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/0 to-background/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-accent/50 border ${cert.borderColor}`}>
                  <Award className={`w-6 h-6 ${cert.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg mb-2"
                    style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
                  >
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <CheckCircle2 className={`w-4 h-4 ${cert.iconColor}`} />
                    {cert.issuer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
