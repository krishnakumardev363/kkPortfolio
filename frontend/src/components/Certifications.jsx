// ============================================
// CERTIFICATIONS SECTION - GREEN MATRIX THEME
// ============================================
import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

// ============================================
// CERTIFICATIONS DATA
// ============================================
const certs = [
  { name: 'Java Programming', icon: '☕', color: '#00ff88' },
  { name: 'Python Programming', icon: '🐍', color: '#00e5ff' },
  { name: 'JavaScript', icon: '💛', color: '#00c853' },
  { name: 'React.js', icon: '⚛️', color: '#69ff47' },
  { name: 'Node.js', icon: '🟢', color: '#00ff88' },
  { name: 'MongoDB', icon: '🍃', color: '#00e5ff' },
];

const Certifications = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref}
      style={{ position: 'relative', zIndex: 10, padding: '80px 24px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity .8s ease, transform .8s ease' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ============ HEADER ============ */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase' }}>Proof of Skills</span>
          <h2 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#fff', marginTop: '10px' }}>
            My <span style={{ background: 'linear-gradient(135deg,#00ff88,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Certifications</span>
          </h2>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg,#00ff88,#00e5ff)', margin: '14px auto 0', borderRadius: '2px', boxShadow: '0 0 10px #00ff8888' }} />
        </div>

        {/* ============ CERTS GRID ============ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {certs.map(cert => (
            <div key={cert.name}
              style={{ background: 'rgba(0,255,136,0.03)', backdropFilter: 'blur(20px)', border: `1px solid ${cert.color}28`, borderRadius: '16px', padding: '28px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: `inset 0 1px 0 ${cert.color}12`, transition: 'all .3s ease', cursor: 'default' }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = `${cert.color}55`; e.currentTarget.style.boxShadow = `inset 0 1px 0 ${cert.color}25, 0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${cert.color}18`; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${cert.color}28`; e.currentTarget.style.boxShadow = `inset 0 1px 0 ${cert.color}12`; }}>

              {/* Badge */}
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', background: `${cert.color}15`, border: `2px solid ${cert.color}45`, boxShadow: `0 0 25px ${cert.color}30` }}>
                  {cert.icon}
                </div>
                <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg,#00ff88,#00c853)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 8px rgba(0,255,136,0.6)' }}>
                  <Award size={10} color="#010a06" />
                </div>
              </div>

              <h3 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 700, fontSize: '12px', color: '#fff', marginBottom: '10px', lineHeight: 1.4 }}>{cert.name}</h3>

              <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: cert.color, fontSize: '13px', textShadow: `0 0 6px ${cert.color}` }}>★</span>)}
              </div>

              <span style={{ fontSize: '11px', padding: '4px 14px', borderRadius: '50px', background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}35`, fontWeight: 600 }}>
                Verified ✓
              </span>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#475569', fontSize: '13px', marginTop: '36px', fontFamily: 'Inter,sans-serif' }}>
          Continuously learning & adding new certifications 🚀
        </p>
      </div>
    </section>
  );
};
export default Certifications;
