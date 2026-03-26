import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, ArrowRight, 
  Globe, Smartphone, Code, Megaphone, Palette, Cloud, Shield, Headphones
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';
import { createPageUrl } from '@/utils';

const servicesData = {
  'web-development': {
    icon: Globe,
    title: 'Web Development',
    subtitle: 'Building Modern Web Solutions',
    description: 'We create custom web applications, e-commerce platforms, and enterprise solutions using cutting-edge technologies. Our full-stack development team delivers scalable, secure, and high-performance web solutions.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Progressive Web Apps (PWA)',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'Angular', 'Vue.js', 'Node.js', 'Python', '.NET', 'PostgreSQL', 'MongoDB'],
    process: [
      { step: 'Discovery', desc: 'Understanding your requirements and goals' },
      { step: 'Design', desc: 'Creating wireframes and UI/UX designs' },
      { step: 'Development', desc: 'Building your application with best practices' },
      { step: 'Testing', desc: 'Rigorous quality assurance and testing' },
      { step: 'Deployment', desc: 'Launching your application to production' },
      { step: 'Support', desc: 'Ongoing maintenance and updates' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  'mobile-apps': {
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform Apps',
    description: 'We develop native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences. From concept to App Store launch, we handle the entire mobile development lifecycle.',
    features: [
      'iOS App Development (Swift)',
      'Android App Development (Kotlin)',
      'Cross-Platform (React Native, Flutter)',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    process: [
      { step: 'Strategy', desc: 'Defining app goals and target audience' },
      { step: 'UI/UX Design', desc: 'Creating intuitive mobile interfaces' },
      { step: 'Development', desc: 'Building with native or cross-platform tech' },
      { step: 'Testing', desc: 'Device testing and quality assurance' },
      { step: 'Launch', desc: 'App Store and Play Store submission' },
      { step: 'Iterate', desc: 'Continuous improvement based on feedback' }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  'software-development': {
    icon: Code,
    title: 'Software Development',
    subtitle: 'Custom Software Solutions',
    description: 'We build custom software solutions tailored to your unique business needs. From enterprise applications to automation tools, we deliver software that streamlines operations and drives efficiency.',
    features: [
      'Enterprise Software',
      'CRM & ERP Systems',
      'Automation Tools',
      'Legacy System Modernization',
      'System Integration',
      'Custom Dashboards'
    ],
    technologies: ['Python', '.NET', 'Java', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    process: [
      { step: 'Analysis', desc: 'Deep dive into business processes' },
      { step: 'Architecture', desc: 'Designing scalable system architecture' },
      { step: 'Development', desc: 'Agile development with regular updates' },
      { step: 'Integration', desc: 'Connecting with existing systems' },
      { step: 'Deployment', desc: 'Secure deployment and migration' },
      { step: 'Training', desc: 'User training and documentation' }
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  'digital-marketing': {
    icon: Megaphone,
    title: 'Digital Marketing',
    subtitle: 'Data-Driven Marketing',
    description: 'We provide comprehensive digital marketing services to help your business grow online. Our data-driven strategies ensure maximum ROI and sustainable growth.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'Mailchimp', 'HubSpot'],
    process: [
      { step: 'Audit', desc: 'Analyzing current digital presence' },
      { step: 'Strategy', desc: 'Creating customized marketing plan' },
      { step: 'Execution', desc: 'Implementing campaigns across channels' },
      { step: 'Optimization', desc: 'A/B testing and continuous improvement' },
      { step: 'Reporting', desc: 'Regular performance reports' },
      { step: 'Scale', desc: 'Scaling successful campaigns' }
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  'ui-ux-design': {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User-Centered Design',
    description: 'We create intuitive and beautiful user interfaces that enhance user experience. Our design process focuses on understanding users and creating delightful interactions.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design Systems',
      'Usability Testing',
      'Accessibility Compliance'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Zeplin'],
    process: [
      { step: 'Research', desc: 'Understanding users and competitors' },
      { step: 'Wireframes', desc: 'Creating low-fidelity layouts' },
      { step: 'Prototypes', desc: 'Interactive prototypes for testing' },
      { step: 'Visual Design', desc: 'High-fidelity designs and assets' },
      { step: 'Testing', desc: 'User testing and iterations' },
      { step: 'Handoff', desc: 'Developer-ready design specs' }
    ],
    gradient: 'from-pink-500 to-rose-500'
  },
  'cloud-services': {
    icon: Cloud,
    title: 'Cloud Services',
    subtitle: 'Cloud Infrastructure & DevOps',
    description: 'We help businesses leverage cloud technologies for scalability, reliability, and cost efficiency. From migration to management, we handle your cloud infrastructure needs.',
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'DevOps Implementation',
      'CI/CD Pipelines',
      'Container Orchestration',
      '24/7 Monitoring'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    process: [
      { step: 'Assessment', desc: 'Evaluating current infrastructure' },
      { step: 'Planning', desc: 'Designing cloud architecture' },
      { step: 'Migration', desc: 'Secure migration to cloud' },
      { step: 'Optimization', desc: 'Cost and performance optimization' },
      { step: 'Automation', desc: 'CI/CD and infrastructure as code' },
      { step: 'Management', desc: 'Ongoing monitoring and support' }
    ],
    gradient: 'from-indigo-500 to-violet-500'
  }
};

export default function ServiceDetail() {
  const { isDark, colors } = useTheme();
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug') || 'web-development';
  const service = servicesData[slug] || servicesData['web-development'];

  return (
    <div className={`pt-32 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to={createPageUrl('Services')}
            className={`inline-flex items-center gap-2 text-sm ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div 
              className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-6 bg-gradient-to-br ${service.gradient}`}
            >
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {service.title}
            </h1>
            <p 
              className="text-xl mb-6"
              style={{ color: colors.secondary }}
            >
              {service.subtitle}
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {service.description}
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg"
                className="rounded-full text-white"
                style={{
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
                }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
          >
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What We Offer
            </h3>
            <div className="space-y-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: colors.secondary }} 
                  />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className={`text-2xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, i) => (
              <span 
                key={i}
                className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                  isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold"
                  style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}
                >
                  {i + 1}
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.step}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div 
            className="p-12 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg"
                className="rounded-full bg-white text-gray-900 hover:bg-white/90"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}