import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, ShoppingBag, GraduationCap, Heart, Building2, Plane,
  Banknote, Factory, Utensils, Car
} from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const industries = [
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Interactive gaming solutions with cutting-edge technology',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-Commerce',
    description: 'Scalable e-commerce platforms for modern retail',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: GraduationCap,
    title: 'Education & E-Learning',
    description: 'Digital learning experiences for global learners',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Healthcare & Fitness',
    description: 'Smart health solutions powered by AI and IoT',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Banknote,
    title: 'Fintech & Banking',
    description: 'Secure financial technology solutions',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'PropTech solutions for modern real estate',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Digital experiences for travel industry',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industry 4.0 and smart manufacturing solutions',
    gradient: 'from-gray-500 to-slate-600'
  }
];

export default function IndustriesSection() {
  const { isDark, colors } = useTheme();

  return (
    <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            Industries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Industries We <span style={{ color: colors.secondary }}>Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            We deliver tailored solutions across diverse industries, 
            understanding unique challenges and opportunities
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-6 rounded-2xl transition-all duration-500 overflow-hidden ${
                isDark 
                  ? 'bg-gray-800/50 hover:bg-gray-800' 
                  : 'bg-white hover:shadow-2xl'
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${industry.gradient}`}
              />

              {/* Icon */}
              <div 
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${industry.gradient}`}
              >
                <industry.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {industry.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}