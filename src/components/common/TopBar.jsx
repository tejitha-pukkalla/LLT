// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
// import { useTheme } from '../theme/ThemeContext';

// export default function TopBar() {
//   const { isDark, colors } = useTheme();
  
//   const tickerText = "Transforming Ideas into Digital Reality • Web Development • Mobile Apps • Software Solutions • Digital Marketing • Cloud Services • ";
  
//   return (
//     <div 
//       className="relative overflow-hidden py-2 px-4"
//       style={{ 
//         background: isDark 
//           ? `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` 
//           : `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
//         {/* Contact Info */}
//         <div className="hidden md:flex items-center gap-6 text-white/90 text-sm">
//           <a 
//             href="tel:+919876543210" 
//             className="flex items-center gap-2 hover:text-white transition-colors"
//           >
//             <Phone className="w-3.5 h-3.5" />
//             <span>+91 98765 43210</span>
//           </a>
//           <a 
//             href="mailto:info@logiclife.tech" 
//             className="flex items-center gap-2 hover:text-white transition-colors"
//           >
//             <Mail className="w-3.5 h-3.5" />
//             <span>info@logiclife.tech</span>
//           </a>
//         </div>

//         {/* Animated Ticker - Center */}
//         <div className="absolute left-1/2 -translate-x-1/2 overflow-hidden w-1/3 hidden lg:block">
//           <motion.div
//             className="whitespace-nowrap text-white/70 text-xs"
//             animate={{ x: [0, -500] }}
//             transition={{ 
//               duration: 15, 
//               repeat: Infinity, 
//               ease: "linear" 
//             }}
//           >
//             {tickerText.repeat(3)}
//           </motion.div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center gap-3 ml-auto">
//           {[
//             { icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp" },
//             { icon: Instagram, href: "#", label: "Instagram" },
//             { icon: Linkedin, href: "#", label: "LinkedIn" },
//             { icon: Facebook, href: "#", label: "Facebook" }
//           ].map((social, i) => (
//             <motion.a
//               key={i}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white/80 hover:text-white transition-all hover:scale-110"
//               whileHover={{ y: -2 }}
//               aria-label={social.label}
//             >
//               <social.icon className="w-4 h-4" />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }















import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const TICKER = 'Transforming Ideas into Digital Reality \u2022 Web Development \u2022 Mobile Apps \u2022 Software Solutions \u2022 Digital Marketing \u2022 Cloud Services \u2022\u00a0\u00a0\u00a0';

export default function TopBar() {
  const { colors } = useTheme();

  const SOCIALS = [
    { Icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { Icon: Instagram,     href: '#',                           label: 'Instagram' },
    { Icon: Linkedin,      href: '#',                           label: 'LinkedIn'  },
    { Icon: Facebook,      href: '#',                           label: 'Facebook'  },
  ];

  return (
    <>
      <style>{`
        @keyframes _tb_scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        ._tb_track {
          display: inline-block;
          white-space: nowrap;
          animation: _tb_scroll 22s linear infinite;
        }
        ._tb_mask:hover ._tb_track {
          animation-play-state: paused;
        }
        ._tb_social:hover {
          color: #ffffff !important;
          transform: translateY(-2px);
        }
        @media (max-width: 767px) {
          ._tb_contact { display: none !important; }
          ._tb_mask    { display: none !important; }
        }
      `}</style>

      <div style={{
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 20px',
          boxSizing: 'border-box',
          width: '100%',
        }}>

          {/* LEFT: contact */}
          <div className="_tb_contact" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}>
            <a href="tel:+919876543210" style={{ display:'flex', alignItems:'center', gap:'6px', color:'rgba(255,255,255,0.9)', fontSize:'13px', textDecoration:'none' }}>
              <Phone size={13} /> <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@logiclife.tech" style={{ display:'flex', alignItems:'center', gap:'6px', color:'rgba(255,255,255,0.9)', fontSize:'13px', textDecoration:'none' }}>
              <Mail size={13} /> <span>info@logiclife.tech</span>
            </a>
          </div>

          {/* CENTER: ticker — fills every remaining pixel */}
          <div className="_tb_mask" style={{
            flex: '1 1 0',
            minWidth: 0,
            overflow: 'hidden',
            margin: '0 16px',
            cursor: 'default',
          }}>
            <div className="_tb_track" style={{ fontSize:'12px', color:'rgba(255,255,255,0.65)' }}>
              {TICKER}{TICKER}{TICKER}{TICKER}
            </div>
          </div>

          {/* RIGHT: social icons — pushed to far right, never shrinks */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexShrink: 0,
            marginLeft: 'auto',
          }}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="_tb_social"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255,255,255,0.8)',
                  transition: 'color 0.2s, transform 0.2s',
                  textDecoration: 'none',
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}