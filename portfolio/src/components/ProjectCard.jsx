import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative h-full flex flex-col rounded-2xl card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-2)]">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: "linear-gradient(140deg, color-mix(in oklab, var(--accent) 10%, transparent), transparent 60%)" }}
        />
        <div className="relative p-6 flex flex-col h-full">
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-xs" style={{ color: "var(--accent-2)" }}>
              {project.index}
            </span>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {project.category.slice(0, 2).map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
            {project.tech.length > 5 && (
              <span className="chip">+{project.tech.length - 5}</span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !py-2 !px-3.5 !text-[0.82rem]"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            ) : (
              <span className="btn btn-disabled !py-2 !px-3.5 !text-[0.82rem]" aria-disabled="true" title="No live deployment available">
                <ExternalLink size={14} /> Live Demo
              </span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !py-2 !px-3.5 !text-[0.82rem]"
            >
              <Github size={14} /> GitHub
            </a>
            <Link
              to={`/projects/${project.id}`}
              className="ml-auto inline-flex items-center gap-1 text-sm font-semibold hover:gap-1.5 transition-all focus-ring rounded-md"
              style={{ color: "var(--accent-2)" }}
            >
              Case Study <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
