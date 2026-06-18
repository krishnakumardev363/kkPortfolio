// ============================================
// STARFIELD - MATRIX GREEN THEME
// ============================================
import { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    // ============================================
    // CANVAS RESIZE
    // ============================================
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    // ============================================
    // STARS DATA
    // ============================================
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.3 + 0.3,
      speed: Math.random() * 0.004 + 0.001,
      off: Math.random() * Math.PI * 2,
      green: Math.random() > 0.6,
    }));

    let shooters = [];
    let t = 0;

    // ============================================
    // DRAW LOOP
    // ============================================
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ---- Nebula Blobs (green theme) ----
      [
        [canvas.width * 0.15, canvas.height * 0.3, 280, 'rgba(0,255,136,0.04)'],
        [canvas.width * 0.85, canvas.height * 0.6, 320, 'rgba(0,229,255,0.03)'],
        [canvas.width * 0.5, canvas.height * 0.15, 200, 'rgba(0,200,83,0.03)'],
      ].forEach(([x, y, r, c]) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, c); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      });

      // ---- Stars ----
      stars.forEach(s => {
        const a = 0.2 + 0.8 * Math.abs(Math.sin(t * s.speed + s.off));
        ctx.save(); ctx.globalAlpha = a;
        ctx.fillStyle = s.green ? '#00ff88' : '#ffffff';
        ctx.shadowBlur = s.green ? 6 : 3;
        ctx.shadowColor = s.green ? 'rgba(0,255,136,0.9)' : 'rgba(255,255,255,0.5)';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });

      // ---- Shooting Stars ----
      if (Math.random() < 0.012) shooters.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height * 0.4, len: Math.random() * 130 + 60, spd: Math.random() * 9 + 5, a: 1 });
      shooters = shooters.filter(s => s.a > 0);
      shooters.forEach(s => {
        const ang = Math.PI / 5;
        ctx.save(); ctx.globalAlpha = s.a;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.len * Math.cos(ang), s.y - s.len * Math.sin(ang));
        g.addColorStop(0, 'rgba(0,255,136,0.9)'); g.addColorStop(1, 'transparent');
        ctx.strokeStyle = g; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.len * Math.cos(ang), s.y - s.len * Math.sin(ang)); ctx.stroke();
        ctx.restore();
        s.x += s.spd * Math.cos(ang); s.y += s.spd * Math.sin(ang); s.a -= 0.018;
      });

      t++; animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'linear-gradient(135deg,#010a06 0%,#020f08 50%,#010a06 100%)' }} />
  );
};

export default StarField;
