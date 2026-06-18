// ============================================
// CONTACT SECTION - GREEN MATRIX THEME
// ============================================
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Link2, CheckCircle, AlertCircle } from 'lucide-react';

// ============================================
// CONTACT INFO DATA
// ============================================
const contactItems = [
  { icon: <Mail size={15} />, label: 'Email', val: 'krishnakumara7226@gmail.com', href: 'mailto:krishnakumara7226@gmail.com', color: '#00ff88' },
  { icon: <Phone size={15} />, label: 'Phone', val: '+91 8248903156', href: 'tel:+918248903156', color: '#00e5ff' },
  { icon: <MapPin size={15} />, label: 'Location', val: 'Panrutti, Tamil Nadu', href: null, color: '#00c853' },
  { icon: <Link2 size={15} />, label: 'LinkedIn', val: 'krishna-kumar-a-65309135b', href: 'https://www.linkedin.com/in/krishna-kumar-a-65309135b', color: '#69ff47' },
];

const inputStyle = {
  background: 'rgba(0,255,136,0.05)',
  border: '1.5px solid rgba(0,255,136,0.2)',
  borderRadius: '12px', padding: '12px 16px',
  color: '#e2e8f0', fontSize: '14px',
  fontFamily: 'Space Grotesk,sans-serif',
  outline: 'none', width: '100%', transition: 'all .3s',
};

// ============================================
// API BASE URL - USES ENV VAR IN PRODUCTION
// ============================================
const API_URL = import.meta.env.VITE_API_URL || '';

const Contact = () => {
  // ============================================
  // STATE
  // ============================================
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // ============================================
  // FORM HANDLERS
  // ============================================
  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault(); setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setStatus('success'); setMsg(data.message); setForm({ name: '', email: '', subject: '', message: '' }); }
      else { setStatus('error'); setMsg(data.message); }
    } catch { setStatus('error'); setMsg('Network error. Please try again.'); }
    setTimeout(() => setStatus(null), 5000);
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <section id="contact" ref={ref}
      style={{ position: 'relative', zIndex: 10, padding: '80px 24px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity .8s ease, transform .8s ease' }}>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* ============ HEADER ============ */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', letterSpacing: '3px', color: '#00ff88', textTransform: 'uppercase' }}>Let's Connect</span>
          <h2 style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#fff', marginTop: '10px' }}>
            Get In <span style={{ background: 'linear-gradient(135deg,#00ff88,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Touch</span>
          </h2>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg,#00ff88,#00e5ff)', margin: '14px auto 0', borderRadius: '2px', boxShadow: '0 0 10px #00ff8888' }} />
          <p style={{ color: '#94a3b8', marginTop: '16px', fontSize: '14px', maxWidth: '400px', margin: '16px auto 0', fontFamily: 'Inter,sans-serif', lineHeight: 1.7 }}>
            Open to internships, collaborations & full-time roles. Let's build something great!
          </p>
        </div>

        {/* ============ GRID ============ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px', alignItems: 'start' }}>

          {/* ============ LEFT: INFO ============ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(0,255,136,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,255,136,0.18)', borderRadius: '20px', padding: '28px', boxShadow: 'inset 0 1px 0 rgba(0,255,136,0.1)' }}>
              <h3 style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#00ff88', marginBottom: '24px' }}>Contact Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactItems.map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`, boxShadow: `0 0 12px ${item.color}20` }}>
                      {item.icon}
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '3px', fontFamily: 'Inter,sans-serif' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#cbd5e1', textDecoration: 'none', wordBreak: 'break-all', lineHeight: 1.4 }}>{item.val}</a>
                        : <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.4 }}>{item.val}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{ background: 'linear-gradient(135deg,rgba(0,255,136,0.08),rgba(0,229,255,0.05))', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 0 30px rgba(0,255,136,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00ff88', animation: 'twinkle 1.5s ease-in-out infinite', boxShadow: '0 0 10px #00ff88' }} />
                <span style={{ fontFamily: 'Orbitron,sans-serif', fontWeight: 700, fontSize: '13px', color: '#00ff88' }}>Available Now</span>
              </div>
              <p style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>Open for internships & full-time roles</p>
            </div>
          </div>

          {/* ============ RIGHT: FORM ============ */}
          <div style={{ background: 'rgba(0,255,136,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,255,136,0.18)', borderRadius: '20px', padding: '28px', boxShadow: 'inset 0 1px 0 rgba(0,255,136,0.1)' }}>
            <h3 style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#00ff88', marginBottom: '24px' }}>Send a Message</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[{ name: 'name', label: 'Your Name *', placeholder: 'Krishnakumar A', type: 'text' }, { name: 'email', label: 'Email *', placeholder: 'you@example.com', type: 'email' }].map(f => (
                  <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,255,136,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,255,136,0.1), 0 0 20px rgba(0,255,136,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,255,136,0.2)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>Subject *</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Internship Opportunity / Collaboration" required style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(0,255,136,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,255,136,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,255,136,0.2)'; e.target.style.boxShadow = 'none'; }} />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity or project..." rows={4} required style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(0,255,136,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,255,136,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,255,136,0.2)'; e.target.style.boxShadow = 'none'; }} />
              </div>

              {/* Status */}
              {status && status !== 'loading' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '12px', fontSize: '13px', background: status === 'success' ? 'rgba(0,255,136,0.1)' : 'rgba(239,68,68,0.1)', color: status === 'success' ? '#00ff88' : '#f87171', border: `1px solid ${status === 'success' ? 'rgba(0,255,136,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
                  {status === 'success' ? <CheckCircle size={15} /> : <AlertCircle size={15} />} {msg}
                </div>
              )}

              {/* Submit - 3D Button */}
              <button type="submit" disabled={status === 'loading'} className="btn-3d"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px 24px', minHeight: '50px', borderRadius: '12px', fontSize: '14px', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                {status === 'loading'
                  ? <><div style={{ width: '16px', height: '16px', border: '2px solid rgba(1,10,6,0.3)', borderTopColor: '#010a06', borderRadius: '50%', animation: 'spin .7s linear infinite' }} />Sending...</>
                  : <><Send size={15} />Send Message 🚀</>}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{ maxWidth: '1000px', margin: '60px auto 0', paddingTop: '28px', borderTop: '1px solid rgba(0,255,136,0.1)', textAlign: 'center' }}>
        <p style={{ color: '#475569', fontSize: '13px', fontFamily: 'Inter,sans-serif' }}>
          Copyright @2026 ❤️ by <span style={{ color: '#00ff88', fontWeight: 500 }}>Krishnakumar A</span> · MERN Stack + Tailwind CSS v4
        </p>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg);}} @keyframes twinkle{0%,100%{opacity:.3;}50%{opacity:1;}}`}</style>
    </section>
  );
};
export default Contact;
