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

// Brand-accurate SVG icons — each icon matches its technology
const TechIcon = ({ name, size = 42 }) => {
  const icons = {

    /* ─── FRONTEND ─── */
    'React': (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="11" fill="#000"/>
        <path d="M8.5 8h2v5.5l5.5-5.5H18l-5.5 6 5.5 5H16l-5.5-5V20H8.5V8z" fill="#fff"/>
      </svg>
    ),
    'Angular': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <polygon points="12,2.3 2.3,6.2 3.9,18.6 12,22 20.1,18.6 21.7,6.2" fill="#DD0031"/>
        <polygon points="12,2.3 12,22 20.1,18.6 21.7,6.2" fill="#C3002F"/>
        <path d="M12,5.7 L7.3,17H9.1l0.9-2.3h3.9l1,2.3H16.7L12,5.7z M12,9.4l1.4,3.6H10.6L12,9.4z" fill="#fff"/>
      </svg>
    ),
    'Vue.js': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M2 3h3.7L12 15.5 18.3 3H22L12 21.5 2 3z" fill="#42B883"/>
        <path d="M7 3h3L12 7.5 14 3h3L12 14.5 7 3z" fill="#35495E"/>
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <path d="M5 14h2.5v6h2v-6H12v-2H5v2zM14 12v2h2.8v.7c0 1.4-.7 2.3-1.8 2.3-.8 0-1.4-.4-1.8-.9l-1.4 1.4c.8 1 2 1.5 3.2 1.5 2.2 0 3.8-1.7 3.8-4v-3H14z" fill="#fff"/>
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12 6C9.3 6 7.6 7.3 7 10c1-1.3 2.2-1.8 3.5-1.5.76.19 1.3.74 1.9 1.35C13.4 11 14.4 12 16.5 12c2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.1 7 14.1 6 12 6zM7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.76.19 1.3.74 1.9 1.35C8.4 17 9.4 18 11.5 18c2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.1 13 9.1 12 7 12z" fill="#38BDF8"/>
      </svg>
    ),
    'SASS': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="#CC6699"/>
        <path d="M16.9 13.4c-.7.1-1.1.3-1.5.5-.1-.2-.3-.5-.3-.9 0-1 .9-2.3 1.7-3.4.7-1.1.3-2.5-.5-3.3-.9-.8-2.2-.9-3.2-.4-1.3.7-2 1.7-2.1 2.8-.1.8.2 1.6.7 2.1-.9.4-1.8 1-2.6 1.8-.7.7-1.2 1.5-1.2 2.4 0 1.6 1.6 2.5 3.5 2.3 1.5-.2 2.8-1.1 3.5-2.3.3.2.7.4 1.2.5 1.6.3 3.1-.6 3.4-1.9.2-.6-.2-1.2-1-1.2-.5 0-1.1.3-1.6 1z" fill="#fff"/>
      </svg>
    ),
    'Redux': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M15.7 5.5c.4-1.8-.5-3.2-1.7-3.9-1.1-.6-2.6-.5-3.8.3-1.1.8-1.7 2.1-1.5 3.6C7.2 6.2 6 7.4 5.8 8.9c-.3 1.5.4 3 1.6 3.8-.4 1.7.5 3.2 1.7 3.9 1.1.6 2.6.5 3.8-.3 1.6-.4 2.9-1.4 3.3-2.9 1.5-.7 2.5-2 2.3-3.5-.2-1.4-1.3-2.5-2.8-2.9v-.5zm-3.7 9c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z" fill="#764ABC"/>
      </svg>
    ),

    /* ─── BACKEND ─── */
    'Node.js': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12 2.09L2.09 7.6v8.8L12 21.91l9.91-5.51V7.6L12 2.09z" fill="#539E43"/>
        <path d="M10.5 9v6l1.5.9 1.5-.9V9l-1.5-.9L10.5 9zM7.5 10.5v3l1.5.9V9.6L7.5 10.5zM13.5 9.6v4.8l1.5-.9v-3l-1.5-.9z" fill="#fff"/>
      </svg>
    ),
    'Python': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M11.9 2C8.8 2 7 3.5 7 5.5V8h5v1H5.5C3.5 9 2 10.8 2 13c0 2.3 1.5 4 3.5 4H7v-2.5C7 12.4 9 11 12 11s5 1.5 5 3.5V17h1.5c2 0 3.5-1.7 3.5-4s-1.5-4-3.5-4H17V7.5C17 4.5 15.5 2 11.9 2zM10 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB"/>
        <path d="M12 13C9 13 7 14.5 7 16.5V19h1.5c0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3H17v-2.5C17 14.5 15 13 12 13zm2 7.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B"/>
      </svg>
    ),
    '.NET': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect width="24" height="24" rx="4" fill="#512BD4"/>
        <text x="3" y="17" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="Arial, sans-serif">.NET</text>
      </svg>
    ),
    'Java': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M9.5 15.5s-.9.5.6.7c1.6.2 2.5.2 4.3-.2 0 0 .5.3.2.5-2 1.7-11.5-.3-5.1-3" fill="#E76F00"/>
        <path d="M9 12.9s-1 .7.5.9c1.9.2 3.4.2 6-.2 0 0 .3.3.1.5-2.4 1.5-13.3-.5-6.6-2.2" fill="#E76F00"/>
        <path d="M13.8 10.2c1.1 1.3-.3 2.4-.3 2.4s2.7-1.4 1.5-3.1c-1.2-1.6-2.1-2.4 2.8-5.1 0 0-7.7 2-4 5.8" fill="#E76F00"/>
        <path d="M18.7 17.3s.6.5-.7.9c-2.4.7-10 .9-12.1 0-.8-.3.7-.8.7-.8s-1.8-.5-2.5 1.1c-1.1 3 13.8 3.4 15.7 1.1.5-.7-.3-2.3-1.1-2.3" fill="#5382A1"/>
        <path d="M10 12.7s-3.9.9-1.4 1.3c1 .1 3.1.1 5-.1 1.6-.2 3.2-.5 3.2-.5s-.5.3-.9.5c-3.8 1-11.2.5-9-.5 1.8-1 3.1-.7 3.1-.7" fill="#5382A1"/>
        <path d="M17 15.2c3.9-2 2-3.9.8-3.6-.3.1-.4.2-.4.2s.1-.2.4-.3c2.9-1 5.1 2.9-.8 4.4 0 0 .1-.1 0-.7" fill="#5382A1"/>
        <path d="M14.5 3s2.3 2.2-2.2 5.5c-3.5 2.8-.8 4.4 0 6.3-2.1-1.9-3.6-3.6-2.6-5.1 1.5-2.3 5.7-3.4 4.8-6.7" fill="#E76F00"/>
      </svg>
    ),
    'Go': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect width="24" height="24" rx="4" fill="#00ACD7"/>
        <path d="M5 11h2.5M5 13h2.5M16.5 11H19M16.5 13H19" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7.5 9.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5M9 14.5c0 2 1.8 3.5 3.5 3.5S16 16.5 16 14.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="5.5" cy="12" r="1.3" fill="#fff"/>
        <circle cx="18.5" cy="12" r="1.3" fill="#fff"/>
      </svg>
    ),
    'PHP/Laravel': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12 2C6.5 2 2 5.5 2 10c0 2.6 1.4 4.8 3.5 6.3L4.5 20l3.2-1.7C9 18.7 10.4 19 12 19c5.5 0 10-3.5 10-9S17.5 2 12 2z" fill="#FF2D20"/>
        <path d="M9 8.5H7.5v4H9v-1.5h1c1 0 1.5-.7 1.5-1.5S10.5 8.5 9 8.5zm0 1.5h.8c.2 0 .5.1.5.5s-.3.5-.5.5H9V10zM14 8.5H11.5v4H13v-1.5h1.2c1 0 1.8-.7 1.8-1.5 0-.9-.7-1-.7-1H14zm-.5 1.5h.9c.3 0 .5.2.5.5s-.2.5-.5.5h-.9V10z" fill="#fff"/>
      </svg>
    ),
    'Ruby on Rails': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M19.5 8.5C18.2 5 15 2.5 11 2.5 5.8 2.5 1.5 6.8 1.5 12c0 2.4.9 4.6 2.3 6.3L19.5 8.5z" fill="#CC0000"/>
        <path d="M3.8 18.3C5.5 20 7.8 21 10.5 21c4.2 0 7.7-2.6 9.2-6.3L3.8 18.3z" fill="#CC0000"/>
        <path d="M21 12c.3-.7.5-1.5.5-2.3L5 19.5c1.5.3 3 .5 4.5.5L21 12z" fill="#990000"/>
        <path d="M12 7.5l-2 5h4.5l-1-5z" fill="#fff" opacity=".85"/>
      </svg>
    ),
    'GraphQL': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12 3.5l8.65 5v10L12 23.5l-8.65-5v-10z" fill="none" stroke="#E10098" strokeWidth="1.5"/>
        <circle cx="12" cy="3.5" r="1.8" fill="#E10098"/>
        <circle cx="20.65" cy="8.5" r="1.8" fill="#E10098"/>
        <circle cx="20.65" cy="16.5" r="1.8" fill="#E10098"/>
        <circle cx="12" cy="21.5" r="1.8" fill="#E10098"/>
        <circle cx="3.35" cy="16.5" r="1.8" fill="#E10098"/>
        <circle cx="3.35" cy="8.5" r="1.8" fill="#E10098"/>
        <circle cx="12" cy="12.5" r="2.3" fill="#E10098"/>
        <path d="M3.35 8.5L20.65 16.5M20.65 8.5L3.35 16.5M12 3.5v18" stroke="#E10098" strokeWidth=".9" opacity=".4"/>
      </svg>
    ),

    /* ─── MOBILE ─── */
    'React Native': (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
      </svg>
    ),
    'Flutter': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <polygon points="13.5,2 5,10.5 8,13.5 19.5,2" fill="#54C5F8"/>
        <polygon points="8,13.5 5,10.5 12,17.5" fill="#01579B"/>
        <polygon points="8,13.5 12,17.5 15,14.5" fill="#29B6F6"/>
        <polygon points="12,17.5 15,20.5 20,15.5 15,14.5" fill="#54C5F8"/>
        <polygon points="15,14.5 15,20.5 20,15.5" fill="#01579B"/>
      </svg>
    ),
    'Swift': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect width="24" height="24" rx="6" fill="#F05138"/>
        <path d="M19.5 9C18.5 5.8 15.5 4 12 4 7.6 4 4 7.6 4 12c0 1.8.6 3.5 1.6 4.9 0 0 3.5-5.8 10.1-8.7-3.4 3.5-5.4 7.1-5.4 7.1 1.5 1.4 3.8 2.2 5.5 1.2.8-.5 1.4-1.2 1.6-2-.5.4-1.2.6-1.9.4-1.4-.5-1.9-2.3-.8-3.5.3-.4.7-.7 1.1-1C17.1 9.1 19.5 9 19.5 9z" fill="#fff"/>
      </svg>
    ),
    'Kotlin': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <defs>
          <linearGradient id="kotlin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F52FF"/>
            <stop offset="50%" stopColor="#C811E1"/>
            <stop offset="100%" stopColor="#E8572A"/>
          </linearGradient>
        </defs>
        <polygon points="2,2 12,12 2,22" fill="url(#kotlin-grad)"/>
        <polygon points="12,2 22,12 12,22 22,2" fill="url(#kotlin-grad)"/>
      </svg>
    ),
    'Ionic': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="#3880FF"/>
        <circle cx="12" cy="12" r="5.5" fill="none" stroke="#fff" strokeWidth="2.5"/>
        <circle cx="18.5" cy="5.5" r="2" fill="#fff"/>
      </svg>
    ),
    'Xamarin': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect width="24" height="24" rx="4" fill="#3498DB"/>
        <path d="M5 17.5L12 5l7 12.5H5z" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <line x1="8.5" y1="14" x2="15.5" y2="14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),

    /* ─── DATABASE ─── */
    'PostgreSQL': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <ellipse cx="12" cy="6.5" rx="7.5" ry="3" fill="#336791"/>
        <path d="M4.5 6.5v11c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-11" fill="none" stroke="#336791" strokeWidth="2"/>
        <path d="M4.5 11.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" fill="none" stroke="#336791" strokeWidth="2"/>
        <path d="M4.5 16.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" fill="none" stroke="#5b8db8" strokeWidth="1"/>
        <ellipse cx="12" cy="6.5" rx="7.5" ry="3" fill="none" stroke="#fff" strokeWidth=".8" opacity=".3"/>
      </svg>
    ),
    'MongoDB': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12 2C8.7 2 6.5 5.5 6.5 9.5c0 3 1.2 5.5 3 7.2L12 22l2.5-5.3c1.8-1.7 3-4.2 3-7.2C17.5 5.5 15.3 2 12 2z" fill="#47A248"/>
        <path d="M12 4.5v15" stroke="#fff" strokeWidth="1.5" opacity=".5" strokeLinecap="round"/>
      </svg>
    ),
    'MySQL': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <ellipse cx="12" cy="6" rx="8.5" ry="3" fill="#00758F"/>
        <path d="M3.5 6v12c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V6" fill="none" stroke="#00758F" strokeWidth="2"/>
        <path d="M3.5 11c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3" fill="none" stroke="#00758F" strokeWidth="2"/>
        <path d="M13.5 3v18" stroke="#F29111" strokeWidth="2.5" strokeLinecap="round" opacity=".7"/>
      </svg>
    ),
    'Redis': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M2 15.5l10 4 10-4-10-4z" fill="#A41E11"/>
        <path d="M2 12l10 4 10-4-10-4z" fill="#D82C20"/>
        <path d="M2 8.5l10 4 10-4-10-4z" fill="#A41E11"/>
        <path d="M12 4.5L2 8.5l10 4 10-4z" fill="#FF6B6B"/>
        <rect x="15" y="5" width="4.5" height="2" rx="1" fill="#fff" opacity=".85"/>
        <path d="M15 5L12 6.5l3 1.5 4.5-2.5z" fill="#fff" opacity=".4"/>
      </svg>
    ),
    'Elasticsearch': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="#005571"/>
        <ellipse cx="12" cy="8.5" rx="6.5" ry="2.5" fill="#FED10A"/>
        <ellipse cx="12" cy="12" rx="7.5" ry="2.5" fill="#24BBB1"/>
        <ellipse cx="12" cy="15.5" rx="6.5" ry="2.5" fill="#EF5098"/>
      </svg>
    ),
    'Firebase': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M5 20L6.3 5 12 14l3-10.5 4 16.5H5z" fill="#FFCA28"/>
        <path d="M5 20l4.5-9.5L12 14l3-10.5 1.5 6z" fill="#F57C00"/>
        <path d="M12 14l-2.5-3.5L5 20h14z" fill="#FF8F00" opacity=".6"/>
      </svg>
    ),
    'DynamoDB': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <ellipse cx="12" cy="5.5" rx="8" ry="2.5" fill="#1A9C3E"/>
        <path d="M4 5.5v4c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-4" fill="#1A9C3E"/>
        <ellipse cx="12" cy="9.5" rx="8" ry="2.5" fill="#2E73B8"/>
        <path d="M4 9.5v4c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-4" fill="#2E73B8"/>
        <ellipse cx="12" cy="13.5" rx="8" ry="2.5" fill="#4053AF"/>
        <path d="M4 13.5v4c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-4" fill="#4053AF"/>
      </svg>
    ),
    'Supabase': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <defs>
          <linearGradient id="supabase-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ECF8E"/>
            <stop offset="100%" stopColor="#1C7C54"/>
          </linearGradient>
        </defs>
        <path d="M13 3L4 14h8l-1 7 9-11h-8z" fill="url(#supabase-grad)"/>
      </svg>
    ),

    /* ─── CLOUD & DEVOPS ─── */
    'AWS': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M7.5 12c-2 0-3.5-1.3-3.5-3S5.5 6 7.5 6c.3-1.8 1.8-3 3.5-3 1.5 0 2.8.9 3.4 2.2.3-.1.7-.1 1.1-.1 2.2 0 4 1.6 4 3.5 0 .2 0 .4-.1.6H7.5v3z" fill="#FF9900"/>
        <path d="M4 18.5l2-3.5h12l2 3.5H4z" fill="#FF9900"/>
        <path d="M8.5 21.5h2v-2.5h-2zM13.5 21.5h2v-2.5h-2z" fill="#FF9900"/>
      </svg>
    ),
    'Azure': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <defs>
          <linearGradient id="azure-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072C6"/>
            <stop offset="100%" stopColor="#00B4F0"/>
          </linearGradient>
        </defs>
        <path d="M8 3l6 9.5-8.5 9H22L8 3z" fill="url(#azure-grad)"/>
        <path d="M14 3L11 11l-7.5 10H5.5L14 3z" fill="#0050A0" opacity=".45"/>
      </svg>
    ),
    'Google Cloud': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M15 9h-6l-3 3v3h12v-3z" fill="#4285F4"/>
        <path d="M9 9L6.5 12v3H9v-3l2.5-3H9z" fill="#EA4335"/>
        <path d="M15 9l2.5 3v3H15v-3l-2.5-3H15z" fill="#FBBC04"/>
        <circle cx="6.5" cy="12" r="2.2" fill="#EA4335"/>
        <circle cx="17.5" cy="12" r="2.2" fill="#34A853"/>
        <circle cx="9" cy="9" r="2.2" fill="#EA4335"/>
        <circle cx="15" cy="9" r="2.2" fill="#FBBC04"/>
        <circle cx="6.5" cy="15" r="2.2" fill="#4285F4"/>
        <circle cx="17.5" cy="15" r="2.2" fill="#4285F4"/>
      </svg>
    ),
    'Docker': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect x="2" y="10" width="3" height="3" rx=".5" fill="#0db7ed"/>
        <rect x="6.5" y="10" width="3" height="3" rx=".5" fill="#0db7ed"/>
        <rect x="11" y="10" width="3" height="3" rx=".5" fill="#0db7ed"/>
        <rect x="6.5" y="6" width="3" height="3" rx=".5" fill="#0db7ed"/>
        <rect x="11" y="6" width="3" height="3" rx=".5" fill="#0db7ed"/>
        <rect x="11" y="2" width="3" height="3" rx=".5" fill="#0db7ed"/>
        <path d="M21 10.5c-.5-1.2-1.8-1.7-2.9-1.5-.4-1.2-1.5-2-2.8-1.8" stroke="#0db7ed" strokeWidth="1.3" fill="none"/>
        <path d="M2 13.5c0 2.8 2.2 5 5 5h8c2.2 0 4-1.8 4-4H2z" fill="#0db7ed"/>
      </svg>
    ),
    'Kubernetes': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="9.5" fill="none" stroke="#326CE5" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#326CE5"/>
        <line x1="12" y1="2.5" x2="12" y2="10" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="12" y1="14" x2="12" y2="21.5" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="2.5" y1="12" x2="10" y2="12" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="14" y1="12" x2="21.5" y2="12" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="4.4" y1="4.4" x2="9.8" y2="9.8" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="14.2" y1="14.2" x2="19.6" y2="19.6" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="19.6" y1="4.4" x2="14.2" y2="9.8" stroke="#326CE5" strokeWidth="1.8"/>
        <line x1="9.8" y1="14.2" x2="4.4" y2="19.6" stroke="#326CE5" strokeWidth="1.8"/>
      </svg>
    ),
    'Jenkins': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="10" r="8" fill="#D24939"/>
        <circle cx="12" cy="9.5" r="6" fill="#F0D6B7"/>
        <circle cx="9.8" cy="8.3" r="1.4" fill="#D24939"/>
        <circle cx="14.2" cy="8.3" r="1.4" fill="#D24939"/>
        <path d="M9 12.5c.8 1.3 2.2 1.8 3 1.8s2.2-.5 3-1.8" stroke="#D24939" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M9.5 14.3l-1.5 5.7h8l-1.5-5.7" fill="#D24939"/>
      </svg>
    ),
    'Terraform': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M9 4.5l5 2.9v5.7L9 10.2V4.5z" fill="#7B42BC"/>
        <path d="M15.5 7.9l5 2.9v5.7l-5-2.9V7.9z" fill="#4040B2"/>
        <path d="M3.5 11.3l5 2.9v5.7l-5-2.9v-5.7z" fill="#7B42BC"/>
        <path d="M9 14.2l5 2.9V11.4L9 8.5v5.7z" fill="#5C4EE5"/>
      </svg>
    ),
    'GitHub Actions': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="#24292E"/>
        <path d="M12 6C8.7 6 6 8.7 6 12c0 2.7 1.8 4.9 4.1 5.7.3.1.4-.1.4-.3v-1c-1.7.4-2-.8-2-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.6 0 .9.6.9.6.5.9 1.4.7 1.7.5.1-.4.2-.7.4-.8-1.3-.2-2.7-.7-2.7-3 0-.7.2-1.2.6-1.6-.1-.2-.3-.8.1-1.7 0 0 .5-.2 1.7.7.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.2-.9 1.7-.7 1.7-.7.4.9.1 1.5.1 1.7.4.4.6 1 .6 1.6 0 2.3-1.4 2.8-2.7 3 .2.2.4.5.4 1.1v1.6c0 .2.1.4.4.3C16.2 16.9 18 14.7 18 12c0-3.3-2.7-6-6-6z" fill="#fff"/>
      </svg>
    ),

    /* ─── AI & ML ─── */
    'TensorFlow': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11z" fill="#FF6F00"/>
        <path d="M12 2v20M4 6.5l8 4.5 8-4.5M4 17.5l8-4.5 8 4.5" stroke="#FFA000" strokeWidth=".8" fill="none" opacity=".5"/>
        <circle cx="12" cy="12" r="2.2" fill="#fff"/>
      </svg>
    ),
    'PyTorch': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M12.5 2.5C8 2.5 4.5 6.5 4.5 11c0 4.4 3.2 8 7.5 8.5V22h1v-2.4C17.5 19 20 15.5 20 11c0-5-3.5-8.5-7.5-8.5z" fill="#EE4C2C"/>
        <circle cx="16" cy="7" r="1.8" fill="#fff"/>
        <path d="M12.5 5v6.5l3.5-3.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'OpenAI': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="#10A37F" opacity=".12"/>
        <path d="M20.8 9.4A8.3 8.3 0 0012 2a8.3 8.3 0 00-8.8 7.4A5.5 5.5 0 007.7 19h1v-1.5H7.7a4 4 0 01-.8-7.9 7.1 7.1 0 0110.2-3.7 4 4 0 01.6 7.9v.2H19A5.5 5.5 0 0020.8 9.4z" fill="#10A37F" opacity=".25"/>
        <path d="M12 8v8M8.5 10l7 4M8.5 14l7-4" stroke="#10A37F" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    'Hugging Face': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="11.5" r="8.5" fill="#FFD21E"/>
        <circle cx="9.5" cy="10" r="1.3" fill="#333"/>
        <circle cx="14.5" cy="10" r="1.3" fill="#333"/>
        <path d="M9 14c.8 1.1 1.9 1.5 3 1.5s2.2-.5 3-1.5" stroke="#333" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
        <path d="M8 6.5c-.5-.8-1.2-1.8.1-2.4 1.2-.4 1.6.9 1.6.9M16 6.5c.5-.8 1.2-1.8-.1-2.4-1.2-.4-1.6.9-1.6.9" stroke="#FF9500" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    'scikit-learn': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="9" fill="#F7931E" opacity=".12"/>
        <path d="M5 12h14M12 5v14M7 7l10 10M17 7L7 17" stroke="#F7931E" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="#3399CC"/>
        <circle cx="7" cy="7" r="1.7" fill="#F7931E"/>
        <circle cx="17" cy="7" r="1.7" fill="#F7931E"/>
        <circle cx="7" cy="17" r="1.7" fill="#F7931E"/>
        <circle cx="17" cy="17" r="1.7" fill="#F7931E"/>
      </svg>
    ),
    'LangChain': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <defs>
          <linearGradient id="langchain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A3A5C"/>
            <stop offset="100%" stopColor="#3E7FC1"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="5" fill="url(#langchain-grad)"/>
        <path d="M4.5 12h4l2.5-5 2.5 10 2-5H19.5" stroke="#6EE7F7" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    /* ─── TOOLS ─── */
    'Git': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M22.2 11.5l-9.7-9.7c-.6-.6-1.5-.6-2.1 0L8.3 3.9l2.8 2.8c.6-.3 1.4-.2 2 .4.5.5.6 1.3.4 2L16 11.6c.6-.3 1.5-.2 2 .4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.6-.7-1.4-.3-2.1L12.8 10v7c.4.2.7.5 1 1 .7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.3.5-.5.8-.6v-7L9.5 7.8c-.6.3-1.4.2-2-.4-.7-.7-.7-1.8 0-2.5.7-.7 1.8-.7 2.5 0L12.1 7l1.9-1.9-1.8-1.8c-.6-.6-1.5-.6-2.1 0L1.8 11.5c-.6.6-.6 1.5 0 2.1l9.7 9.7c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.2z" fill="#F05032"/>
      </svg>
    ),
    'Jira': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <defs>
          <linearGradient id="jira-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2684FF"/>
            <stop offset="100%" stopColor="#0052CC"/>
          </linearGradient>
        </defs>
        <path d="M12 2L3.5 10.7l3.7 3.7L12 10l4.8 4.4 3.7-3.7L12 2z" fill="url(#jira-grad)"/>
        <path d="M12 10.3L7.2 15.1l4.8 4.4 4.8-4.4L12 10.3z" fill="url(#jira-grad)"/>
      </svg>
    ),
    'Figma': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect x="8" y="2" width="8" height="6" rx="3" fill="#F24E1E"/>
        <rect x="8" y="9" width="4" height="6" rx="3" fill="#FF7262"/>
        <rect x="8" y="16" width="8" height="6" rx="3" fill="#0ACF83"/>
        <circle cx="16" cy="12" r="3" fill="#1ABCFE"/>
        <rect x="8" y="9" width="4" height="6" rx="0" fill="#A259FF"/>
        <path d="M8 9h4v6H8z" fill="#A259FF"/>
      </svg>
    ),
    'Postman': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
        <path d="M16 8L8 16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M13.5 7.5h3V11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="9" cy="15" r="1.8" fill="#fff"/>
      </svg>
    ),
    'VS Code': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M17 2L7.3 13.8 3 10 2 12l5 4.5 1.3-1.5L17 4.5l4 2V18l-4 2-9.5-6.5-4 3.5L4.5 19l3.5-3L17 22l5-2.5V4.5L17 2z" fill="#007ACC"/>
      </svg>
    ),
    'Slack': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M9.1 14.4c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6h1.6v1.6z" fill="#E01E5A"/>
        <path d="M9.9 14.4c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v4.1c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6v-4.1z" fill="#E01E5A"/>
        <path d="M11.5 9.1c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6v1.6h-1.6z" fill="#36C5F0"/>
        <path d="M11.5 9.9c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6H7.4c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h4.1z" fill="#36C5F0"/>
        <path d="M14.9 11.5c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6h-1.6v-1.6z" fill="#2EB67D"/>
        <path d="M14.1 11.5c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6V7.4c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v4.1z" fill="#2EB67D"/>
        <path d="M12.5 14.9c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6v-1.6h1.6z" fill="#ECB22E"/>
        <path d="M12.5 14.1c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h4.1c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6h-4.1z" fill="#ECB22E"/>
      </svg>
    ),
    'Notion': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <rect width="24" height="24" rx="4" fill="#fff"/>
        <rect width="24" height="24" rx="4" fill="none" stroke="#e0e0e0"/>
        <path d="M6 5h8.5l4 4.5V19H6V5z" fill="#fff" stroke="#333" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M14.5 5v4.5H19" fill="none" stroke="#333" strokeWidth="1.2" strokeLinejoin="round"/>
        <line x1="8.5" y1="11.5" x2="16" y2="11.5" stroke="#555" strokeWidth="1"/>
        <line x1="8.5" y1="14.5" x2="14" y2="14.5" stroke="#555" strokeWidth="1"/>
        <line x1="8.5" y1="17.5" x2="12" y2="17.5" stroke="#555" strokeWidth="1"/>
      </svg>
    ),
    'Vercel': (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <polygon points="12,3.5 22,20.5 2,20.5" fill="#000"/>
      </svg>
    ),
  };

  return icons[name] ?? (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <rect width="24" height="24" rx="4" fill="#888" opacity=".2"/>
      <text x="12" y="16" textAnchor="middle" fontSize="9" fill="#666" fontFamily="Arial">{name.slice(0,3)}</text>
    </svg>
  );
};

const technologies = {
  frontend: [
    { name: 'React' }, { name: 'Next.js' }, { name: 'Angular' }, { name: 'Vue.js' },
    { name: 'TypeScript' }, { name: 'Tailwind CSS' }, { name: 'SASS' }, { name: 'Redux' }
  ],
  backend: [
    { name: 'Node.js' }, { name: 'Python' }, { name: '.NET' }, { name: 'Java' },
    { name: 'Go' }, { name: 'PHP/Laravel' }, { name: 'Ruby on Rails' }, { name: 'GraphQL' }
  ],
  mobile: [
    { name: 'React Native' }, { name: 'Flutter' }, { name: 'Swift' },
    { name: 'Kotlin' }, { name: 'Ionic' }, { name: 'Xamarin' }
  ],
  database: [
    { name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'MySQL' }, { name: 'Redis' },
    { name: 'Elasticsearch' }, { name: 'Firebase' }, { name: 'DynamoDB' }, { name: 'Supabase' }
  ],
  cloud: [
    { name: 'AWS' }, { name: 'Azure' }, { name: 'Google Cloud' }, { name: 'Docker' },
    { name: 'Kubernetes' }, { name: 'Jenkins' }, { name: 'Terraform' }, { name: 'GitHub Actions' }
  ],
  ai_ml: [
    { name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'OpenAI' },
    { name: 'Hugging Face' }, { name: 'scikit-learn' }, { name: 'LangChain' }
  ],
  tools: [
    { name: 'Git' }, { name: 'Jira' }, { name: 'Figma' }, { name: 'Postman' },
    { name: 'VS Code' }, { name: 'Slack' }, { name: 'Notion' }, { name: 'Vercel' }
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
            style={{ background: `${colors.secondary}20`, color: colors.secondary }}
          >
            Our Tech Stack
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Technologies We<span style={{ color: colors.secondary }}> Use</span>
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
                <div className="flex justify-center mb-3">
                  <TechIcon name={tech.name} size={42} />
                </div>
                <div className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
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
              { title: 'Performance', desc: 'Technologies optimized for speed and efficiency' },
              { title: 'Scalability', desc: 'Solutions that grow with your business' },
              { title: 'Security', desc: 'Industry-standard security practices' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-semibold mb-2" style={{ color: colors.secondary }}>{item.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}