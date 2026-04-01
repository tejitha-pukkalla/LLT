// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, ArrowRight, Smartphone, Globe, Code } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { useTheme } from '../components/theme/ThemeContext';

// const projects = [
//   {
//     id: 1,
//     title: 'FoodieHub',
//     category: 'mobile',
//     description: 'On-demand food delivery app with real-time tracking and AI-powered recommendations',
//     image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=800&fit=crop',
//     technologies: ['React Native', 'Node.js', 'MongoDB'],
//     color: '#FF6B6B'
//   },
//   {
//     id: 2,
//     title: 'HealthTrack Pro',
//     category: 'mobile',
//     description: 'Comprehensive health monitoring app with wearable integration',
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=800&fit=crop',
//     technologies: ['Flutter', 'Firebase', 'TensorFlow'],
//     color: '#4ECDC4'
//   },
//   {
//     id: 3,
//     title: 'ShopEase',
//     category: 'web',
//     description: 'Modern e-commerce platform with AR product visualization',
//     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop',
//     technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
//     color: '#9B59B6'
//   },
//   {
//     id: 4,
//     title: 'FinanceGuru',
//     category: 'mobile',
//     description: 'Personal finance management with AI-driven insights',
//     image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=800&fit=crop',
//     technologies: ['Swift', 'Python', 'AWS'],
//     color: '#3498DB'
//   },
//   {
//     id: 5,
//     title: 'EduLearn',
//     category: 'web',
//     description: 'Interactive e-learning platform with live classes',
//     image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=800&fit=crop',
//     technologies: ['React', 'WebRTC', 'Redis'],
//     color: '#E67E22'
//   },
//   {
//     id: 6,
//     title: 'TravelMate',
//     category: 'mobile',
//     description: 'Travel planning app with AI itinerary suggestions',
//     image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=800&fit=crop',
//     technologies: ['React Native', 'GraphQL', 'GCP'],
//     color: '#1ABC9C'
//   }
// ];

// const categories = [
//   { id: 'all', label: 'All Projects', icon: Code },
//   { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
//   { id: 'web', label: 'Web Apps', icon: Globe }
// ];

// export default function Portfolio() {
//   const { isDark, colors } = useTheme();
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filteredProjects = activeCategory === 'all' 
//     ? projects 
//     : projects.filter(p => p.category === activeCategory);

//   return (
//     <div className={`pt-32 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
//             style={{ 
//               background: `${colors.secondary}20`,
//               color: colors.secondary
//             }}
//           >
//             Our Work
//           </motion.span>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className={`text-4xl md:text-5xl font-bold mb-6 ${
//               isDark ? 'text-white' : 'text-gray-900'
//             }`}
//           >
//             Featured <span style={{ color: colors.secondary }}>Projects</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
//           >
//             Explore our portfolio of successful projects across various industries
//           </motion.p>
//         </div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex justify-center gap-3 mb-12"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
//                 activeCategory === cat.id
//                   ? 'text-white'
//                   : isDark 
//                     ? 'bg-gray-800 text-gray-400 hover:text-white' 
//                     : 'bg-gray-100 text-gray-600 hover:text-gray-900'
//               }`}
//               style={{
//                 background: activeCategory === cat.id 
//                   ? `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
//                   : undefined
//               }}
//             >
//               <cat.icon className="w-4 h-4" />
//               {cat.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid - 3D Phone Mockups */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, i) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group perspective-1000"
//             >
//               <motion.div
//                 whileHover={{ 
//                   rotateY: 5,
//                   rotateX: -5,
//                   scale: 1.02
//                 }}
//                 className={`relative p-6 rounded-3xl transition-all duration-500 ${
//                   isDark 
//                     ? 'bg-gray-800/50 border border-gray-700/50' 
//                     : 'bg-gray-50 border border-gray-100'
//                 }`}
//                 style={{
//                   transformStyle: 'preserve-3d'
//                 }}
//               >
//                 {/* Phone Mockup */}
//                 <div className="relative mx-auto w-48 mb-6" style={{ perspective: '1000px' }}>
//                   <motion.div
//                     animate={{ 
//                       rotateY: [0, 5, 0, -5, 0],
//                       rotateX: [0, 2, 0, -2, 0]
//                     }}
//                     transition={{ 
//                       duration: 6, 
//                       repeat: Infinity, 
//                       ease: "easeInOut" 
//                     }}
//                     className="relative"
//                     style={{ transformStyle: 'preserve-3d' }}
//                   >
//                     {/* Phone Frame */}
//                     <div 
//                       className="relative rounded-[3rem] p-2 shadow-2xl"
//                       style={{ 
//                         background: `linear-gradient(145deg, #1a1a1a, #2d2d2d)`,
//                         boxShadow: `0 25px 50px -12px ${project.color}40`
//                       }}
//                     >
//                       {/* Screen */}
//                       <div className="rounded-[2.5rem] overflow-hidden bg-black">
//                         {/* Notch */}
//                         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                        
//                         {/* App Screen */}
//                         <div className="relative h-80 overflow-hidden">
//                           <img 
//                             src={project.image} 
//                             alt={project.title}
//                             className="w-full h-full object-cover"
//                           />
//                           {/* Gradient Overlay */}
//                           <div 
//                             className="absolute inset-0 opacity-30"
//                             style={{
//                               background: `linear-gradient(to top, ${project.color}, transparent)`
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Reflection */}
//                     <div 
//                       className="absolute -bottom-20 left-0 right-0 h-20 opacity-20 blur-sm"
//                       style={{
//                         background: `linear-gradient(to bottom, ${project.color}40, transparent)`,
//                         transform: 'rotateX(180deg) scaleY(-0.5)'
//                       }}
//                     />
//                   </motion.div>
//                 </div>

//                 {/* Project Info */}
//                 <div className="text-center">
//                   <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                     {project.title}
//                   </h3>
//                   <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                     {project.description}
//                   </p>
                  
//                   {/* Technologies */}
//                   <div className="flex flex-wrap justify-center gap-2 mb-4">
//                     {project.technologies.map((tech, j) => (
//                       <span 
//                         key={j}
//                         className={`px-3 py-1 rounded-full text-xs ${
//                           isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
//                         }`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* View Button */}
//                   <Button
//                     variant="ghost"
//                     className="group/btn"
//                     style={{ color: colors.secondary }}
//                   >
//                     View Details
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
//                   </Button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }































import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'FoodieHub',
    category: 'mobile',
    description: 'On-demand food delivery app with real-time tracking and AI-powered recommendations',
    // Food close-up — burger / pizza delivery feel
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=800&fit=crop&crop=center',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    color: '#FF6B6B'
  },
  {
    id: 2,
    title: 'HealthTrack Pro',
    category: 'mobile',
    description: 'Comprehensive health monitoring app with wearable integration',
    // Fitness / smartwatch health tracking
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=800&fit=crop&crop=center',
    technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    color: '#4ECDC4'
  },
  {
    id: 3,
    title: 'ShopEase',
    category: 'web',
    description: 'Modern e-commerce platform with AR product visualization',
    // Online shopping / e-commerce website
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop&crop=top',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: '#9B59B6'
  },
  {
    id: 4,
    title: 'FinanceGuru',
    category: 'mobile',
    description: 'Personal finance management with AI-driven insights',
    // Finance charts / stock market / money
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=800&fit=crop&crop=center',
    technologies: ['Swift', 'Python', 'AWS'],
    color: '#3498DB'
  },
  {
    id: 5,
    title: 'EduLearn',
    category: 'web',
    description: 'Interactive e-learning platform with live classes',
    // Online learning / student at laptop / education
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&crop=top',
    technologies: ['React', 'WebRTC', 'Redis'],
    color: '#E67E22'
  },
  {
    id: 6,
    title: 'TravelMate',
    category: 'mobile',
    description: 'Travel planning app with AI itinerary suggestions',
    // Travel destination / scenic landscape / map
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=800&fit=crop&crop=center',
    technologies: ['React Native', 'GraphQL', 'GCP'],
    color: '#1ABC9C'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'web', label: 'Web Apps', icon: Globe }
];

// ── Phone Mockup (mobile projects) ──────────────────────────────────────────
function PhoneMockup({ project }) {
  return (
    <div className="relative mx-auto w-44 mb-6" style={{ perspective: '1000px' }}>
      <motion.div
        animate={{ rotateY: [0, 5, 0, -5, 0], rotateX: [0, 2, 0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Outer frame */}
        <div
          className="relative rounded-[2.8rem] p-[7px] shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
            boxShadow: `0 30px 60px -10px ${project.color}50, 0 0 0 1px #333`
          }}
        >
          {/* Side buttons */}
          <div className="absolute left-[-4px] top-20 w-1 h-8 bg-gray-600 rounded-l-sm" />
          <div className="absolute left-[-4px] top-32 w-1 h-12 bg-gray-600 rounded-l-sm" />
          <div className="absolute right-[-4px] top-28 w-1 h-10 bg-gray-600 rounded-r-sm" />

          {/* Screen */}
          <div className="rounded-[2.3rem] overflow-hidden bg-black relative">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-800" />
              <div className="w-3 h-3 rounded-full bg-gray-900 border border-gray-700" />
            </div>

            {/* App screenshot */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Color tint overlay */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${project.color}60, transparent 60%)` }}
              />
              {/* App name on screen */}
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-white text-xs font-semibold drop-shadow-lg">{project.title}</span>
              </div>
            </div>

            {/* Home indicator */}
            <div className="bg-black py-2 flex justify-center">
              <div className="w-24 h-1 bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Subtle reflection */}
        <div
          className="absolute -bottom-8 left-4 right-4 h-8 rounded-full blur-lg opacity-30"
          style={{ background: project.color }}
        />
      </motion.div>
    </div>
  );
}

// ── Laptop Mockup (web projects) ────────────────────────────────────────────
function LaptopMockup({ project }) {
  return (
    <div className="relative mx-auto mb-6" style={{ perspective: '1200px' }}>
      <motion.div
        animate={{ rotateX: [0, 2, 0, -1, 0], rotateY: [0, 3, 0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Screen lid */}
        <div
          className="relative rounded-t-xl overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(160deg, #2a2a2a, #1a1a1a)',
            boxShadow: `0 -4px 20px ${project.color}30, 0 0 0 1px #333`,
            padding: '8px 8px 0 8px'
          }}
        >
          {/* Browser bar */}
          <div
            className="rounded-t-lg px-3 py-1.5 flex items-center gap-2 mb-0"
            style={{ background: '#1e1e1e' }}
          >
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            {/* URL bar */}
            <div className="flex-1 bg-gray-700 rounded-md px-2 py-0.5 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full border border-gray-500" />
              <span className="text-gray-400 text-[9px] truncate">
                www.{project.title.toLowerCase().replace(/\s/g, '')}.com
              </span>
            </div>
          </div>

          {/* Website screenshot */}
          <div className="relative overflow-hidden" style={{ height: '170px' }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Color overlay */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, transparent 50%, ${project.color}40)` }}
            />
          </div>
        </div>

        {/* Hinge */}
        <div
          className="h-[3px] mx-2"
          style={{ background: 'linear-gradient(90deg, #111, #444, #111)' }}
        />

        {/* Clean base — no keyboard */}
        <div
          className="rounded-b-2xl px-6 pt-1 pb-2 shadow-xl"
          style={{
            background: 'linear-gradient(180deg, #252525, #1c1c1c)',
            boxShadow: `0 10px 40px -5px ${project.color}30`
          }}
        >
          {/* Trackpad only */}
          <div className="flex justify-center py-1.5">
            <div className="w-16 h-8 rounded-md bg-gray-800/80 border border-gray-700/50" />
          </div>
        </div>

        {/* Laptop shadow */}
        <div
          className="absolute -bottom-4 left-8 right-8 h-4 rounded-full blur-xl opacity-40"
          style={{ background: project.color }}
        />
      </motion.div>
    </div>
  );
}

// ── Main Portfolio Page ───────────────────────────────────────────────────────
export default function Portfolio() {
  const { isDark, colors } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

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
            style={{ background: `${colors.secondary}20`, color: colors.secondary }}
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`relative p-6 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800'
                    : 'bg-gray-50 border border-gray-100 hover:shadow-2xl hover:bg-white'
                }`}
              >
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-white"
                    style={{ background: project.color }}
                  >
                    {project.category === 'mobile'
                      ? <><Smartphone className="w-3 h-3" /> Mobile</>
                      : <><Globe className="w-3 h-3" /> Web</>
                    }
                  </span>
                </div>

                {/* ✅ Phone for mobile, Laptop for web */}
                {project.category === 'mobile'
                  ? <PhoneMockup project={project} />
                  : <LaptopMockup project={project} />
                }

                {/* Project info */}
                <div className="text-center">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="group/btn text-sm"
                    style={{ color: colors.secondary }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}