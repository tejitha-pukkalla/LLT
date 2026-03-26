import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../components/theme/ThemeContext';

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'database', label: 'Databases' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai_ml', label: 'AI & ML' },
  { id: 'tools', label: 'Tools' }
];

const technologies = {
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'SASS', icon: '💅' },
    { name: 'Redux', icon: '🔄' }
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: '.NET', icon: '🔷' },
    { name: 'Java', icon: '☕' },
    { name: 'Go', icon: '🐹' },
    { name: 'PHP/Laravel', icon: '🐘' },
    { name: 'Ruby on Rails', icon: '💎' },
    { name: 'GraphQL', icon: '◈' }
  ],
  mobile: [
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Swift', icon: '🍎' },
    { name: 'Kotlin', icon: '🤖' },
    { name: 'Ionic', icon: '⚡' },
    { name: 'Xamarin', icon: '💠' }
  ],
  database: [
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Elasticsearch', icon: '🔍' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'DynamoDB', icon: '📊' },
    { name: 'Supabase', icon: '⚡' }
  ],
  cloud: [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔵' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'GitHub Actions', icon: '⚙️' }
  ],
  ai_ml: [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'scikit-learn', icon: '📊' },
    { name: 'LangChain', icon: '🔗' }
  ],
  tools: [
    { name: 'Git', icon: '📝' },
    { name: 'Jira', icon: '📋' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📮' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Slack', icon: '💬' },
    { name: 'Notion', icon: '📓' },
    { name: 'Vercel', icon: '▲' }
  ]
};

export default function Technologies() {
  const { isDark, colors } = useTheme();
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
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
            Our Tech Stack
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technologies We
            <span style={{ color: colors.secondary }}> Use</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            We leverage the latest technologies and frameworks to build 
            scalable, secure, and high-performance solutions
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'text-white'
                  : isDark 
                    ? 'bg-gray-800 text-gray-400 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              style={{
                background: activeCategory === cat.id 
                  ? `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
                  : undefined
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies[activeCategory]?.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`p-6 rounded-2xl text-center transition-all cursor-pointer ${
                  isDark 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100'
                }`}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Why These Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-20 p-8 rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
          <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why We Choose These Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Performance', 
                desc: 'Technologies optimized for speed and efficiency' 
              },
              { 
                title: 'Scalability', 
                desc: 'Solutions that grow with your business' 
              },
              { 
                title: 'Security', 
                desc: 'Industry-standard security practices' 
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: colors.secondary }}
                >
                  {item.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}