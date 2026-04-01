import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Linkedin, Facebook, X } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const socials = [
  { icon: MessageCircle, href: "https://wa.me/919502924788", label: "WhatsApp", color: "#25D366" },
  { icon: Instagram, href: "https://www.instagram.com/logiclifetechnologies/", label: "Instagram", color: "#E4405F" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
];

export default function FloatingSocial() {
  const { isDark, colors } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop - Right Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.5 }}
            whileHover={{ scale: 1.1, x: -5 }}
            className="group relative"
          >
            <div 
              className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
              }`}
              style={{ 
                borderRight: `3px solid ${social.color}` 
              }}
            >
              <social.icon 
                className="w-5 h-5 transition-colors" 
                style={{ color: social.color }}
              />
            </div>
            
            {/* Tooltip */}
            <span 
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ background: social.color }}
            >
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile - Bottom Floating */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 flex flex-col gap-2"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-3 rounded-full shadow-lg"
                  style={{ background: social.color }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.9 }}
          className="p-4 rounded-full shadow-xl text-white"
          style={{ 
            background: isExpanded 
              ? isDark ? '#374151' : '#6B7280'
              : `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` 
          }}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </div>
    </>
  );
}