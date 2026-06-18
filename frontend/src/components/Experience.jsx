// ============================================
// EXPERIENCE SECTION - GREEN MATRIX THEME
// ============================================
import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

// ============================================
// EXPERIENCE DATA
// ============================================
const experiences = [
  { company: 'Vel Technologies', role: 'Java Software Developer Intern', period: 'Feb 2026 – May 2026', location: 'Chennai, Tamil Nadu', color: '#00e5ff', current: true, highlights: ['Developed Spring Boot RESTful APIs with MySQL integration', 'Built scalable backend services following clean architecture', 'Collaborated in Agile development environment', 'Worked on Java-based enterprise applications'] },
  { company: 'VDart', role: 'Java Full Stack Development Intern', period: 'Nov 2025 – Jan 2026', location: 'Trichy, Tamil Nadu', color: '#00ff88', current: false, highlights: ['Built scalable web applications using MERN stack', 'Developed REST APIs and responsive front-end interfaces', 'Implemented JWT authentication and authorization', 'Focused on clean code, performance, and user-centric design'] },
];

const Experience = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref}
      style={{ position: 'relative', zIndex: 10, padding: '80px 24px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity .8s ease, transform .8s ease' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* ============ HEADER ============ */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase' }}>Where I've Worked</span>
          <h2 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#fff', marginTop: '10px' }}>
            Work <span style={{ background: 'linear-gradient(135deg,#00ff88,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Experience</span>
          </h2>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg,#00ff88,#00e5ff)', margin: '14px auto 0', borderRadius: '2px', boxShadow: '0 0 10px #00ff8888' }} />
        </div>

        {/* ============ TIMELINE ============ */}
        <div style={{ position: 'relative', paddingLeft: '60px' }}>
          <div style={{ position: 'absolute', left: '23px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(180deg,#00ff88,#00e5ff,transparent)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {experiences.map(exp => (
              <div key={exp.company} style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-49px', top: 0, width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${exp.color}18`, border: `2px solid ${exp.color}`, boxShadow: `0 0 20px ${exp.color}50` }}>
                  <Briefcase size={18} color={exp.color} />
                </div>
                <div style={{ background: 'rgba(0,255,136,0.03)', backdropFilter: 'blur(20px)', border: `1px solid ${exp.color}25`, borderRadius: '16px', padding: '24px', boxShadow: `inset 0 1px 0 ${exp.color}12` }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <span style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff' }}>{exp.company}</span>
                        {exp.current && <span style={{ fontSize: '11px', padding: '2px 10px', borderRadius: '50px', background: 'rgba(0,255,136,0.15)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}>Recent</span>}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: exp.color }}>{exp.role}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#94a3b8', justifyContent: 'flex-end', marginBottom: '4px' }}><Calendar size={11} />{exp.period}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#64748b', justifyContent: 'flex-end' }}><MapPin size={11} />{exp.location}</div>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {exp.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#94a3b8', fontFamily: 'Inter,sans-serif', lineHeight: 1.5 }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.color, flexShrink: 0, marginTop: '5px', boxShadow: `0 0 6px ${exp.color}` }} />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-49px', top: 0, width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', background: 'rgba(0,229,255,0.15)', border: '2px solid #00e5ff', boxShadow: '0 0 20px rgba(0,229,255,0.4)' }}>🎓</div>
              <div style={{ background: 'rgba(0,255,136,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <div style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '4px' }}>Dhanalakshmi Srinivasan University</div>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#00e5ff', marginBottom: '3px' }}>Bachelor of Computer Applications (BCA)</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>School of Arts and Science</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#94a3b8' }}><Calendar size={11} />2024 – 2027</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
