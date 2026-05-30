import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hritik@example.com', href: 'mailto:hritik@example.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/hritikarora', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/hritikarora', href: 'https://github.com' },
  ];

  const opportunities = [
    'Software Engineer',
    'Backend Engineer',
    'Full Stack Engineer',
    'Product Engineering',
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Let's Build Reliable Software Together
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Open to Software Engineer, Backend Engineer, Full Stack Engineer, and Product Engineering opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {opportunities.map((opp, i) => (
              <motion.span
                key={opp}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {opp}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/20 backdrop-blur-sm border border-border/40">
              <h3
                className="text-2xl mb-6"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
              >
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20">
                      <info.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {info.label}
                      </div>
                      <div className="text-foreground group-hover:text-blue-500 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/20 backdrop-blur-sm border border-border/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Available for opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/20 backdrop-blur-sm border border-border/40"
          >
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-foreground/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-accent/50 border border-border/30 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-accent/50 border border-border/30 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-accent/50 border border-border/30 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-accent/50 border border-border/30 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
