import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

// Placeholder client logos - in production these would come from the CMS
const clients = [
  { name: 'TechCorp', initial: 'T' },
  { name: 'InnovateLabs', initial: 'I' },
  { name: 'GlobalTech', initial: 'G' },
  { name: 'NextGen', initial: 'N' },
  { name: 'CloudFirst', initial: 'C' },
  { name: 'DataFlow', initial: 'D' },
  { name: 'SmartSolutions', initial: 'S' },
  { name: 'DigitalEdge', initial: 'DE' },
];

export default function ClientsMarquee() {
  const { isDark, colors } = useTheme();

  const ClientCard = ({ client }) => (
    <div 
      className={`flex items-center justify-center w-40 h-20 rounded-xl mx-4 transition-all ${
        isDark 
          ? 'bg-gray-800/50 hover:bg-gray-800' 
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      <div 
        className={`text-2xl font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
      >
        {client.initial}
      </div>
    </div>
  );

  return (
    <section className={`py-20 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            Trusted By
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our <span style={{ color: colors.secondary }}>Clients</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-6">
        {/* Top Row - Scroll Left */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex"
          >
            {[...clients, ...clients].map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Scroll Right */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex"
          >
            {[...clients.reverse(), ...clients].map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}