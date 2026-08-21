import { Download, Eye } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { personal } from "../data/site";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { timeline } from "../data/experience";
import { certifications } from "../data/certifications";

export default function Resume() {
  return (
    <>
      <section className="container-page py-14 md:py-20">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading eyebrow="Resume" title="My resume, at a glance" />
          <div className="flex flex-wrap gap-3">
            <a href={personal.resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Eye size={16} /> View Resume
            </a>
            <a href={personal.resumeFile} download className="btn btn-primary">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        <Reveal delay={0.05} className="mt-10 rounded-2xl card-surface p-6 sm:p-8">
          <p className="eyebrow mb-3">Summary</p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{personal.summary}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <p className="eyebrow mb-4">Skills</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-xl card-surface p-5">
                <p className="font-display text-sm font-semibold mb-2.5">{g.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {g.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <p className="eyebrow mb-4">Projects</p>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.id} className="rounded-xl card-surface p-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display font-semibold text-sm">
                    {p.index} — {p.name}
                    <span className="font-normal" style={{ color: "var(--text-muted)" }}> · {p.tagline}</span>
                  </p>
                  <p className="mt-1 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {p.tech.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Reveal delay={0.2}>
            <p className="eyebrow mb-4">Education & Experience</p>
            <div className="space-y-3">
              {timeline.map((t) => (
                <div key={t.title} className="rounded-xl card-surface p-5">
                  <p className="font-display font-semibold text-sm">{t.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--accent-2)" }}>{t.org} · {t.period}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="eyebrow mb-4">Certifications</p>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.title} className="rounded-xl card-surface p-5">
                  <p className="font-display font-semibold text-sm">{c.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{c.issuer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PageNav current="/resume" />
    </>
  );
}
