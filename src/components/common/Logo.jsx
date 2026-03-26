// import React from 'react';
// import { motion } from 'framer-motion';
// import companyLogo from '../../assets/logo_transparent.png';

// const sizes = {
//   sm:  { height: 52  },
//   md:  { height: 68  },  
//   lg:  { height: 88  },
//   xl:  { height: 110 },
// };

// export default function Logo({ size = 'md', animated = true, showText = true }) {
//   const { height } = sizes[size] || sizes.md;

//   return (
//     <motion.div
//       className="flex items-center"
//       initial={animated ? { opacity: 0, scale: 0.9 } : false}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//     >
//       <img
//         src={companyLogo}
//         alt="LogicLife Technologies"
//         style={{
//           height: `${height}px`,
//           width: 'auto',
//           objectFit: 'contain',
         
//         }}
//       />
//     </motion.div>
//   );
// }






















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
      className="flex items-center gap-2"
      initial={animated ? { opacity: 0, scale: 0.9 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Logo Image */}
      <img
        src={companyLogo}
        alt="LogicLife Technologies"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          // dark mode లో logo కొంచెం bright చేస్తాం
          filter: isDark ? 'brightness(1.3) contrast(1.1)' : 'none',
        }}
      />

      {/* Company Name Text — dark mode లో highlighted */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            style={{
              fontSize: nameSize,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              // ✅ Dark mode లో bright teal glow తో highlight
              // Light mode లో original dark navy
              color: isDark ? '#3DD6D6' : '#1B365D',
              textShadow: isDark
                ? '0 0 12px rgba(61, 214, 214, 0.6), 0 0 24px rgba(61, 214, 214, 0.3)'
                : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            LogicLife
          </span>
          <span
            style={{
              fontSize: nameSize,
              fontWeight: 700,
              letterSpacing: '-0.01em',
              // ✅ Dark mode లో slightly dimmer teal
              color: isDark ? '#2BB3B3' : '#2E8B8B',
              textShadow: isDark
                ? '0 0 10px rgba(43, 179, 179, 0.5)'
                : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Technologies
          </span>
          <span
            style={{
              fontSize: subSize,
              fontStyle: 'italic',
              opacity: isDark ? 0.7 : 0.6,
              color: isDark ? '#8ECFCF' : '#666',
              transition: 'all 0.3s ease',
            }}
          >
            Where clarity meets tech
          </span>
        </div>
      )}
    </motion.div>
  );
}