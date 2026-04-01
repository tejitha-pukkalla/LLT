import React, { useRef, useEffect } from 'react';
import { Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

const UNIT = 'Transforming Ideas into Digital Reality \u2022 Web Development \u2022 Mobile Apps \u2022 Software Solutions \u2022 Digital Marketing \u2022 Cloud Services \u2022\u00a0\u00a0\u00a0\u00a0';

const SOCIALS = [
  { Icon: MessageCircle, href: 'https://wa.me/919502924788', label: 'WhatsApp' },
  { Icon: Instagram,     href: '#',                           label: 'Instagram' },
  { Icon: Linkedin,      href: '#',                           label: 'LinkedIn'  },
  { Icon: Facebook,      href: '#',                           label: 'Facebook'  },
];

export default function TopBar() {
  const { colors } = useTheme();

  const wrapRef  = useRef(null); // overflow:hidden ticker container
  const trackRef = useRef(null); // the moving strip
  const styleRef = useRef(null); // injected <style> tag

  useEffect(() => {
    // Build a hidden probe span to measure one UNIT's real pixel width,
    // then populate the track with enough repetitions so it always
    // overflows the container, then inject a pixel-exact @keyframes rule.
    const probe = document.createElement('span');
    probe.style.cssText =
      'position:fixed;top:-9999px;left:-9999px;visibility:hidden;' +
      'font-size:12px;white-space:nowrap;pointer-events:none;';
    probe.textContent = UNIT;
    document.body.appendChild(probe);

    function build() {
      if (!wrapRef.current || !trackRef.current) return;

      const containerW = wrapRef.current.offsetWidth;
      const unitW      = probe.offsetWidth;
      if (!containerW || !unitW) return;

      // Each "set" must be at least as wide as the container so no gap ever shows.
      const reps = Math.ceil(containerW / unitW) + 2;
      const setText = UNIT.repeat(reps);

      // Two identical sets — animation scrolls exactly one set width (px),
      // then resets: set-2 lines up perfectly with where set-1 started.
      trackRef.current.innerHTML =
        `<span class="_tb_set">${setText}</span>` +
        `<span class="_tb_set">${setText}</span>`;

      const setW = trackRef.current.querySelector('._tb_set').offsetWidth;

      // Inject / replace the keyframe rule
      if (!styleRef.current) {
        styleRef.current = document.createElement('style');
        document.head.appendChild(styleRef.current);
      }
      styleRef.current.textContent = `
        @keyframes _tb_scroll {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${setW}px); }
        }
        #_tb_track {
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;
          animation: _tb_scroll 60s linear infinite;
        }
        #_tb_track ._tb_set {
          font-size: 12px;
          color: rgba(255,255,255,0.75);
          pointer-events: none;
          flex-shrink: 0;
        }
        #_tb_wrap:hover #_tb_track {
          animation-play-state: paused !important;
        }
      `;
    }

    // Small delay so the DOM has laid out and offsetWidth is reliable
    const t = setTimeout(build, 60);
    window.addEventListener('resize', build);

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', build);
      document.body.removeChild(probe);
      if (styleRef.current) styleRef.current.textContent = '';
    };
  }, []);

  return (
    <>
      <style>{`
        ._tb_contact a {
          display: flex; align-items: center; gap: 5px;
          color: rgba(255,255,255,0.9); font-size: 13px; text-decoration: none;
          transition: color 0.15s;
        }
        ._tb_contact a:hover { color: #fff; }
        ._tb_divider {
          width: 1px; height: 14px;
          background: rgba(255,255,255,0.25);
          flex-shrink: 0; margin: 0 12px;
        }
        ._tb_soc {
          color: rgba(255,255,255,0.8); text-decoration: none;
          display: flex; align-items: center;
          transition: color 0.18s, transform 0.18s;
        }
        ._tb_soc:hover { color: #fff !important; transform: translateY(-2px); }
        @media (max-width: 768px) {
          ._tb_contact { display: none !important; }
          ._tb_divider  { display: none !important; }
        }
      `}</style>

      <div style={{
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
        width: '100%', overflow: 'hidden', boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          padding: '7px 20px', width: '100%', boxSizing: 'border-box',
        }}>

          {/* LEFT: Contact info */}
          <div className="_tb_contact" style={{
            display: 'flex', alignItems: 'center', gap: '18px',
            flexShrink: 0, whiteSpace: 'nowrap',
          }}>
            <a href="tel:+919502924788">
              <Phone size={13} /><span>+91 95029 24788</span>
            </a>
            <a href="mailto:bdm@logiclifetechnologies.com">
              <Mail size={13} /><span>bdm@logiclifetechnologies.com</span>
            </a>
          </div>

          {/* thin separator */}
          <div className="_tb_divider" />

          {/* CENTER: Ticker — takes all remaining space */}
          <div
            id="_tb_wrap"
            ref={wrapRef}
            style={{
              flex: '1 1 0',
              minWidth: 0,
              overflow: 'hidden',
              // cursor:text so hover is clearly interactive (NOT cursor:default)
              cursor: 'text',
            }}
          >
            <div id="_tb_track" ref={trackRef} />
          </div>

          {/* thin separator */}
          <div className="_tb_divider" />

          {/* RIGHT: Social icons */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0,
          }}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank"
                rel="noopener noreferrer" aria-label={label} className="_tb_soc">
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}