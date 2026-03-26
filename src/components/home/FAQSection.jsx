import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const faqs = [
  {
    question: "What services does LogicLife Technologies offer?",
    answer: "We offer comprehensive digital solutions including web development, mobile app development, custom software development, UI/UX design, digital marketing, cloud services, and IT support & maintenance."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "The timeline varies based on complexity. A simple app takes 2-3 months, while complex applications with advanced features can take 4-6 months or more. We provide detailed timelines during project planning."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to ensure your application runs smoothly."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Angular, Vue.js for frontend; Node.js, Python, .NET for backend; React Native, Flutter for mobile; AWS, Azure, GCP for cloud; and modern databases like PostgreSQL, MongoDB, and Redis."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and agile methodologies. Our QA team performs rigorous testing at every stage of development."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. The best model depends on your project scope and requirements."
  }
];

export default function FAQSection() {
  const { isDark, colors } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
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
            FAQ
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
            Frequently Asked <span style={{ color: colors.secondary }}>Questions</span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden transition-all ${
                isDark 
                  ? 'bg-gray-800/50 border border-gray-700/50' 
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <HelpCircle className="w-5 h-5" style={{ color: colors.secondary }} />
                  </div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: colors.secondary }}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-5 pl-20 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}