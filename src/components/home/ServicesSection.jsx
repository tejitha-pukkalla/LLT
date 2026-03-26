import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Code, Megaphone, Palette, Cloud,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications, e-commerce platforms, and enterprise solutions built with cutting-edge technologies.',
    slug: 'web-development',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    slug: 'mobile-apps',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from CRM systems to automation tools.',
    slug: 'software-development',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies including SEO, PPC, social media, and content marketing.',
    slug: 'digital-marketing',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality for memorable digital experiences.',
    slug: 'ui-ux-design',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud.',
    slug: 'cloud-services',
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export default function ServicesSection() {
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
            Our Services
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
            What We <span style={{ color: colors.secondary }}>Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={createPageUrl(`ServiceDetail?slug=${service.slug}`)}>
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 2
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative h-full p-8 rounded-3xl transition-all duration-500 ${
                    isDark 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                      : 'bg-white hover:shadow-2xl border border-gray-100'
                  }`}
                  style={{
                    backdropFilter: 'blur(10px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div 
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${service.gradient}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Glow Effect */}
                  <div 
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                    style={{ background: `linear-gradient(135deg, ${service.gradient})` }}
                  />

                  {/* Icon */}
                  <div 
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient}`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div 
                    className="flex items-center gap-2 font-medium transition-colors"
                    style={{ color: colors.secondary }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}