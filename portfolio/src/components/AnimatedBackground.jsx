import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

// A quiet, ambient "data-pipeline" motif: nodes drifting slowly and linking
// to nearby neighbours, echoing the graphs/pipelines in Mehak's ML work.
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width, height, dpr;
    let nodes = [];
    let raf;

    const nodeColor = theme === "light" ? "124,92,255" : "156,133,255";
    const lineColor = theme === "light" ? "34,211,238" : "34,211,238";

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((width * height) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(${lineColor},${0.14 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${nodeColor},0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }

    resize();
    if (!prefersReduced) {
      step();
    } else {
      // Draw a single static frame for reduced-motion users
      step();
      cancelAnimationFrame(raf);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const glow = glowRef.current;
    if (!glow) return;
    let raf;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const animate = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.transform = `translate3d(${cx - 220}px, ${cy - 220}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 90%)",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[var(--color-violet-500)] opacity-20 blur-[110px] animate-orb-float" />
      <div className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full bg-[var(--color-cyan-400)] opacity-[0.16] blur-[120px] animate-orb-float-slow" />
      <div className="absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-[var(--color-rose-400)] opacity-[0.08] blur-[110px] animate-orb-float" />

      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="absolute h-[440px] w-[440px] rounded-full opacity-[0.10] blur-[90px] will-change-transform hidden md:block"
        style={{ background: "radial-gradient(circle, var(--color-cyan-400), transparent 70%)" }}
      />

      {/* Particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 50% -10%, transparent 40%, var(--bg) 95%)" }}
      />
    </div>
  );
}
