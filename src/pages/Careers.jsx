import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, Briefcase, ChevronDown, ArrowRight,
  Users, Zap, Heart, Gift
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';
import SEOHead from '../components/common/SEOHead';

const benefits = [
  { icon: Zap, title: 'Learning & Growth', desc: 'Continuous learning opportunities and career growth' },
  { icon: Users, title: 'Great Team', desc: 'Work with talented professionals from around the world' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working hours and remote work options' },
  { icon: Gift, title: 'Competitive Benefits', desc: 'Health insurance, bonuses, and more' }
];

const openings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'We are looking for an experienced Full Stack Developer to join our engineering team.',
    requirements: [
      'Strong proficiency in React/Next.js and Node.js',
      'Experience with PostgreSQL and MongoDB',
      'Knowledge of cloud services (AWS/GCP)',
      'Excellent problem-solving skills'
    ]
  },
  {
    id: 2,
    title: 'React Native Developer',
    department: 'Mobile',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Join our mobile team to build world-class mobile applications.',
    requirements: [
      'Strong React Native development experience',
      'Experience with iOS and Android development',
      'Knowledge of state management (Redux/MobX)',
      'Published apps on App Store/Play Store'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Create beautiful and intuitive user experiences for our products.',
    requirements: [
      'Proficiency in Figma and design tools',
      'Strong portfolio of web/mobile designs',
      'Understanding of user research methods',
      'Knowledge of design systems'
    ]
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Help us build and maintain robust infrastructure.',
    requirements: [
      'Experience with AWS/GCP/Azure',
      'Proficiency in Docker and Kubernetes',
      'CI/CD pipeline experience',
      'Infrastructure as Code (Terraform)'
    ]
  }
];

export default function Careers() {
  const { isDark, colors } = useTheme();
  const [expandedJob, setExpandedJob] = useState(null);

  return (
    <>
    <SEOHead page="careers" />
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
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Build Your <span style={{ color: colors.secondary }}>Career</span> With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Join a team of passionate innovators building the future of technology
          </motion.p>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl text-center ${
                isDark ? 'bg-gray-800/50' : 'bg-gray-50'
              }`}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${colors.secondary}20` }}
              >
                <benefit.icon className="w-7 h-7" style={{ color: colors.secondary }} />
              </div>
              <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {benefit.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Positions */}
        <div>
          <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Open Positions
          </h2>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.id}
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
                {/* Job Header */}
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className={`flex items-center gap-1 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown 
                      className="w-5 h-5" 
                      style={{ color: colors.secondary }}
                    />
                  </motion.div>
                </button>

                {/* Job Details */}
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 border-t ${
                        isDark ? 'border-gray-700' : 'border-gray-200'
                      }`}>
                        <div className="pt-6">
                          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {job.description}
                          </p>
                          <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Experience:</strong> {job.experience}
                          </p>
                          <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Requirements:
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {job.requirements.map((req, j) => (
                              <li 
                                key={j}
                                className={`flex items-start gap-2 text-sm ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}
                              >
                                <span style={{ color: colors.secondary }}>•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                          {/* <Button
                            className="rounded-full text-white"
                            style={{
                              background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
                            }}
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button> */}

                          <Button
                            onClick={() => window.location.href = `mailto:bdm@logiclifetechnologies.com?subject=Application: ${job.title}`}
                            className="rounded-full text-white"
                            style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}
                          >
                            Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* No Position CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-3xl text-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Don't see a position that fits?
          </h3>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We're always looking for talented people. Send us your resume and we'll keep you in mind.
          </p>
          <Button
            variant="outline"
            className="rounded-full"
          >
            Send Resume
          </Button>
        </motion.div>
      </div>
    </div>
    </>
  );
}