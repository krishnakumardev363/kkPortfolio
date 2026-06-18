// ============================================
// SKILLS SECTION - GREEN MATRIX THEME
// ============================================
import { useEffect, useRef, useState } from 'react';

// ============================================
// COLOR CONSTANTS
// ============================================
const GREEN = '#00ff88';
const TEAL = '#00e5ff';

// ============================================
// SKILLS DATA
// ============================================
const skillCategories = [
  { title: 'Languages', color: GREEN, skills: [{ name: 'Java', level: 85 }, { name: 'JavaScript', level: 82 }, { name: 'Python', level: 72 }] },
  { title: 'Frontend', color: TEAL, skills: [{ name: 'React.js', level: 85 }, { name: 'HTML & CSS', level: 90 }, { name: 'Tailwind CSS', level: 82 }] },
  { title: 'Backend', color: '#00c853', skills: [{ name: 'Node.js', level: 80 }, { name: 'Express.js', level: 78 }, { name: 'Spring Boot', level: 72 }] },
  { title: 'Database & Tools', color: '#69ff47', skills: [{ name: 'MongoDB', level: 78 }, { name: 'MySQL', level: 75 }, { name: 'Git & Postman', level: 80 }] },
];

// ============================================
// TECH BUBBLES DATA
// ============================================
const techBubbles = [
  { name: 'React', color: '#00e5ff', emoji: '⚛️' },
  { name: 'Node.js', color: '#00ff88', emoji: '🟢' },
  { name: 'MongoDB', color: '#00c853', emoji: '🍃' },
  { name: 'Java', color: '#69ff47', emoji: '☕' },
  { name: 'Spring Boot', color: '#00e5ff', emoji: '🌱' },
  { name: 'Python', color: '#00ff88', emoji: '🐍' },
  { name: 'MySQL', color: '#00c853', emoji: '🗄️' },
  { name: 'Git', color: '#69ff47', emoji: '🔀' },
];

const Skills = () => {
  // ============================================
  // STATE
  // ============================================
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);

  // ============================================
  // INTERSECTION OBSERVER
  // ============================================
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); setTimeout(() => setAnimated(true), 250); }
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // ============================================
  // RENDER
  // ============================================
  return (
    <section id="skills" ref={ref}
      style={{ position: 'relative', zIndex: 10, padding: '80px 24px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity .8s ease, transform .8s ease' }}>

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ============ SECTION HEADER ============ */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', letterSpacing: '3px', color: GREEN, textTransform: 'uppercase' }}>What I Know</span>
          <h2 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#fff', marginTop: '10px' }}>
            My <span style={{ background: `linear-gradient(135deg,${GREEN},${TEAL})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Skills</span>
          </h2>
          <div style={{ width: '80px', height: '2px', background: `linear-gradient(90deg,${GREEN},${TEAL})`, margin: '14px auto 0', borderRadius: '2px', boxShadow: `0 0 10px ${GREEN}88` }} />
        </div>

        {/* ============ SKILL CARDS GRID ============ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {skillCategories.map(cat => (
            <div key={cat.title} style={{
              background: 'rgba(0,255,136,0.04)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${cat.color}30`,
              borderRadius: '16px', padding: '24px',
              boxShadow: `inset 0 1px 0 ${cat.color}15, 0 4px 24px rgba(0,0,0,0.3)`,
              transition: 'all .3s ease',
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${cat.color}60`; e.currentTarget.style.boxShadow = `inset 0 1px 0 ${cat.color}30, 0 20px 50px rgba(0,0,0,0.4), 0 0 25px ${cat.color}15`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = `${cat.color}30`; e.currentTarget.style.boxShadow = `inset 0 1px 0 ${cat.color}15, 0 4px 24px rgba(0,0,0,0.3)`; e.currentTarget.style.transform = 'translateY(0)'; }}>

              {/* Category Title */}
              <h3 style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: cat.color, marginBottom: '20px', textShadow: `0 0 10px ${cat.color}66` }}>
                {cat.title}
              </h3>

              {/* Skill Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#cbd5e1' }}>{skill.name}</span>
                      <span style={{ fontSize: '11px', fontFamily: 'Orbitron,sans-serif', fontWeight: 700, color: cat.color, background: `${cat.color}18`, border: `1px solid ${cat.color}35`, padding: '2px 10px', borderRadius: '50px' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{ height: '7px', borderRadius: '50px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '50px', width: animated ? `${skill.level}%` : '0%', background: `linear-gradient(90deg,${cat.color}77,${cat.color})`, boxShadow: `0 0 12px ${cat.color}66`, transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ============ TECH BUBBLES ============ */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '16px', fontFamily: 'Inter,sans-serif' }}>Technologies I work with</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {techBubbles.map(tech => (
              <div key={tech.name} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 500, color: '#cbd5e1', border: `1px solid ${tech.color}35`, background: `${tech.color}0f`, cursor: 'default', transition: 'all .2s' }}
                onMouseOver={e => { e.currentTarget.style.color = tech.color; e.currentTarget.style.borderColor = `${tech.color}70`; e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}25`; }}
                onMouseOut={e => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.borderColor = `${tech.color}35`; e.currentTarget.style.boxShadow = 'none'; }}>
                <span>{tech.emoji}</span><span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
