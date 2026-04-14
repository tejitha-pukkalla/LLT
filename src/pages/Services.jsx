import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Code, Megaphone, Palette, Cloud,
  Shield, Headphones, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';
import { createPageUrl } from '@/utils';
import SEOHead from '../components/common/SEOHead';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom web applications, e-commerce platforms, and enterprise solutions built with cutting-edge technologies.',
    features: ['React/Angular/Vue.js', 'Node.js/Python/.NET', 'PostgreSQL/MongoDB', 'REST/GraphQL APIs'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    slug: 'mobile-apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    features: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Software Development',
    slug: 'software-development',
    description: 'Custom software solutions tailored to your business needs, from CRM systems to automation tools.',
    features: ['ERP Systems', 'CRM Solutions', 'Automation Tools', 'Legacy Modernization'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Data-driven marketing strategies including SEO, PPC, social media, and content marketing.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Content Marketing'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'User-centered design that combines aesthetics with functionality for memorable digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    slug: 'cloud-services',
    description: 'Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud.',
    features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD Pipeline', 'Cloud Migration'],
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training'],
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    slug: 'support-maintenance',
    description: '24/7 technical support and maintenance services to keep your applications running smoothly.',
    features: ['24/7 Support', 'Bug Fixes', 'Performance Optimization', 'Updates & Upgrades'],
    gradient: 'from-teal-500 to-cyan-500'
  }
];

export default function Services() {
  const { isDark, colors } = useTheme();

  return (
    <>
    <SEOHead page="services" />
    <div className={`pt-32 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ 
              background: `${colors.secondary}20`,
              color: colors.secondary
            }}
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Comprehensive Digital
            <span style={{ color: colors.secondary }}> Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            From concept to deployment, we provide end-to-end digital solutions 
            that drive business growth and innovation
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
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
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`group h-full p-8 rounded-3xl transition-all duration-500 ${
                    isDark 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                      : 'bg-gray-50 hover:bg-white hover:shadow-2xl border border-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div 
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, j) => (
                          <div 
                            key={j}
                            className={`flex items-center gap-2 text-sm ${
                              isDark ? 'text-gray-500' : 'text-gray-500'
                            }`}
                          >
                            <CheckCircle2 
                              className="w-4 h-4" 
                              style={{ color: colors.secondary }} 
                            />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Learn More */}
                      <div 
                        className="flex items-center gap-2 font-medium transition-colors"
                        style={{ color: colors.secondary }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Not sure which service you need? Let's discuss your requirements.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button 
              size="lg" 
              className="rounded-full text-white"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
              }}
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
}