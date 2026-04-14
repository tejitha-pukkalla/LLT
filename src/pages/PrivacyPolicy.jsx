import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../components/theme/ThemeContext';
import SEOHead from '../components/common/SEOHead';

export default function PrivacyPolicy() {
  const { isDark, colors } = useTheme();

  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to: respond to your inquiries and provide customer support; send you technical notices, updates, and administrative messages; communicate with you about products, services, and events offered by us; and monitor and analyze trends, usage, and activities.`
    },
    {
      title: 'Information Sharing',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except to provide services you've requested, comply with legal obligations, or protect our rights and safety.`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
    },
    {
      title: 'Cookies',
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`
    },
    {
      title: 'Your Rights',
      content: `You have the right to access, update, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us.`
    },
    {
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy, please contact us at bdm@logiclifetechnologies.com or call us at +919502924788.`
    }
  ];

  return (
    <>
    <SEOHead page="privacy-policy" />
    <div className={`pt-32 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Privacy Policy
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
            At LogicLife Technologies, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 
                  className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ color: colors.secondary }}
                >
                  {section.title}
                </h2>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}