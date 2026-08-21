import { Link, useParams, Navigate } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft, ArrowRight, LayoutGrid, CheckCircle2, Lightbulb, Compass, Workflow as WorkflowIcon, ImageIcon, AlertTriangle, Trophy, Rocket } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects, getProjectById } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <Navigate to="/404" replace />;

  const idx = projects.findIndex((p) => p.id === id);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <section className="container-page pt-12 pb-8">
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent-2)] transition-colors focus-ring rounded-md"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <span className="font-mono text-sm" style={{ color: "var(--accent-2)" }}>{project.index}</span>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">{project.name}</h1>
              <p className="mt-2 text-lg" style={{ color: "var(--text-muted)" }}>{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.category.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={16} /> Live Demo
                </a>
              ) : (
                <span className="btn btn-disabled" aria-disabled="true" title="No live deployment available">
                  <ExternalLink size={16} /> Live Demo
                </span>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-10">
        <Reveal>
          <div className="rounded-2xl card-surface p-8 flex items-center justify-center aspect-[16/7] overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-60"
              style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent) 16%, transparent), color-mix(in oklab, var(--accent-2) 12%, transparent))" }}
            />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <ImageIcon size={28} style={{ color: "var(--text-muted)" }} />
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Screenshot placeholder — add product screenshots here
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-14">
        <div className="grid lg:grid-cols-[1fr_0.65fr] gap-10">
          <div className="space-y-10">
            <DetailBlock icon={Compass} title="Overview" text={project.overview} delay={0} />
            <DetailBlock icon={AlertTriangle} title="Problem" text={project.problem} delay={0.05} />
            <DetailBlock icon={Lightbulb} title="Solution" text={project.solution} delay={0.1} />

            <Reveal delay={0.15}>
              <SectionTitle icon={CheckCircle2} title="Features" />
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--accent-2)" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <DetailBlock icon={LayoutGrid} title="Architecture" text={project.architecture} delay={0.2} />

            <Reveal delay={0.25}>
              <SectionTitle icon={WorkflowIcon} title="Workflow" />
              <ol className="mt-4 space-y-3">
                {project.workflow.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <span
                      className="font-mono text-xs h-6 w-6 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "var(--bg-elev-2)", color: "var(--accent-2)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <DetailBlock icon={AlertTriangle} title="Challenges" text={project.challenges} delay={0.3} />
            <DetailBlock icon={Trophy} title="Results" text={project.results} delay={0.35} />

            <Reveal delay={0.4}>
              <SectionTitle icon={Rocket} title="Future Improvements" />
              <ul className="mt-4 space-y-2.5">
                {project.future.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--accent-2)" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28 h-fit space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl card-surface p-6">
                <p className="eyebrow mb-4">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl card-surface p-6">
                <p className="eyebrow mb-4">Links</p>
                <div className="flex flex-col gap-2.5">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  ) : (
                    <span className="btn btn-disabled w-full" aria-disabled="true">
                      <ExternalLink size={15} /> Live Demo unavailable
                    </span>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                    <Github size={15} /> View GitHub Repo
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <nav
        aria-label="Project navigation"
        className="container-page py-10 flex items-center justify-between gap-3 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {prev ? (
          <Link to={`/projects/${prev.id}`} className="btn btn-outline focus-ring !px-3 sm:!px-5">
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Previous Project</span>
          </Link>
        ) : <span />}
        <Link to="/projects" className="btn btn-outline focus-ring !px-3 sm:!px-5">
          Back to Projects
        </Link>
        {next ? (
          <Link to={`/projects/${next.id}`} className="btn btn-outline focus-ring !px-3 sm:!px-5">
            <span className="hidden sm:inline">Next Project</span>
            <ArrowRight size={15} />
          </Link>
        ) : <span />}
      </nav>
    </>
  );
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon size={17} style={{ color: "var(--accent-2)" }} />
      <h2 className="font-display text-xl font-semibold">{title}</h2>
    </div>
  );
}

function DetailBlock({ icon, title, text, delay }) {
  return (
    <Reveal delay={delay}>
      <SectionTitle icon={icon} title={title} />
      <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{text}</p>
    </Reveal>
  );
}
