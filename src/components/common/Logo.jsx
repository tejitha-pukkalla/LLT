import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

import companyLogo from '../../assets/logo_transparent.png';

const sizes = {
  sm:  { height: 36, nameSize: '0.85rem', subSize: '0.6rem' },
  md:  { height: 48, nameSize: '1.1rem',  subSize: '0.7rem' },
  lg:  { height: 64, nameSize: '1.4rem',  subSize: '0.85rem' },
  xl:  { height: 80, nameSize: '1.8rem',  subSize: '1rem' },
};

export default function Logo({ size = 'md', animated = true, showText = true }) {
  const { isDark } = useTheme();
  const { height, nameSize, subSize } = sizes[size] || sizes.md;

  return (
   <motion.div
  className="flex items-center"
  initial={animated ? { opacity: 0, scale: 0.9 } : false}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  {/* ✅ SINGLE WHITE BOX */}
  <div
    className="flex items-center gap-3"
    style={{
      background: isDark ? '#ffffff' : 'transparent',
      padding: isDark ? '8px 14px' : '0px',
      borderRadius: isDark ? '12px' : '0px',
      boxShadow: isDark ? '0 6px 18px rgba(0,0,0,0.35)' : 'none',
      transition: 'all 0.3s ease',
    }}
  >
    {/* Logo */}
  <img
  src={companyLogo}
  style={{
    height: `${height + 10}px`, // 👈 increase manually
  }}
/>

    {/* Text INSIDE box */}
    {showText && (
      <div className="flex flex-col leading-tight">
        <span
          style={{
            fontSize: nameSize,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#1B365D', // ✅ dark text for white bg
          }}
        >
          LogicLife
        </span>
        <span
          style={{
            fontSize: nameSize,
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#2E8B8B',
          }}
        >
          Technologies
        </span>
        <span
          style={{
            fontSize: subSize,
            fontStyle: 'italic',
            opacity: 0.7,
            color: '#666',
          }}
        >
          Where clarity meets tech
        </span>
      </div>
    )}
  </div>
</motion.div>
  );
}