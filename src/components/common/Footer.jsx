import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import Logo from './Logo';
import { createPageUrl } from '@/utils';

const quickLinks = [
  { label: 'About Us', path: 'About' },
  { label: 'Services', path: 'Services' },
  { label: 'Portfolio', path: 'Portfolio' },
  { label: 'Careers', path: 'Careers' },
  { label: 'Contact', path: 'Contact' },
];

const services = [
  { label: 'Web Development', path: 'ServiceDetail?slug=web-development' },
  { label: 'Mobile Apps', path: 'ServiceDetail?slug=mobile-apps' },
  { label: 'Software Development', path: 'ServiceDetail?slug=software-development' },
  { label: 'Digital Marketing', path: 'ServiceDetail?slug=digital-marketing' },
  { label: 'UI/UX Design',         path: 'ServiceDetail?slug=ui-ux-design' },
  { label: 'Cloud Services',       path: 'ServiceDetail?slug=cloud-services' },
  { label: 'Cybersecurity',        path: 'ServiceDetail?slug=cybersecurity' },
  { label: 'Support & Maintenance',path: 'ServiceDetail?slug=support-maintenance' },
];

export default function Footer() {
  const { isDark, colors } = useTheme();

  return (
    <footer className={`relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at 20% 80%, ${colors.secondary}, transparent 50%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo size="md" animated={false} />
            <p className={`mt-6 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Transforming ideas into digital reality. We build scalable, secure, and high-performance digital solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: MessageCircle, href: "https://wa.me/919502924788" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-2.5 rounded-full transition-colors ${
                    isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={createPageUrl(link.path)}
                    className={`text-sm flex items-center gap-1 group transition-colors ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    to={createPageUrl(service.path)}
                    className={`text-sm flex items-center gap-1 group transition-colors ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {service.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+919502924788"
                  className={`flex items-start gap-3 text-sm transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Phone className="w-4 h-4 mt-0.5" style={{ color: colors.secondary }} />
                  <span>+91 95029 24788</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bdm@logiclifetechnologies.com"
                  className={`flex items-start gap-3 text-sm transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Mail className="w-4 h-4 mt-0.5" style={{ color: colors.secondary }} />
                  <span>bdm@logiclifetechnologies.com</span>
                </a>
              </li>
              <li>
                <div className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.secondary }} />
                  <span>123 Tech Park, Innovation District, Bangalore, India - 560001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`} />

        {/* Sub Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} LogicLife Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              to={createPageUrl('PrivacyPolicy')}
              className={`text-sm transition-colors ${
                isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Privacy Policy
            </Link>
            <Link 
              to={createPageUrl('Terms')}
              className={`text-sm transition-colors ${
                isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}