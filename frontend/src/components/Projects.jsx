// ============================================
// PROJECTS SECTION - GREEN MATRIX THEME
// ============================================
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Link2 } from 'lucide-react';

// ============================================
// PROJECTS DATA - GREEN TONES
// ============================================
const projects = [
  { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce app with MERN stack — authentication, cart system, and admin dashboard for product & order management.', tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'], color: '#00ff88', icon: '🛒', cat: 'mern' },
  { title: 'Face Recognition Attendance', desc: 'Automated attendance system using Python and OpenCV for real-time face detection and automated student tracking.', tags: ['Python', 'OpenCV', 'NumPy', 'Flask'], color: '#00e5ff', icon: '👁️', cat: 'python' },
  { title: 'Real-Time Chat App', desc: 'Instant messaging app using Node.js and Socket.io for real-time bidirectional communication between users.', tags: ['Node.js', 'Socket.io', 'Express'], color: '#00c853', icon: '💬', cat: 'mern' },
  { title: 'Student Management System', desc: 'Full CRUD system with Spring Boot and MySQL — RESTful API endpoints and clean MVC architecture.', tags: ['Spring Boot', 'MySQL', 'Java', 'REST API'], color: '#69ff47', icon: '🎓', cat: 'java' },
  { title: 'URL Shortener', desc: 'URL shortening service with Node.js and MongoDB — unique link generation, redirection, and click analytics.', tags: ['Node.js', 'MongoDB', 'Express', 'nanoid'], color: '#00e5ff', icon: '🔗', cat: 'mern' },
  { title: 'Waste Management System', desc: 'Smart campus waste management that helped reduce college waste by 20% through smart tracking and reporting.', tags: ['React', 'Node.js', 'MongoDB', 'Charts'], color: '#00ff88', icon: '♻️', cat: 'mern' },
];

// ============================================
// FILTER TABS
// ============================================
const filters = [
  { label: 'All', value: 'all' },
  { label: 'MERN', value: 'mern' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' },
];

const Projects = () => {
  // ============================================
  // STATE
  // ============================================
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  // ============================================
  // INTERSECTION OBSERVER
  // ============================================
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // ============================================
  // RENDER
  // ============================================
  return (
    <section id="projects" ref={ref}
      style={{ position: 'relative', zIndex: 10, padding: '80px 24px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity .8s ease, transform .8s ease' }}>

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ============ SECTION HEADER ============ */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase' }}>What I've Built</span>
          <h2 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#fff', marginTop: '10px' }}>
            My <span style={{ background: 'linear-gradient(135deg,#00ff88,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
          </h2>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg,#00ff88,#00e5ff)', margin: '14px auto 0', borderRadius: '2px', boxShadow: '0 0 10px #00ff8888' }} />
        </div>

        {/* ============ FILTER BUTTONS - 3D STYLE ============ */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f.value} onClick={() => setFilter(f.value)} style={{
              padding: '9px 22px', minHeight: '40px', borderRadius: '10px',
              fontSize: '13px', fontWeight: 700, cursor: 'pointer', border: 'none',
              transition: 'all .15s ease',
              background: filter === f.value ? 'linear-gradient(135deg,#00ff88,#00c853)' : 'rgba(0,255,136,0.07)',
              color: filter === f.value ? '#010a06' : '#94a3b8',
              outline: filter === f.value ? 'none' : '1px solid rgba(0,255,136,0.2)',
              transform: filter === f.value ? 'translateY(2px)' : 'translateY(0)',
              boxShadow: filter === f.value ? '0 3px 0 #006b2e, 0 0 15px rgba(0,255,136,0.3)' : 'none',
            }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* ============ PROJECTS GRID ============ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {filtered.map(project => (
            <div key={project.title} style={{
              background: 'rgba(0,255,136,0.03)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${project.color}28`,
              borderRadius: '16px', padding: '22px',
              display: 'flex', flexDirection: 'column',
              boxShadow: `inset 0 1px 0 ${project.color}12, 0 4px 20px rgba(0,0,0,0.3)`,
              transition: 'all .3s ease', cursor: 'default',
            }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = `${project.color}55`; e.currentTarget.style.boxShadow = `inset 0 1px 0 ${project.color}25, 0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${project.color}12`; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${project.color}28`; e.currentTarget.style.boxShadow = `inset 0 1px 0 ${project.color}12, 0 4px 20px rgba(0,0,0,0.3)`; }}>

              {/* ---- Icon + Action Buttons ---- */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0, background: `${project.color}15`, border: `1px solid ${project.color}35`, boxShadow: `0 0 15px ${project.color}20` }}>
                  {project.icon}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[<Link2 size={13} />, <ExternalLink size={13} />].map((icon, i) => (
                    <button key={i} style={{ width: '30px', height: '30px', borderRadius: '8px', border: '1px solid rgba(0,255,136,0.15)', background: 'rgba(0,255,136,0.06)', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .2s' }}
                      onMouseOver={e => { e.currentTarget.style.color = '#00ff88'; e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'; }}
                      onMouseOut={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(0,255,136,0.15)'; }}>
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* ---- Title ---- */}
              <h3 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 700, fontSize: '13px', color: '#fff', marginBottom: '8px', lineHeight: 1.4 }}>
                {project.title}
              </h3>

              {/* ---- Description ---- */}
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.65, flex: 1, marginBottom: '14px', fontFamily: 'Inter,sans-serif' }}>
                {project.desc}
              </p>

              {/* ---- Tags ---- */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '50px', fontWeight: 500, background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
