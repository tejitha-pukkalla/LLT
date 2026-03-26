import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Palette, Cloud, BarChart3, Users
} from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const experts = [
  {
    icon: Code2,
    title: 'Full Stack Developers',
    description: 'Experts in React, Node.js, Python, and modern frameworks',
    count: '15+'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Engineers',
    description: 'Specialists in iOS, Android, React Native, and Flutter',
    count: '10+'
  },
  {
    icon: Palette,
    title: 'UI/UX Designers',
    description: 'Creating intuitive and beautiful user experiences',
    count: '8+'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Experts',
    description: 'AWS, Azure, GCP certified professionals',
    count: '6+'
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing Specialists',
    description: 'SEO, PPC, and growth hacking experts',
    count: '5+'
  },
  {
    icon: Users,
    title: 'Project Managers',
    description: 'Agile certified delivery excellence',
    count: '4+'
  }
];

export default function ExpertsSection() {
  const { isDark, colors } = useTheme();

  return (
    <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ 
                background: `${colors.secondary}20`,
                color: colors.secondary
              }}
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Meet Our <span style={{ color: colors.secondary }}>Experts</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Our team consists of skilled developers, designers, and technology specialists 
              delivering scalable digital solutions across industries. With years of experience 
              and passion for innovation, we turn complex challenges into elegant solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-12"
            >
              {[
                { value: '50+', label: 'Team Members' },
                { value: '8+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div key={i}>
                  <div 
                    className="text-4xl font-bold"
                    style={{ color: colors.secondary }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Expert Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl transition-all ${
                  isDark 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <expert.icon className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: colors.secondary }}
                  >
                    {expert.count}
                  </span>
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {expert.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {expert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}