import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

export default function TopBar() {
  const { isDark, colors } = useTheme();
  
  const tickerText = "Transforming Ideas into Digital Reality • Web Development • Mobile Apps • Software Solutions • Digital Marketing • Cloud Services • ";
  
  return (
    <div 
      className="relative overflow-hidden py-2 px-4"
      style={{ 
        background: isDark 
          ? `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` 
          : `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-6 text-white/90 text-sm">
          <a 
            href="tel:+919876543210" 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 98765 43210</span>
          </a>
          <a 
            href="mailto:info@logiclife.tech" 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@logiclife.tech</span>
          </a>
        </div>

        {/* Animated Ticker - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 overflow-hidden w-1/3 hidden lg:block">
          <motion.div
            className="whitespace-nowrap text-white/70 text-xs"
            animate={{ x: [0, -500] }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {tickerText.repeat(3)}
          </motion.div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 ml-auto">
          {[
            { icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp" },
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Facebook, href: "#", label: "Facebook" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all hover:scale-110"
              whileHover={{ y: -2 }}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}