import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../theme/ThemeContext';
import { createPageUrl } from '@/utils';
import companyLogo from '../../assets/logo_transparent.png';

// ✅ Logo-matching circuit ring animation — logo style ki match ayye SVG animation
function CircuitRingAnimation({ colors, isDark }) {
  const primaryColor = '#3BB3B3';
  const secondaryColor = '#5BC8D4';

  const circuitArcs = useMemo(() => {
    const arcs = [];
    const numArcs = 6;
    for (let i = 0; i < numArcs; i++) {
      const radius = 130 + i * 22;
      const startAngle = -55 + i * 10;
      const endAngle = 195 + i * 7;
      const numDots = 4 + i;
      const dots = [];
      for (let d = 0; d <= numDots; d++) {
        const angle = startAngle + (d / numDots) * (endAngle - startAngle);
        const rad = (angle * Math.PI) / 180;
        dots.push({
          x: 250 + radius * Math.cos(rad),
          y: 250 + radius * Math.sin(rad),
          angle,
        });
      }
      arcs.push({ radius, startAngle, endAngle, dots, delay: i * 0.3 });
    }
    return arcs;
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.18" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
          </radialGradient>
          <filter id="heroGlowFilter">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft background glow */}
        <circle cx="250" cy="250" r="210" fill="url(#heroGlow)" />

        {/* Circuit arcs — each rotates independently */}
        {circuitArcs.map((arc, i) => {
          const rad1 = (arc.startAngle * Math.PI) / 180;
          const rad2 = (arc.endAngle * Math.PI) / 180;
          const x1 = 250 + arc.radius * Math.cos(rad1);
          const y1 = 250 + arc.radius * Math.sin(rad1);
          const x2 = 250 + arc.radius * Math.cos(rad2);
          const y2 = 250 + arc.radius * Math.sin(rad2);
          const largeArc = arc.endAngle - arc.startAngle > 180 ? 1 : 0;
          const isEven = i % 2 === 0;

          return (
            <motion.g
              key={i}
              animate={{ rotate: isEven ? 360 : -360 }}
              transition={{ duration: 16 + i * 5, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '250px', originY: '250px' }}
            >
              {/* Arc stroke */}
              <path
                d={`M ${x1} ${y1} A ${arc.radius} ${arc.radius} 0 ${largeArc} 1 ${x2} ${y2}`}
                fill="none"
                stroke={i < 3 ? primaryColor : secondaryColor}
                strokeWidth={i === 0 ? 1.8 : 1.2}
                strokeOpacity={0.55 - i * 0.05}
                filter="url(#heroGlowFilter)"
              />

              {/* Dots at each node point */}
              {arc.dots.map((dot, d) => {
                const isTerminal = d === 0 || d === arc.dots.length - 1;
                return (
                  <motion.circle
                    key={d}
                    cx={dot.x}
                    cy={dot.y}
                    r={isTerminal ? 4 : 2.5}
                    fill={isTerminal ? primaryColor : secondaryColor}
                    fillOpacity={0.95}
                    filter="url(#heroGlowFilter)"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{
                      duration: 2 + d * 0.35,
                      repeat: Infinity,
                      delay: arc.delay + d * 0.18,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}

              {/* Short connector lines from terminal dots (like logo) */}
              {[
                { dot: arc.dots[0], angle: arc.startAngle - 18 },
                { dot: arc.dots[arc.dots.length - 1], angle: arc.endAngle + 18 },
              ].map(({ dot, angle }, d) => {
                const lineRad = (angle * Math.PI) / 180;
                const len = 16;
                return (
                  <line
                    key={d}
                    x1={dot.x}
                    y1={dot.y}
                    x2={dot.x + len * Math.cos(lineRad)}
                    y2={dot.y + len * Math.sin(lineRad)}
                    stroke={primaryColor}
                    strokeWidth="1"
                    strokeOpacity="0.55"
                  />
                );
              })}
            </motion.g>
          );
        })}

        {/* Center circle with logo + company name */}
        <motion.g
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          {/* White/dark circle background — bigger to fit full logo text */}
          <circle
  cx="250"
  cy="250"
  r="135"
  fill={isDark ? '#ffffff' : '#ffffff'} // ✅ always white
  fillOpacity="1"
/>
          <circle
            cx="250" cy="250" r="135"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          {/* Full logo image — icon + LogicLife Technologies + tagline */}
          <image
            href={companyLogo}
            x="110" y="128"
            width="280" height="244"
            style={{ filter: isDark ? 'brightness(1.3) contrast(1.1)' : 'none' }}
          />
        </motion.g>

        {/* Outer floating particles */}
        {[...Array(16)].map((_, i) => {
          const angle = (i / 16) * 360;
          const r = 198 + (i % 4) * 14;
          const rad = (angle * Math.PI) / 180;
          return (
            <motion.circle
              key={i}
              cx={250 + r * Math.cos(rad)}
              cy={250 + r * Math.sin(rad)}
              r={1.8}
              fill={primaryColor}
              animate={{ opacity: [0, 0.85, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const { isDark, colors } = useTheme();

  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const rotatingWords = ['Web', 'Mobile', 'App'];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: colors.secondary }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: colors.accent }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isDark ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.accent }} />
              <span className="text-sm font-medium">Transforming Ideas into Reality</span>
            </motion.div>

            {/* Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Top{' '}
              </motion.span>

              {/* Rotating Word */}
              <span className="inline-block relative h-[1.2em] w-[220px] align-middle">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-0 top-0"
                    style={{ color: '#2E8B8B' }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {' '}Development Company
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={`text-lg lg:text-xl leading-relaxed max-w-xl ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              We transform ideas into scalable, secure, and high-performance digital solutions.
              From concept to launch, we build products that drive business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full text-white font-medium group"
                  style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Portfolio')}>
                <Button
                  size="lg"
                  variant="outline"
                  className={`h-14 px-8 rounded-full font-medium ${
                    isDark
                      ? 'border-white/20 text-white hover:bg-white/10'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Our Portfolio
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '8+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold" style={{ color: colors.secondary }}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side — Circuit Ring Animation matching the logo */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              {/* Floating card — top right */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-10 right-0 z-10 p-4 rounded-2xl shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Premium Quality
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Award-winning designs
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — bottom left */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute bottom-10 -left-10 z-10 p-4 rounded-2xl shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-teal-400 to-cyan-500"
                      />
                    ))}
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      50+ Experts
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Ready to help
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ✅ Logo-matching circuit ring animation */}
              <CircuitRingAnimation colors={colors} isDark={isDark} />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
            isDark ? 'border-white/30' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/50' : 'bg-gray-500'}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}