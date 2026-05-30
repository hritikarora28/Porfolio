import { motion } from 'motion/react';
import { Github, GitCommit, Star, GitFork, Activity } from 'lucide-react';
import { useMemo } from 'react';

export function GithubSection() {
  // Mock GitHub data - in production, this would come from GitHub API
  const generateHeatmapData = () => {
    const data = [];
    const weeks = 52;
    const daysPerWeek = 7;

    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < daysPerWeek; day++) {
        data.push({
          week,
          day,
          contributions: Math.floor(Math.random() * 10),
        });
      }
    }
    return data;
  };

  const heatmapData = useMemo(() => generateHeatmapData(), []);

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-accent/30';
    if (count < 3) return 'bg-green-500/30';
    if (count < 6) return 'bg-green-500/50';
    if (count < 9) return 'bg-green-500/70';
    return 'bg-green-500';
  };

  const stats = [
    { icon: GitCommit, label: 'Contributions', value: '800+', color: 'text-green-500' },
    { icon: Star, label: 'Stars Earned', value: '50+', color: 'text-yellow-500' },
    { icon: GitFork, label: 'Repositories', value: '25+', color: 'text-blue-500' },
    { icon: Activity, label: 'Active Days', value: '200+', color: 'text-purple-500' },
  ];

  const technologies = [
    { name: 'JavaScript', percentage: 40, color: 'bg-yellow-500' },
    { name: 'TypeScript', percentage: 30, color: 'bg-blue-500' },
    { name: 'Python', percentage: 15, color: 'bg-green-500' },
    { name: 'HTML/CSS', percentage: 10, color: 'bg-orange-500' },
    { name: 'Other', percentage: 5, color: 'bg-purple-500' },
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="w-10 h-10" />
            <h2
              className="text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700 }}
            >
              GitHub Activity
            </h2>
          </div>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            A visual representation of my coding activity, contribution patterns, and technology preferences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-6 rounded-xl bg-gradient-to-br from-accent/40 to-accent/20 backdrop-blur-sm border border-border/40 text-center"
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div
                className="text-2xl mb-1"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-border/40 mb-12"
        >
          <h3
            className="text-xl mb-6"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
          >
            Contribution Heatmap
          </h3>
          <div className="overflow-x-auto">
            <div className="inline-flex flex-col gap-1 min-w-max">
              {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                <div key={day} className="flex gap-1">
                  {heatmapData
                    .filter((d) => d.day === day)
                    .map((d, i) => (
                      <motion.div
                        key={`${d.week}-${d.day}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.001 }}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(d.contributions)} border border-border/20`}
                        title={`${d.contributions} contributions`}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 text-xs text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-accent/30 border border-border/20" />
              <div className="w-3 h-3 rounded-sm bg-green-500/30 border border-border/20" />
              <div className="w-3 h-3 rounded-sm bg-green-500/50 border border-border/20" />
              <div className="w-3 h-3 rounded-sm bg-green-500/70 border border-border/20" />
              <div className="w-3 h-3 rounded-sm bg-green-500 border border-border/20" />
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Technology Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-border/40"
        >
          <h3
            className="text-xl mb-6"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600 }}
          >
            Technology Breakdown
          </h3>
          <div className="space-y-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {tech.name}
                  </span>
                  <span className="text-sm text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {tech.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.8 }}
                    className={`h-full ${tech.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
