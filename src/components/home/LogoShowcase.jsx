import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import Logo from '../common/Logo';

const leftServices = [
  'Web Development',
  'Mobile Apps',
  'Software Solutions',
  'Cloud Services',
  'DevOps',
  'API Integration'
];

const rightServices = [
  'UI/UX Design',
  'Digital Marketing',
  'SEO Optimization',
  'E-Commerce',
  'Support & Maintenance',
  'Consulting'
];

export default function LogoShowcase() {
  const { isDark, colors } = useTheme();

  return (
    <section 
      className={`py-20 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          {/* Left Scrolling Text */}
          <div className="hidden md:flex flex-col gap-4 overflow-hidden h-[200px]">
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="space-y-4"
            >
              {[...leftServices, ...leftServices].map((service, i) => (
                <div
                  key={i}
                  className={`text-right text-lg font-medium whitespace-nowrap ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Center Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className="w-48 h-48 rounded-full border-2 border-dashed"
                style={{ borderColor: `${colors.secondary}30` }}
              />
            </motion.div>

            {/* Logo Container */}
            <div 
              className={`relative z-10 p-8 rounded-full ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <Logo size="lg" animated={true} showText={false} />
            </div>

            {/* Glow Effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-20"
              style={{ background: colors.secondary }}
            />
          </motion.div>

          {/* Right Scrolling Text */}
          <div className="hidden md:flex flex-col gap-4 overflow-hidden h-[200px]">
            <motion.div
              animate={{ y: ['-50%', '0%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="space-y-4"
            >
              {[...rightServices, ...rightServices].map((service, i) => (
                <div
                  key={i}
                  className={`text-left text-lg font-medium whitespace-nowrap ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mt-12 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          <span style={{ color: colors.secondary }}>Where clarity meets tech</span> — 
          Delivering excellence in digital solutions
        </motion.p>
      </div>
    </section>
  );
}