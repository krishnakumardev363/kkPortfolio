// ============================================
// HERO SECTION - GREEN MATRIX THEME
// ============================================
import { useEffect, useState } from 'react';
import { Link2, Mail, Download, ChevronDown } from 'lucide-react';

// ============================================
// COLOR CONSTANTS
// ============================================
const GREEN = '#00ff88';
const TEAL = '#00e5ff';
const DARK_GREEN = '#00c853';

// ============================================
// TYPEWRITER ROLES
// ============================================
const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Java Developer', 'React Developer'];

const Hero = () => {
  // ============================================
  // STATE - TYPEWRITER
  // ============================================
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // ============================================
  // TYPEWRITER EFFECT
  // ============================================
  useEffect(() => {
    const role = roles[roleIdx];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1)); i++;
        if (i > role.length) { setTyping(false); clearInterval(interval); setTimeout(() => setTyping(true), 1800); }
      } else {
        setDisplayed(role.slice(0, i - 1)); i--;
        if (i < 0) { setTyping(true); setRoleIdx(p => (p + 1) % roles.length); clearInterval(interval); }
      }
    }, typing ? 80 : 40);
    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  // ============================================
  // RENDER
  // ============================================
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, paddingTop: '100px', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px' }}>

      {/* ============ ORBIT RINGS - GREEN ============ */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
        <div style={{ width: '520px', height: '520px', borderRadius: '50%', border: '1px dashed rgba(0,255,136,0.12)', animation: 'spinSlow 28s linear infinite' }} />
        <div style={{ position: 'absolute', inset: '50px', borderRadius: '50%', border: '1px dashed rgba(0,229,255,0.1)', animation: 'spinSlow 45s linear infinite reverse' }} />
      </div>

      {/* ============ HERO CONTENT ============ */}
      <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* ---- Available Badge ---- */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', marginBottom: '28px', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)', color: GREEN, fontSize: '12px', fontWeight: 600, boxShadow: '0 0 20px rgba(0,255,136,0.1)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: GREEN, flexShrink: 0, animation: 'twinkle 1.5s ease-in-out infinite', boxShadow: `0 0 8px ${GREEN}` }} />
          Available for Internship & Job Opportunities
        </div>

        {/* ---- Name ---- */}
        <h1 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem,8vw,5rem)', lineHeight: 1.1, marginBottom: '18px' }}>
          <span style={{ color: '#fff' }}>KRISHNA</span>
          <span style={{ background: `linear-gradient(135deg,${GREEN},${TEAL},${DARK_GREEN})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>KUMAR</span>
          {/* <span style={{ color: '#fff' }}> A</span> */}
        </h1>

        {/* ---- Typewriter ---- */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', minHeight: '36px', marginBottom: '20px' }}>
          <span style={{ fontSize: 'clamp(1rem,3vw,1.4rem)', fontWeight: 600, color: TEAL, textShadow: `0 0 20px ${TEAL}88` }}>{displayed}</span>
          <span style={{ display: 'inline-block', width: '2px', height: '24px', background: GREEN, flexShrink: 0, animation: 'blink 1s step-end infinite', boxShadow: `0 0 8px ${GREEN}` }} />
        </div>

        {/* ---- Description ---- */}
        <p style={{ color: '#94a3b8', fontSize: 'clamp(0.85rem,2vw,1rem)', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.8, fontFamily: 'Inter,sans-serif' }}>
          Full Stack Developer crafting scalable web apps with{' '}
          <strong style={{ color: GREEN, fontWeight: 600 }}>MERN Stack</strong> &{' '}
          <strong style={{ color: TEAL, fontWeight: 600 }}>Spring Boot</strong>.
          Passionate about clean code, performance & user-centric design.
        </p>

        {/* ============ CTA BUTTONS - 3D PRESS ============ */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '36px' }}>

          {/* Primary - 3D Green */}
          <a href="#contact" className="btn-3d" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 32px', minHeight: '48px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap' }}>
            <Mail size={16} /> Get In Touch
          </a>

          {/* Secondary - Outline Teal */}
          <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 32px', minHeight: '48px', borderRadius: '12px', border: `1px solid rgba(0,229,255,0.4)`, background: 'rgba(0,229,255,0.08)', color: TEAL, textDecoration: 'none', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap', transition: 'all .2s', boxShadow: '0 0 15px rgba(0,229,255,0.1)' }}>
            View Projects
          </a>

          {/* Tertiary - Ghost */}
          <a href="/resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 28px', minHeight: '48px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: '#cbd5e1', textDecoration: 'none', fontSize: '14px', fontWeight: 500, whiteSpace: 'nowrap', transition: 'all .2s' }}>
            <Download size={15} /> Resume
          </a>

        </div>

        {/* ============ SOCIAL ICONS ============ */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '56px' }}>
          {[
            { href: 'https://www.linkedin.com/in/krishna-kumar-a-65309135b', icon: <Link2 size={17} />, label: 'LinkedIn' },
            { href: 'mailto:krishnakumara7226@gmail.com', icon: <Mail size={17} />, label: 'Email' },
            { href: 'https://github.com', icon: <Link2 size={17} />, label: 'GitHub' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
              style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', border: '1px solid rgba(0,255,136,0.2)', background: 'rgba(0,255,136,0.06)', textDecoration: 'none', transition: 'all .3s' }}
              onMouseOver={e => { e.currentTarget.style.color = GREEN; e.currentTarget.style.borderColor = `rgba(0,255,136,0.6)`; e.currentTarget.style.boxShadow = `0 0 15px rgba(0,255,136,0.3)`; }}
              onMouseOut={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(0,255,136,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* ============ STATS ============ */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px' }}>
          {[{ val: '6+', label: 'Projects' }, { val: '2', label: 'Internships' }, { val: '6+', label: 'Certifications' }].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem,4vw,2.2rem)', background: `linear-gradient(135deg,${GREEN},${TEAL})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {stat.val}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', fontFamily: 'Inter,sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* ============ SCROLL INDICATOR ============ */}
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', opacity: 0.4 }}>
        <span style={{ fontSize: '11px', color: '#64748b' }}>Scroll</span>
        <ChevronDown size={14} color="#64748b" />
      </div>

      <style>{`
        @keyframes spinSlow { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes blink { 50%{opacity:0;} }
        @keyframes twinkle { 0%,100%{opacity:.3;} 50%{opacity:1;} }
      `}</style>
    </section>
  );
};

export default Hero;
