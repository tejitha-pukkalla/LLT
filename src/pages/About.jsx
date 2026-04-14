import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';
import { createPageUrl } from '@/utils';
import SEOHead from '../components/common/SEOHead';

const values = [
  { icon: Target, title: 'Innovation First',   description: 'We embrace cutting-edge technologies to deliver future-proof solutions' },
  { icon: Users,  title: 'Client Centric',     description: 'Your success is our priority. We build lasting partnerships' },
  { icon: Award,  title: 'Quality Excellence', description: 'We maintain the highest standards in every line of code' },
  { icon: Clock,  title: 'Timely Delivery',    description: 'We respect deadlines and deliver projects on time, every time' },
];

const milestones = [
  { year: '2016', title: 'Founded',        description: 'Started with a vision to transform digital landscapes' },
  { year: '2018', title: '50+ Projects',   description: 'Reached our first major milestone' },
  { year: '2020', title: 'Global Reach',   description: 'Expanded services to international clients' },
  { year: '2022', title: '100+ Team',      description: 'Grew to a team of 100+ professionals' },
  { year: '2024', title: 'AI Integration', description: 'Pioneered AI-driven development solutions' },
];

export default function About() {
  const { isDark, colors } = useTheme();

  return (
    <>
      <SEOHead page="about" />

      <div className={`pt-32 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>

        {/* Hero */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                  style={{ background: `${colors.secondary}20`, color: colors.secondary }}>
                  About Us
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Transforming Ideas into
                  <span style={{ color: colors.secondary }}> Digital Reality</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  LogicLife Technologies is a leading software development company dedicated to
                  delivering innovative digital solutions. With a team of 50+ skilled professionals,
                  we've successfully delivered 150+ projects across diverse industries worldwide.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}>
                  <Link to={createPageUrl('Contact')}>
                    <Button size="lg" className="rounded-full text-white"
                      style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}>
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-6">
                {[
                  { value: '150+', label: 'Projects Delivered' },
                  { value: '50+',  label: 'Happy Clients' },
                  { value: '8+',   label: 'Years Experience' },
                  { value: '50+',  label: 'Team Members' },
                ].map((stat, i) => (
                  <div key={i} className={`p-6 rounded-2xl text-center ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    <div className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>{stat.value}</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} className={`p-8 rounded-3xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}>
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Vision</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  To be the global leader in digital transformation, empowering businesses
                  with innovative technology solutions that drive growth and create lasting impact.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} className={`p-8 rounded-3xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  To deliver exceptional digital solutions that exceed client expectations,
                  foster innovation, and build long-term partnerships based on trust and excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Core <span style={{ color: colors.secondary }}>Values</span>
              </motion.h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl text-center ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${colors.secondary}20` }}>
                    <value.icon className="w-7 h-7" style={{ color: colors.secondary }} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline — mobile fixed ✅ */}
        <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our <span style={{ color: colors.secondary }}>Journey</span>
              </motion.h2>
            </div>

            <div className="relative">
              {/* Line — desktop only */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
                style={{ background: `${colors.secondary}30` }} />

              {milestones.map((milestone, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative mb-12 flex flex-col items-center text-center
                    md:flex-row md:text-left md:items-center md:gap-8
                    ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-2"
                      style={{ background: `${colors.secondary}20`, color: colors.secondary }}>
                      {milestone.year}
                    </div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {milestone.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {milestone.description}
                    </p>
                  </div>

                  {/* Dot — desktop only */}
                  <div className="relative z-10 w-4 h-4 rounded-full border-4 hidden md:block flex-shrink-0"
                    style={{ background: isDark ? '#0A0F1C' : '#fff', borderColor: colors.secondary }} />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}