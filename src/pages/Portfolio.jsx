import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Smartphone, Globe, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'FoodieHub',
    category: 'mobile',
    description: 'On-demand food delivery app with real-time tracking and AI-powered recommendations',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=800&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    color: '#FF6B6B'
  },
  {
    id: 2,
    title: 'HealthTrack Pro',
    category: 'mobile',
    description: 'Comprehensive health monitoring app with wearable integration',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=800&fit=crop',
    technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    color: '#4ECDC4'
  },
  {
    id: 3,
    title: 'ShopEase',
    category: 'web',
    description: 'Modern e-commerce platform with AR product visualization',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: '#9B59B6'
  },
  {
    id: 4,
    title: 'FinanceGuru',
    category: 'mobile',
    description: 'Personal finance management with AI-driven insights',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=800&fit=crop',
    technologies: ['Swift', 'Python', 'AWS'],
    color: '#3498DB'
  },
  {
    id: 5,
    title: 'EduLearn',
    category: 'web',
    description: 'Interactive e-learning platform with live classes',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=800&fit=crop',
    technologies: ['React', 'WebRTC', 'Redis'],
    color: '#E67E22'
  },
  {
    id: 6,
    title: 'TravelMate',
    category: 'mobile',
    description: 'Travel planning app with AI itinerary suggestions',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=800&fit=crop',
    technologies: ['React Native', 'GraphQL', 'GCP'],
    color: '#1ABC9C'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'web', label: 'Web Apps', icon: Globe }
];

export default function Portfolio() {
  const { isDark, colors } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured <span style={{ color: colors.secondary }}>Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Explore our portfolio of successful projects across various industries
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
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
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - 3D Phone Mockups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02
                }}
                className={`relative p-6 rounded-3xl transition-all duration-500 ${
                  isDark 
                    ? 'bg-gray-800/50 border border-gray-700/50' 
                    : 'bg-gray-50 border border-gray-100'
                }`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto w-48 mb-6" style={{ perspective: '1000px' }}>
                  <motion.div
                    animate={{ 
                      rotateY: [0, 5, 0, -5, 0],
                      rotateX: [0, 2, 0, -2, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Phone Frame */}
                    <div 
                      className="relative rounded-[3rem] p-2 shadow-2xl"
                      style={{ 
                        background: `linear-gradient(145deg, #1a1a1a, #2d2d2d)`,
                        boxShadow: `0 25px 50px -12px ${project.color}40`
                      }}
                    >
                      {/* Screen */}
                      <div className="rounded-[2.5rem] overflow-hidden bg-black">
                        {/* Notch */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                        
                        {/* App Screen */}
                        <div className="relative h-80 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient Overlay */}
                          <div 
                            className="absolute inset-0 opacity-30"
                            style={{
                              background: `linear-gradient(to top, ${project.color}, transparent)`
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reflection */}
                    <div 
                      className="absolute -bottom-20 left-0 right-0 h-20 opacity-20 blur-sm"
                      style={{
                        background: `linear-gradient(to bottom, ${project.color}40, transparent)`,
                        transform: 'rotateX(180deg) scaleY(-0.5)'
                      }}
                    />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="text-center">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech, j) => (
                      <span 
                        key={j}
                        className={`px-3 py-1 rounded-full text-xs ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Button
                    variant="ghost"
                    className="group/btn"
                    style={{ color: colors.secondary }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}