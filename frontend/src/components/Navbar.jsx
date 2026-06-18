// ============================================
// NAVBAR COMPONENT - GREEN MATRIX THEME
// ============================================
import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

// ============================================
// NAV LINKS DATA
// ============================================
const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

// ============================================
// COLOR CONSTANTS
// ============================================
const GREEN = '#00ff88';
const TEAL = '#00e5ff';

const Navbar = () => {
  // ============================================
  // STATE
  // ============================================
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  // ============================================
  // SCROLL LISTENER
  // ============================================
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = '#hero';
      navLinks.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && window.scrollY >= el.offsetTop - 130) current = href;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ============================================
  // RENDER
  // ============================================
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '10px 0' : '16px 0',
      background: scrolled ? 'rgba(1,10,6,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,255,136,0.15)' : 'none',
      transition: 'all 0.4s ease',
    }}>

      {/* ============ INNER CONTAINER ============ */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* ============ LOGO ============ */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg,#00ff88,#00c853)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,255,136,0.4)' }}>
            <Rocket size={15} color="#010a06" />
          </div>
          <span style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: '1.1rem', background: 'linear-gradient(135deg,#00ff88,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            KK.dev
          </span>
        </a>

        {/* ============ DESKTOP LINKS ============ */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              textDecoration: 'none', fontSize: '14px', fontWeight: 500,
              color: active === link.href ? GREEN : '#94a3b8',
              position: 'relative', paddingBottom: '4px',
              transition: 'color 0.3s',
            }}>
              {link.label}
              {/* Active underline */}
              <span style={{
                position: 'absolute', bottom: 0, left: 0,
                width: active === link.href ? '100%' : '0%',
                height: '2px',
                background: `linear-gradient(90deg,${GREEN},${TEAL})`,
                borderRadius: '2px',
                transition: 'width 0.3s ease',
              }} />
            </a>
          ))}
        </div>

        {/* ============ HIRE ME BUTTON - 3D PRESS ============ */}
        <a href="#contact" className="hide-mobile btn-3d" style={{
          padding: '11px 26px', minHeight: '44px',
          borderRadius: '12px', fontSize: '14px',
          textDecoration: 'none', display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
          whiteSpace: 'nowrap',
        }}>
          Hire Me
          {/* ⚡ */}
        </a>

        {/* ============ HAMBURGER BUTTON ============ */}
        <button onClick={() => setOpen(!open)} className="show-mobile" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '42px', height: '42px', borderRadius: '12px',
          background: 'rgba(0,255,136,0.1)',
          border: '1px solid rgba(0,255,136,0.3)',
          color: GREEN, cursor: 'pointer',
          boxShadow: '0 0 15px rgba(0,255,136,0.2)',
        }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ============ MOBILE MENU ============ */}
      {open && (
        <div style={{
          margin: '10px 16px 0', padding: '8px 0',
          background: 'rgba(1,10,6,0.98)',
          border: '1px solid rgba(0,255,136,0.2)',
          borderRadius: '16px', backdropFilter: 'blur(24px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,136,0.08)',
          animation: 'slideDown 0.2s ease forwards',
        }}>

          {/* ---- Mobile Nav Links ---- */}
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              display: 'flex', alignItems: 'center',
              padding: '14px 20px', textDecoration: 'none',
              fontSize: '15px', fontWeight: 500,
              color: active === link.href ? GREEN : '#cbd5e1',
              background: active === link.href ? 'rgba(0,255,136,0.08)' : 'transparent',
              borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              transition: 'all .2s',
            }}>
              {/* Active indicator bar */}
              {active === link.href && (
                <span style={{ width: '3px', height: '18px', background: GREEN, borderRadius: '2px', marginRight: '12px', flexShrink: 0, boxShadow: `0 0 8px ${GREEN}` }} />
              )}
              {link.label}
            </a>
          ))}

          {/* ---- Mobile Hire Me Button ---- */}
          <div style={{ padding: '12px 16px 8px' }}>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-3d" style={{
              display: 'block', textAlign: 'center',
              padding: '13px 24px', borderRadius: '12px',
              fontSize: '14px', textDecoration: 'none',
            }}>
              🚀 Hire Me
            </a>
          </div>

        </div>
      )}

      <style>{`@keyframes slideDown { from{opacity:0;transform:translateY(-8px);} to{opacity:1;transform:translateY(0);} }`}</style>
    </nav>
  );
};

export default Navbar;
