import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../theme/ThemeContext';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  const { isDark, colors } = useTheme();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{ background: colors.accent }}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: colors.highlight }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your
            <br />
            Business Digitally?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
          >
            Let's discuss your project and see how we can help you achieve your goals.
            Get a free consultation today!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-full bg-white text-gray-900 hover:bg-white/90 font-medium group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/919502924788" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 rounded-full border-white/30 text-white hover:bg-white/10 font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <a 
              href="tel:+919502924788"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 95029 24788</span>
            </a>
            <a 
              href="mailto:bdm@logiclifetechnologies.com"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>bdm@logiclifetechnologies.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}