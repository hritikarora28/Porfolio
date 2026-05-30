import { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Download,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'

  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();


    try {
      setStatus('sending');

      await emailjs.send(
        'service_g77kixj',
        'template_uexm47f',
        formData,
        'TVbhQBLDxoYJhM7F2'
      );

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }


  };

  return (<section id="contact" className="py-20"> <div className="max-w-4xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    > <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Let's Build Reliable{' '} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Software Together </span> </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
        Open to Software Engineer, Backend Engineer,
        Full Stack Engineer, and Product Engineering opportunities.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-border/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

      <div className="relative z-10">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 backdrop-blur-sm"
          >
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Mail className="w-6 h-6 text-blue-500" />
            </div>

            <div>
              <div className="text-sm text-muted-foreground">
                Email
              </div>

              <a
                href="mailto:hritikarora2019@gmail.com"
                className="font-medium hover:text-blue-500 transition-colors"
              >
                hritikarora2019@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 backdrop-blur-sm"
          >
            <div className="p-3 rounded-lg bg-purple-500/20">
              <MapPin className="w-6 h-6 text-purple-500" />
            </div>

            <div>
              <div className="text-sm text-muted-foreground">
                Location
              </div>

              <div className="font-medium">
                Pune, Maharashtra, India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            >
              <Send className="w-5 h-5" />

              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}
            </motion.button>

            <a
              href="/Hritik_Arora_Resume.pdf"
              download
              className="flex-1"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 border border-border rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-secondary/50 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </a>
          </div>

          {status === 'success' && (
            <p className="text-green-500 text-center">
              Message sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-500 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-4">
            Connect with me
          </p>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/hritikarora28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover:text-purple-500"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/hritik-arora-b11a2a1b5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover:text-blue-500"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:hritikarora2019@gmail.com"
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover:text-green-500"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  </section>


  );
}
