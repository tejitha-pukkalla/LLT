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
  className={`min-h-screen flex items-center justify-center overflow-hidden ${
    isDark ? 'bg-gray-950' : 'bg-white'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="flex items-center justify-center gap-20 lg:gap-40 scale-110 lg:scale-125">

          {/* Left Scrolling Text — bigger, bolder, colored */}
          <div className="hidden md:flex flex-col overflow-hidden h-[280px]">
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="space-y-5"
            >
              {[...leftServices, ...leftServices].map((service, i) => (
                <div
                  key={i}
                  className="text-right text-xl font-semibold whitespace-nowrap"
                  style={{
                    color: isDark
                      ? i % 2 === 0 ? colors.secondary : 'rgba(255,255,255,0.5)'
                      : i % 2 === 0 ? colors.secondary : 'rgba(0,0,0,0.35)',
                  }}
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Center Logo — much bigger */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="w-72 h-72 rounded-full border-2 border-dashed"
                style={{ borderColor: `${colors.secondary}40` }}
              />
            </motion.div>

            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="w-56 h-56 rounded-full border"
                style={{ borderColor: `${colors.secondary}25` }}
              />
            </motion.div>

            {/* Logo Container — bigger padding + size */}
            <div
              className={`relative z-10 p-10 rounded-full ${
                isDark ? 'bg-gray-800/80' : 'bg-gray-50'
              }`}
            >
              <Logo size="xl" animated={true} showText={false} />
            </div>

            {/* Glow Effect */}
            <div
              className="absolute inset-0 blur-3xl opacity-25 rounded-full"
              style={{ background: colors.secondary }}
            />
          </motion.div>

          {/* Right Scrolling Text — bigger, bolder, colored */}
          <div className="hidden md:flex flex-col overflow-hidden h-[280px]">
            <motion.div
              animate={{ y: ['-50%', '0%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="space-y-5"
            >
              {[...rightServices, ...rightServices].map((service, i) => (
                <div
                  key={i}
                  className="text-left text-xl font-semibold whitespace-nowrap"
                  style={{
                    color: isDark
                      ? i % 2 === 0 ? colors.secondary : 'rgba(255,255,255,0.5)'
                      : i % 2 === 0 ? colors.secondary : 'rgba(0,0,0,0.35)',
                  }}
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tagline — bigger */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mt-14 text-xl font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <span
            style={{
              color: colors.secondary,
              fontWeight: 700,
            }}
          >
            Where clarity meets tech
          </span>
          {' '}—{' '}
          Delivering excellence in digital solutions
        </motion.p>
      </div>
    </section>
  );
}