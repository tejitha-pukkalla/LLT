import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../components/theme/ThemeContext';

export default function Terms() {
  const { isDark, colors } = useTheme();

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the services provided by LogicLife Technologies, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: 'Services',
      content: `LogicLife Technologies provides software development, web development, mobile app development, and related digital services. The specific scope, deliverables, and timeline of each project will be outlined in a separate agreement or statement of work.`
    },
    {
      title: 'Intellectual Property',
      content: `Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement. LogicLife Technologies retains the right to use general concepts, techniques, and knowledge gained during the project for future work.`
    },
    {
      title: 'Payment Terms',
      content: `Payment terms will be specified in individual project agreements. Late payments may result in suspension of services and may incur additional fees. All payments are non-refundable unless otherwise stated in writing.`
    },
    {
      title: 'Confidentiality',
      content: `Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This obligation continues even after the completion of the project.`
    },
    {
      title: 'Limitation of Liability',
      content: `LogicLife Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.`
    },
    {
      title: 'Warranty',
      content: `We provide a limited warranty period for bug fixes as specified in individual project agreements. This warranty does not cover issues arising from modifications made by the client or third parties.`
    },
    {
      title: 'Termination',
      content: `Either party may terminate a project with written notice as specified in the project agreement. Upon termination, the client is responsible for payment of all work completed up to the termination date.`
    },
    {
      title: 'Governing Law',
      content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.`
    },
    {
      title: 'Changes to Terms',
      content: `LogicLife Technologies reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.`
    }
  ];

  return (
    <div className={`pt-32 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Terms & Conditions
          </h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Last updated: January 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
          <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Welcome to LogicLife Technologies. These Terms and Conditions govern your use of our services and website. Please read them carefully before engaging our services.
          </p>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 
                  className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ color: colors.secondary }}
                >
                  {i + 1}. {section.title}
                </h2>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              If you have any questions about these Terms, please contact us at{' '}
              <a 
                href="mailto:legal@logiclife.tech" 
                style={{ color: colors.secondary }}
              >
                legal@logiclife.tech
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}