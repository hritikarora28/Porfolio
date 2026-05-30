import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          HA
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}
