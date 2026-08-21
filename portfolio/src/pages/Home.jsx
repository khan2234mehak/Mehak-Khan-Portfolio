import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight, Download, FolderGit2 } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { personal, whatIBuild } from "../data/site";
import { projects } from "../data/projects";

function TechVisual() {
  const nodes = [
    { x: 40, y: 60, label: "Data" },
    { x: 150, y: 20, label: "Model" },
    { x: 150, y: 110, label: "API" },
    { x: 270, y: 60, label: "UI" },
  ];
  const links = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
  return (
    <div className="relative mx-auto w-full max-w-md aspect-[4/3]">
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent) 14%, transparent), color-mix(in oklab, var(--accent-2) 10%, transparent))" }}
      />
      <svg viewBox="0 0 320 160" className="relative h-full w-full p-6">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#lineGrad)"
            strokeWidth="1.4"
            opacity="0.55"
          >
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </line>
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="5.5" fill="var(--bg-elev)" stroke="var(--accent-2)" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="2" fill="var(--accent-2)">
              <animate attributeName="r" values="2;3.2;2" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <text x={n.x} y={n.y + 22} textAnchor="middle" className="font-mono" fontSize="9" fill="var(--text-muted)">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="container-page pt-8 pb-20 md:pt-14 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="animate-fade-in-up">
            <p className="eyebrow mb-5">Full Stack · Data Science · Machine Learning</p>
            <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl leading-[1.05]">
              MEHAK <span className="text-grad">KHAN</span>
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl font-medium" style={{ color: "var(--text-muted)" }}>
              Full Stack Developer <span style={{ color: "var(--border)" }}>|</span> Data Science &amp; Machine Learning Enthusiast
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {personal.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary">
                <FolderGit2 size={16} /> View Projects
              </Link>
              <a href={personal.resumeFile} download className="btn btn-outline">
                <Download size={16} /> Download Resume
              </a>
              <Link to="/contact" className="btn btn-outline">
                <Mail size={16} /> Contact Me
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in new tab)"
                className="h-10 w-10 flex items-center justify-center rounded-xl card-surface hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-colors focus-ring"
              >
                <Github size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in new tab)"
                className="h-10 w-10 flex items-center justify-center rounded-xl card-surface hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-colors focus-ring"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send an email"
                className="h-10 w-10 flex items-center justify-center rounded-xl card-surface hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-colors focus-ring"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          <Reveal delay={0.15}>
            <TechVisual />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-20">
          <p className="eyebrow mb-5 text-center sm:text-left">What I build</p>
          <div className="flex flex-wrap gap-3">
            {whatIBuild.map((item) => (
              <span
                key={item}
                className="card-surface rounded-full px-4 py-2 text-sm font-medium hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
          <SectionHeading
            eyebrow="Selected work"
            title="A few things I've shipped"
            description="Full-stack platforms and ML systems built end-to-end, from data to deployed API."
          />
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all focus-ring rounded-md"
            style={{ color: "var(--accent-2)" }}
          >
            View all 8 projects <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} delay={i * 0.08} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link to="/projects" className="btn btn-outline w-full">
            View all 8 projects <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <PageNav current="/" />
    </>
  );
}

function FeaturedCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/projects/${project.id}`}
        className="group block h-full rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-2)] focus-ring"
      >
        <span className="font-mono text-xs" style={{ color: "var(--accent-2)" }}>{project.index}</span>
        <h3 className="mt-3 font-display text-lg font-semibold">{project.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <span
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
          style={{ color: "var(--accent-2)" }}
        >
          Case study <ArrowRight size={14} />
        </span>
      </Link>
    </Reveal>
  );
}
