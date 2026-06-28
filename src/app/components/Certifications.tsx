import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Applied Software Engineering Fundamentals',
    issuer: 'Coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/S42C6HUE7TU7',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'DevOps, Cloud and Agile Foundations',
    issuer: 'Coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/73RK8NFT9H4L',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    credentialUrl: 'https://www.credly.com/badges/0b34a4c0-d592-4c1c-bdbd-8b35ec020dc6/linked_in_profile',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Introduction to Web Development',
    issuer: 'Coursera',
    credentialUrl: '{http://coursera.org/verify/4YF77475963J',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Certifications() {
  return (<section id="certifications" className="py-20"> <div className="max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    > <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Certifications &{' '} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Credentials </span> </h2>


      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Continuous learning through software engineering, cloud computing,
        DevOps, and modern web development programs.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{
            scale: 1.02,
            y: -5,
          }}
          className="group relative p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
          />

          <div className="relative z-10 flex items-start gap-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} flex-shrink-0`}
            >
              <Award className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold leading-tight">
                  {cert.title}
                </h3>

                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {cert.issuer}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Credential
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border/50"
    >
      <h3 className="text-2xl font-bold mb-4">
        Continuous Learning
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        I actively invest in expanding my knowledge across backend
        engineering, cloud technologies, DevOps practices, software
        architecture, and full-stack application development to stay aligned
        with modern industry standards.
      </p>
    </motion.div>
  </div>
  </section>

  );
}
