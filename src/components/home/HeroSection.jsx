import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../theme/ThemeContext';
import { createPageUrl } from '@/utils';
import * as THREE from 'three';

export default function HeroSection() {
  const { isDark, colors } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: isDark ? 0x3BB3B3 : 0x2E8B8B,
      transparent: true,
      opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create glowing sphere
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x2E8B8B : 0x1B365D,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(3, 0, -2);
    scene.add(sphere);

    // Create torus
    const torusGeometry = new THREE.TorusGeometry(2, 0.05, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x3BB3B3,
      transparent: true,
      opacity: 0.4
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(3, 0, -2);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.002;
      torus.rotation.z += 0.003;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isDark]);

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
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

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

            {/* Main Heading with Rotating Words */}
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
              
              {/* Rotating Word Container */}
              <span className="inline-block relative h-[1.2em] w-[220px] align-middle">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-0 top-0"
                    style={{ color: colors.secondary }}
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
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
                  }}
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
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: colors.secondary }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Floating UI Elements */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-10 right-0 p-4 rounded-2xl shadow-2xl ${
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

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute bottom-10 -left-10 p-4 rounded-2xl shadow-2xl ${
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

              {/* Main Illustration Area */}
              <div 
                className="w-full h-[500px] rounded-3xl relative overflow-hidden"
                style={{
                  background: isDark 
                    ? `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}20)`
                    : `linear-gradient(135deg, ${colors.secondary}10, ${colors.accent}10)`
                }}
              >
                {/* Animated Circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div 
                    className="w-64 h-64 rounded-full border-2 border-dashed"
                    style={{ borderColor: `${colors.secondary}40` }}
                  />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div 
                    className="w-80 h-80 rounded-full border"
                    style={{ borderColor: `${colors.accent}30` }}
                  />
                </motion.div>
              </div>
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



















