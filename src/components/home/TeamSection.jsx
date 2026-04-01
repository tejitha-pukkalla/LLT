import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Code2, Palette, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../theme/ThemeContext';
import { createPageUrl } from '@/utils';
import teamImage from '../../assets/join-team.png'; // ✅ rename చేసి assets లో పెట్టు

const skills = [
  { icon: Code2, label: 'Development', color: '#3BB3B3' },
  { icon: Palette, label: 'Design', color: '#2E8B8B' },
  { icon: LineChart, label: 'Strategy', color: '#1B365D' },
  { icon: Users, label: 'Management', color: '#00D4AA' }
];

export default function TeamSection() {
  const { isDark, colors } = useTheme();

  return (
    <section className={`py-24 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ background: `${colors.secondary}20`, color: colors.secondary }}
            >
              Join Our Team
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Be a Part of{' '}
              <span style={{ color: colors.secondary }}>Our Team</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Work alongside talented professionals who are passionate about technology
              and innovation. We foster a collaborative environment where your ideas matter
              and your growth is our priority.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}
                >
                  <div className="p-2 rounded-xl" style={{ background: `${skill.color}20` }}>
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                  </div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to={createPageUrl('Careers')}>
                <Button
                  size="lg"
                  className="rounded-full text-white group"
                  style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Join Our Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating Animation */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Dark mode: slight tinted bg behind image */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(59,179,179,0.08), rgba(27,54,93,0.18))'
                    : 'transparent',
                  padding: isDark ? '16px' : '0px',
                }}
              >
                <img
                  src={teamImage}
                  alt="Join Our Team"
                  className="w-full h-auto object-contain"
                  style={{
                    // Dark mode lo white background image dull kaadu — brightness slightly boost
                    filter: isDark
                      ? 'brightness(0.92) contrast(1.05) drop-shadow(0 8px 32px rgba(59,179,179,0.18))'
                      : 'drop-shadow(0 8px 32px rgba(59,179,179,0.13))',
                    borderRadius: '1.5rem',
                  }}
                />
              </div>
            </motion.div>

            {/* Stats Badge - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`absolute top-6 -left-5 p-4 rounded-2xl shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: colors.secondary }}>
                50+
              </div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Team Members
              </div>
            </motion.div>

            {/* Stats Badge - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className={`absolute bottom-10 -right-5 p-4 rounded-2xl shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: colors.secondary }}>
                8+
              </div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Years Experience
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}